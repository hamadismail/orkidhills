import React from "react";
import logo from "./assets/logo.png";

const Template = ({ formData }) => {
  const {
    reservationNo,
    roomNo,
    nationality,
    guestNo,
    contact,
    arrivalDate,
    departureDate,
    totalPrice,
    paymentStatus,
  } = formData;

  return (
    <div className="w-11/12 mx-auto mt-12">
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
      <div className="text flex gap-56 my-8">
        <div className="flex flex-col">
          <span>Reservation No. : {reservationNo}</span>
          <span>Nationality : {nationality}</span>
          <span>Contact : {contact}</span>
          <span>IC / Passport :</span>
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
            <div className="w-1/3 p-1 border-r border-black min-h-[80px]"></div>
            <div className="w-1/3 p-1 border-r border-black leading-tight">
              <div></div>
              <div>SST (8%)</div>
              <div>TOURISM TAX (4X10)</div>
              <div>FnF Discount</div>
            </div>
            <div className="w-1/3 p-1"></div>
          </div>
        </div>
        <p className="ml-auto mr-8 w-fit font-semibold flex gap-4">
          Total Price: <span>RM {totalPrice}</span>
        </p>
      </div>
      {/* Price & Notes Section */}
      <div className="border my-2 text-sm p-3">
        <div className="font-semibold">Total Price :</div>
        <div className="mt-1">
          (Including GST + Tourism Tax + Service Charge)
        </div>
        <div className="mt-1 font-semibold">Pricing Policy :</div>
        <div className="mt-1 font-semibold">Net Price In Words :</div>
        <div className="mt-1 font-semibold">
          Only. Payment Status : {paymentStatus}
        </div>
      </div>
      {/* Notice Section */}
      <div className="text-xs border border-black p-3 leading-tight">
        <div className="mb-1 font-semibold">Bill To Mr. : {contact}</div>
        <p>
          NOTICE TO GUESTS: This property is privately owned and the management
          reserves the right to refuse service to anyone. Management will not be
          responsible for accidents or injury to guests or for loss of money,
          jewellery or valuables of any kind. Management will not be responsible
          for any item left in the room. CHECKOUT TIME: 12:00 AM SELF
          REGISTRATION ONLY. I AGREE that my liability for this bill is not
          waived and agree to be held personally liable in the event that the
          indicated person or company failed to pay for any part or full amount
          of these charges including any missing/damaged items, etc.. I agree
          that if an attorney is retained to collect these charges, I will pay
          all reasonable attorney's fees and costs incurred. If payment is by
          credit card you are authorized to charge my account for all charges
          incurred, including any and all damages/missing items, etc.. I agree
          that the sole purpose of renting this room is for my own residency
          only.
        </p>
      </div>
    </div>
  );
};

export default Template;
