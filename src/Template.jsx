import React, { use, useRef } from "react";
import logo from "./assets/logo.png";
import { Context } from "./providers/Context";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import toast, { Toaster } from "react-hot-toast";

const Template = () => {
  const receiptRef = useRef();
  const { formData } = use(Context);
  console.log(formData);
  const {
    reservationNo,
    roomNo,
    nationality,
    guestNo,
    contact,
    arrivalDate,
    departureDate,
    passPort,
    roomDetails,
    bookingFees,
    sst,
    tax,
    discount,
    guests,
    policy,
    priceword,
    paymentStatus,
  } = formData || {};

  const ConvertedBookingFees = bookingFees && parseFloat(bookingFees);
  const Convertedsst = sst && parseFloat(sst);
  const ConvertedTax = tax && parseFloat(tax);
  const ConvertedDiscount = discount && parseFloat(discount);

  const totalFees =
    ConvertedBookingFees + Convertedsst + ConvertedTax - ConvertedDiscount;

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
    <div className="w-4xl mx-auto mt-12">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="px-12 pt-12" ref={receiptRef}>
        {" "}
        <div className="flex flex-col items-center">
          <img className="w-96" src={logo} />
          <p className="border-2 mt-2 mb-3 w-3/5"></p>
          <p className="text-sm">
            300, Jalan Pudu, Pudu,55100, Kuala Lumpur, Hotline: +60 129383004,
            +60178988418 E-mail: orkidhills@gmail.com{" "}
          </p>
        </div>
        {/* Header Info */}
        <div className="text flex justify-center gap-16 my-8">
          <div className="flex flex-col">
            <span>Reservation No. : {reservationNo}</span>
            <span>Nationality : {nationality}</span>
            <span>Contact : {contact}</span>
            <span>IC / Passport : {passPort} </span>
          </div>

          <div className="flex flex-col">
            <span>Room No. : {roomNo}</span>
            <span>No. Of Guest : {guestNo}</span>
            <span>Date of Arrival : {arrivalDate}</span>
            <span>Date of Departure : {departureDate}</span>
          </div>
        </div>
        <p className="text-center border-b-2 pb-2 mb-3 w-fit mx-auto font-semibold text-xl">
          Confirmation of Reservation
        </p>
        {/* Table Section */}
        <div className="">
          <div className="border border-black text-sm">
            <div className="flex font-semibold border-b border-black">
              <div className="w-1/3 py-1 px-2 border-r border-black">
                Other Guests
              </div>
              <div className="w-1/3 py-1 px-2 border-r border-black">
                Particular
              </div>
              <div className="w-1/3 py-1 px-2">Amount</div>
            </div>
            <div className="flex text-sm">
              <div className="w-1/3 p-1 border-r border-black min-h-[80px]">
                {guests}
              </div>
              <div className="w-1/3 p-1 border-r border-black leading-tight">
                <div>{roomDetails}</div>
                <div>SST (8%)</div>
                <div>TOURISM TAX (4X10)</div>
                <div>FnF Discount</div>
              </div>
              <div className="w-1/3 p-1">
                <div>RM {bookingFees}</div>
                <div>RM {sst}</div>
                <div>RM {tax}</div>
                <div>RM {discount}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Price & Notes Section */}
        <div className="border my-2 text-sm p-3">
          <div className="pl-64 gap-48 flex font-semibold">
            <p className="">Total Price:</p>
            <span>RM {totalFees}</span>
          </div>
          <div className="mt-1">
            (Including GST + Tourism Tax + Service Charge)
          </div>
          <div className="mt-1 font-semibold">Pricing Policy : {policy}</div>
          <div className="mt-1 font-semibold">
            Net Price In Words : {priceword}
          </div>
          <div className="mt-1 font-semibold">
            Payment Status : {paymentStatus}
          </div>
        </div>
        {/* Notice Section */}
        <div className="text-xs border border-black p-3 leading-tight">
          <div className="mb-1 font-semibold">Bill To Mr. : {contact}</div>
          <p>
            NOTICE TO GUESTS: This property is privately owned and the
            management reserves the right to refuse service to anyone.
            Management will not be responsible for accidents or injury to guests
            or for loss of money, jewellery or valuables of any kind. Management
            will not be responsible for any item left in the room. CHECKOUT
            TIME: 12:00 AM SELF REGISTRATION ONLY. I AGREE that my liability for
            this bill is not waived and agree to be held personally liable in
            the event that the indicated person or company failed to pay for any
            part or full amount of these charges including any missing/damaged
            items, etc.. I agree that if an attorney is retained to collect
            these charges, I will pay all reasonable attorney's fees and costs
            incurred. If payment is by credit card you are authorized to charge
            my account for all charges incurred, including any and all
            damages/missing items, etc.. I agree that the sole purpose of
            renting this room is for my own residency only.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-8">
        <button
          onClick={generatePDF}
          className="px-2 py-1 bg-purple-900 text-white rounded cursor-pointer"
        >
          Download Pdf
        </button>
      </div>
    </div>
  );
};

export default Template;
