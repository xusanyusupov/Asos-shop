import { FaXmark } from "react-icons/fa6"; 
import React, { useState } from "react";

import uzbekistan from "@/assets/256px-Flag_of_Uzbekistan.svg.png"
import russia from "@/assets/256px-Flag_of_Russia.svg.png";
import usa from "@/assets/united-states.png";
import visa from '@/assets/visa.png'
import master from '@/assets/master.png'
import paypal from '@/assets/paypal.png'
import americanExperess from '@/assets/american-express.png'





const TopBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [selectedValue, setSelectedValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("uz")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedValue(selectedValue || "uz")
    closeModal(); 
  };


  return (
    <>
          <div className="container max-lg:max-w-none">
          <div className="flex items-center justify-end gap-3 ">
            <span className="inter border-x-2 px-3">Helps FAQS</span>
            <button className="border-r-2 pr-3" onClick={openModal}>
              <img
                src={
                  submittedValue === "usa"
                    ? usa
                    : submittedValue === "ru"
                    ? russia
                    : uzbekistan
                }
                className="w-5 h-5 rounded-full object-cover"
                alt=""
              />
            </button>

            {isOpen && (
              <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-modalBg z-50">
                <div className="flex flex-col bg-white max-w-96 w-full py-6 px-8 gap-7">
                  <div className="flex items-center justify-between border-b-2 pb-3">
                    <span className="text-xl font-sans font-bold">PREFERENCES</span>
                    <button onClick={closeModal}>
                      <FaXmark className="text-2xl" />
                    </button>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-sans font-bold">SHOP IN :</span>
                    <form
                      onSubmit={handleSubmit}
                      action=""
                      className="w-full flex flex-col gap-4"
                    >
                      <select
                        value={selectedValue} 
                        onChange={(e) => setSelectedValue(e.target.value)}
                        className="w-full border border-modal"
                      >
                        <option value="uz">Uzbekistan</option>
                        <option value="ru">Russia</option>
                        <option value="usa">USA</option>
                      </select>

                      <div className="flex items-center gap-3">
                        <img
                          title="visa "
                          className="w-10 h-8 object-cover"
                          src={visa}
                          alt="visa"
                        />
                        <img
                          title="american express "
                          className="w-10 h-8 object-cover"
                          src={americanExperess}
                          alt="american express"
                        />
                        <img
                          title="master "
                          className="w-10 h-8 object-cover"
                          src={master}
                          alt="master"
                        />
                        <img
                          title="paypal "
                          className="w-10 h-8 object-cover"
                          src={paypal}
                          alt="paypal"
                        />
                      </div>
                      <span className="font-sans ">CURRENCY: {selectedValue === 'usa' ? 'USD' : selectedValue === 'ru' ? 'RUBL' : 'UZS'}</span>
                      <button
                        type="submit"
                        className="w-full py-2 mt-20 bg-black text-white inter"
                      >
                        SEASONS UPDATE
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </>
  )
}

export default TopBar