import React, { use, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Context } from "./providers/Context";

function App() {
  const navigate = useNavigate();
  const { formData, setFormData } = use(Context);

  const receiptRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
            onClick={() => navigate("/template")}
          >
            Generate Receipt
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
