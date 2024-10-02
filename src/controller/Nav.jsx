// icon
import iconcat from "../asset/icon/cat.png";
import iconsearch from "../asset/icon/search.png";
import iconheart from "../asset/icon/heart.png";
import iconshopping from "../asset/icon/shopping-cart.png";


function Nav() {
  return (
    <div className="self-stretch px-10 py-6 bg-white rounded-[40px] shadow justify-between items-center inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <div className="w-5 h-5">
          <img className="w-5 h-5 absolute rounded-full" src={iconcat} />
        </div>
        <div className="text-black text-xl font-bold font-['Poppins']">Pet Shop</div>
      </div>
      <div className="justify-center items-center gap-6 flex">
        <div className="px-2.5 py-1 border-b-2 border-[#0442bf] justify-center items-center gap-2.5 flex">
          <div className="text-[#0442bf] text-xl font-semibold font-['Poppins']">Home</div>
        </div>
        <div className="px-2.5 py-1 justify-center items-center gap-2.5 flex">
          <div className="text-black text-xl font-medium font-['Poppins']">Shop</div>
        </div>
        <div className="px-2.5 py-1 justify-center items-center gap-2.5 flex">
          <div className="text-black text-xl font-medium font-['Poppins']">About Us</div>
        </div>
        <div className="px-2.5 py-1 justify-center items-center gap-2.5 flex">
          <div className="text-black text-xl font-medium font-['Poppins']">Contact Us</div>
        </div>
      </div>
      <div className="justify-start items-center gap-6 flex">
        <div className="w-[280px] h-10 pl-4 pr-[5px] py-[9px] bg-[#f8f9fa] rounded-[20px] justify-start items-center gap-2 flex">
          <div className="grow shrink basis-0 text-black/60 text-base font-normal font-['Poppins'] leading-tight">Search products...</div>
          <div className="w-7 h-7 relative rounded-[50px]">
          <img className="w-7 h-7 relative rounded-[50px] absolute rounded-full" src={iconsearch} />
        </div>
        </div>
        <div className="justify-start items-start gap-6 flex">
          <div className="w-6 h-6 relative">
            <div className="w-6 h-6 left-[1px] top-[1px] ">
          <img className="w-6 h-6 left-[1px] top-[1px]  rounded-full" src={iconheart} />
        </div>
            <div className="w-3 h-3 p-2.5 left-[18px] top-[-6px] absolute bg-[#0442bf] rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-[10px] font-normal font-['Inter'] leading-tight">0</div>
            </div>
          </div>
          <div className="w-6 h-6 relative">
            <div className="w-6 h-6 left-0 top-0 ">
          <img className="w-6 h-6 left-0 top-0 absolute rounded-full" src={iconshopping} />
        </div>
            <div className="w-3 h-3 p-2.5 left-[18px] top-[-6px] absolute bg-[#0442bf] rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-[10px] font-normal font-['Inter'] leading-tight">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Nav;
