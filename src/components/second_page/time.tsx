import MainImg from "../../assets/img/img_4.JPG";
import TimeImg from "../../assets/icons/Time.svg?react";
import FadeInSection from "../FadeInSection.tsx";

function Time() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#f7f4f1] py-10">
      <div className="w-3/5 flex flex-col justify-center items-center">
        <TimeImg className="w-1/2 h-auto" />
        <FadeInSection>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-0.5 h-20 bg-black my-5"></div>
            <h1 className="text-6xl">12:30</h1>
            <p className="text-xl text-center">Փեսայի տուն</p>
            <p className="text-xl text-center">Արցախի 20</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-0.5 h-20 bg-black my-5"></div>
            <h1 className="text-6xl">14:00</h1>
            <p className="text-xl text-center">Հարսի տուն </p>
            <p className="text-xl text-center">Պարիս Հերունի, 40</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-0.5 h-20 bg-black my-5"></div>
            <h1 className="text-6xl text-center">15:00</h1>
            <p className="text-xl text-center">Պսակադրության արարողություն</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-0.5 h-20 bg-black my-5"></div>
            <h1 className="text-6xl text-center">17:00</h1>
            <p className="text-xl text-center">Տոնական խնջույք</p>
          </div>
        </FadeInSection>
        <img src={MainImg} alt="img" className="w-1/2 mt-5" />
        <h1 className="mt-10 text-2xl text-center">
          Խնդրում ենք հաստատել Ձեր ներկայությունը մինչև Հուլիսի 20-ը
        </h1>
      </div>
    </div>
  );
}

export default Time;
