import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Template from "./Template";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [formData, setFormData] = useState({
    reservationNo: "",
    roomNo: "",
    nationality: "",
    guestNo: "",
    contact: "",
    arrivalDate: "",
    passPort: "",
    departureDate: "",
    totalPrice: "",
    paymentStatus: "",
  });

  const receiptRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const input = receiptRef.current;

    html2canvas(input, {
      scale: 2, // 2 is a good balance for quality vs size
      useCORS: true,
      allowTaint: false,
      logging: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.75); // JPEG reduces size significantly
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("booking-receipt.pdf");

      toast.success("Download Completed");
    });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-11/12 mx-auto mb-12">
        {/* info */}
        <h2 className="text-center mt-12 text-4xl md:text-6xl bg-gray-100 p-4 text-purple-900 font-semibold">
          Orkids <span>Hills</span>
        </h2>
        <p className="text-center mt-2 bg-purple-900 text-white py-1">
          Book Reservation Now
        </p>

        {/* form */}
        <form className="flex flex-col items-center gap-2 mt-8">
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="reservationNo"
            onChange={handleChange}
            placeholder="Reservation No"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="roomNo"
            onChange={handleChange}
            placeholder="Room No"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="nationality"
            onChange={handleChange}
            placeholder="Nationality"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="guestNo"
            onChange={handleChange}
            placeholder="No. of Guests"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="contact"
            onChange={handleChange}
            placeholder="Contact"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="arrivalDate"
            onChange={handleChange}
            placeholder="Date of Arrival"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="departureDate"
            onChange={handleChange}
            placeholder="Date of Departure"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="totalPrice"
            onChange={handleChange}
            placeholder="Total Price"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="paymentStatus"
            onChange={handleChange}
            placeholder="Payment Status"
          />
          <button
            className="px-2 py-1 bg-purple-900 text-white cursor-pointer rounded text-center mt-2"
            type="button"
            onClick={generatePDF}
          >
            Generate Receipt
          </button>
        </form>
      </div>
      {/* template */}
      <div
        ref={receiptRef}
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          width: "250mm", // Ensures correct A4 scaling
          padding: "20px",
          background: "white", // Important for visibility
          zIndex: -1,
        }}
      >
        <Template formData={formData} />
      </div>
    </div>
  );
}

export default App;
