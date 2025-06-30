import Cal from "../../assets/icons/Cal.svg?react";
import Heart from "../../assets/icons/Heart.png";
import FadeInSection from '../FadeInSection.tsx'

function DearGuests() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#232222] rounded-3xl relative pt-12">
      <div className="w-1/3 text-center text-[#f7f4f1] z-20">
      <FadeInSection>
        <h1 className="text-3xl mb-5">Հարգելի՛ հյուրեր</h1>
        <h2 className="text-xl mb-15">
          Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանյաց արարողությանը։
          Ծանոթացեք ծրագրին և հաստատեք Ձեր ներկայությունը մինչև Հուլիսի 20-ը:
        </h2>
        <div className="flex px-10 !justify-between text-xl text-white">
          <h2>Օգոստոս 2025</h2>
        </div>
        </FadeInSection>
      </div>
      <div className="relative z-10">
        <img
          src={Heart}
          alt="heart"
          className="absolute z-0 left-55 top-20.5 w-15 h-15 animate-pulse"
        />
        <Cal className="relative z-10 w-100" />
      </div>
    </div>
  );
}

export default DearGuests;
