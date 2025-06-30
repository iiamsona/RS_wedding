import WLove from "../../assets/icons/wLove.svg?react";
import RS from "../../assets/icons/RS.svg?react";
import Details from "../../assets/icons/Details.svg?react";

function WithLove() {
  return (
    <div className="flex justify-center items-center flex-col bg-[#232222] rounded-t-3xl relative pt-12">
      <Details className="w-1/4 h-auto" />
      <h1 className="w-1/4 text-xl text-center text-white my-5">
        Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ, ինչպես նաև
        հարմարավետ կոշիկներ՝ պարելու համար։
      </h1>
      <h1 className="w-1/4 text-xl text-center text-white my-5 mb-10">Թույլ տանք, որ այդ օրը սպիտակ զգեստով լինի միայն հարսնացուն 🤍</h1>
      <WLove />
      <RS className="fill-white w-50 h-auto" />
    </div>
  );
}

export default WithLove;
