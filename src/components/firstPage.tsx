import MainImg from "../assets/img/img_1.JPG";
import RS from "../assets/icons/RS.svg?react";

interface Props {
  onContinue: () => void;
}

function FirstPage({ onContinue }: Props) {
  
  return (
    <div className="relative w-full h-screen bg-[#cccccc] text-center flex justify-center items-center overflow-hidden">
      <img
        src={MainImg}
        alt="Main"
        className="absolute w-full h-full object-cover md:w-auto md:min-w-[530px] md:min-h-[780px] z-10"
      />
      <div className="relative z-20 text-center flex justify-between items-center flex-col h-full">
        <h1 className="text-xl md:text-3xl font-semibold uppercase text-gray mb-10 mt-10">
          Rafayel & Sinareta
        </h1>
        <RS className="w-40 h-40 md:w-60 md:h-60 block mx-auto fill-gray opacity-70 mt-20 md:mt-40" />
        <button onClick={onContinue} className="px-6 py-3 md:px-12 md:py-5 mb-20 md:mb-40 border border-gray text-gray font-semibold bg-transparent cursor-pointer text-xl md:text-3xl">
          Բացել
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
