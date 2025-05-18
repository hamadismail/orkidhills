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
      passPort: form.passport.value,
      departureDate: form.departureDate.value,
      roomDetails: form.roomdetails.value,
      bookingFees: form.bookingfees.value,
      sst: form.sst.value,
      tax: form.tax.value,
      discount: form.discount.value,
      guests: form.guests.value,
      policy: form.policy.value,
      priceword: form.priceword.value,
      paymentStatus: form.paymentstatus.value,
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
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Reservation No. :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="reservationNo"
                placeholder="e.g. LIS 176335497"
                required
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Room No. :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="roomNo"
                placeholder="e.g. 403"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Nationality :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="nationality"
                placeholder="e.g Bangladeshi"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>No. Of Guest :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="guestNo"
                placeholder="e.g  Maximum 04"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Contact :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="contact"
                placeholder="e.g  Md. Abdullah Al Mamun"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Date of Arrival :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="arrivalDate"
                placeholder="e.g  06.05.2025"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>IC / Passport :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="passport"
                placeholder="e.g A16529137"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Date of Departure :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="departureDate"
                placeholder="e.g 10.05.2025"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Room Details :</label>
              <textarea
                required
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="roomdetails"
                placeholder="e.g FAMILY SUITE ROOM (4 X 350)"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Booking Fees :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="bookingfees"
                type="number"
                placeholder="e.g 1400.00"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>SST (8%) :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="sst"
                type="number"
                placeholder="e.g 112.00"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>TOURISM TAX :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="tax"
                type="number"
                placeholder="e.g 40.00"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>FnF Discount :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="discount"
                type="number"
                placeholder="e.g 352.00"
              />
            </div>
            <div className="flex max-md:flex-col gap-2 md:gap-4 items-center">
              <label>Other Guests :</label>
              <textarea
                className="px-2 py-1 bg-gray-100 rounded text-center"
                name="guests"
                type="text"
                placeholder="e.g Hima Islam, P- A16454761"
              />
            </div>
            <div className="flex max-md:flex-col md:col-span-2 gap-2 md:gap-4 items-center">
              <label>Pricing Policy :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center md:w-1/2"
                name="policy"
                type="text"
                placeholder="e.g D. Friend’s & Family Discount Package "
              />
            </div>
            <div className="flex max-md:flex-col md:col-span-2 gap-2 md:gap-4 items-center">
              <label>Net Price In Words :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center md:w-1/2"
                name="priceword"
                type="text"
                placeholder="e.g D. Malaysian Ringgit One Thousand Two Hundred Only."
              />
            </div>
            <div className="flex max-md:flex-col md:col-span-2 gap-2 md:gap-4 items-center">
              <label>Payment Status :</label>
              <input
                className="px-2 py-1 bg-gray-100 rounded text-center md:w-1/2"
                name="paymentstatus"
                type="text"
                placeholder="e.g Received Full amount through Bank Transfer."
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="w-full md:w-3/4 py-1 bg-purple-900 text-white cursor-pointer rounded text-center mt-2"
              type="submit"
            >
              Generate Receipt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
