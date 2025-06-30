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
        className="absolute w-auto min-w-[530px] h-full min-h-[780px] object-contain z-10"
      />
      <div className="relative z-20 text-center flex justify-between items-center flex-col h-full">
        <h1 className="text-3xl font-semibold uppercase text-gray mb-10 mt-10">
          Rafayel & Sinareta
        </h1>
        <RS className="w-100 h-100 block mx-auto fill-gray opacity-70 mt-40" />
        <button onClick={onContinue} className="px-12 py-5 mb-40 border border-gray text-gray font-semibold bg-transparent cursor-pointer text-3xl">
          Բացել
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
