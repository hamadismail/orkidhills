import React, { use, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "./providers/Context";

function App() {
  const navigate = useNavigate();
  const { setFormData } = use(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      reservationNo: form.reservationNo.value,
      roomNo: form.roomNo.value,
      nationality: form.nationality.value,
      guestNo: form.guestNo.value,
      contact: form.contact.value,
      arrivalDate: form.arrivalDate.value,
      departureDate: form.departureDate.value,
      totalPrice: form.totalPrice.value,
      paymentStatus: form.paymentStatus.value,
    };

    setFormData(data);
    navigate("/template");
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
        <form
          className="flex flex-col items-center gap-2 mt-8"
          onSubmit={handleSubmit}
        >
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="reservationNo"
            placeholder="Reservation No"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="roomNo"
            placeholder="Room No"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="nationality"
            placeholder="Nationality"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="guestNo"
            placeholder="No. of Guests"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="contact"
            placeholder="Contact"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="arrivalDate"
            placeholder="Date of Arrival"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="departureDate"
            placeholder="Date of Departure"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="totalPrice"
            placeholder="Total Price"
          />
          <input
            className="px-2 py-1 bg-gray-200 rounded text-center"
            name="paymentStatus"
            placeholder="Payment Status"
          />

          <button
            className="px-2 py-1 bg-purple-900 text-white cursor-pointer rounded text-center mt-2"
            type="submit"
          >
            Generate Receipt
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
