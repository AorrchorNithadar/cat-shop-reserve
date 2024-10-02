import Foot from "./controller/Foot";
import Nav from "./controller/Nav";

import { Link } from 'react-router-dom';

function App() {
  return (

    <div className="w-[1920px] h-[3784px] bg-white flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-[767px] px-[312px] bg-[#f8f9fa] flex-col justify-start items-center flex">

        {/* Nav */}
        <Nav />

        {/* Detail */}
        <div className="self-stretch grow shrink basis-0 flex-col justify-center items-start gap-[45px] flex">
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="text-[#0442bf] text-base font-bold font-['Inter'] capitalize">Pet shop</div>
            <div className="w-[647px] text-black text-[54px] font-bold font-['Poppins']">A pet store with everything you need</div>
          </div>
          <div className="w-[479px] text-black/80 text-base font-normal font-['Inter'] leading-relaxed">Sociis blandit et pellentesque aliquet at quisque tortor lacinia nullam. Mattis aenean scelerisque dui libero</div>
          <div className="h-[60px] px-10 py-[17px] bg-[#090606] rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xl font-semibold font-['Poppins']">Shop Now</div>
          </div>
        </div>
      </div>

      <div className="self-stretch h-[528px] px-[312px] py-[60px] flex-col justify-start items-center gap-[60px] flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-black text-[40px] font-semibold font-['Poppins'] leading-tight">Browse by category</div>
          <div className="justify-start items-start gap-10 flex">
            <div className="w-10 h-10 p-2.5 origin-top-left rotate-10 bg-black rounded-[50px]" />
            <div className="w-10 h-10 p-2.5 bg-black rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-end gap-6 inline-flex">
          <div className="rounded-[20px] flex-col justify-start items-start inline-flex">
            <img className="w-[306px] h-[216px] relative" src="https://via.placeholder.com/306x216" />
            <div className="w-[306px] px-4 py-5 bg-[#f8f9fa] justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Accessories</div>
                <div className="text-black/60 text-base font-normal font-['Poppins'] leading-tight">84 products</div>
              </div>
              <div className="w-6 h-6 px-4 bg-white rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
          <div className="rounded-[20px] flex-col justify-start items-start inline-flex">
            <img className="w-[306px] h-[216px] relative" src="https://via.placeholder.com/306x216" />
            <div className="w-[306px] px-4 py-5 bg-[#f8f9fa] justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Food</div>
                <div className="text-black/60 text-base font-normal font-['Poppins'] leading-tight">64 products</div>
              </div>
              <div className="w-6 h-6 px-4 bg-white rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
          <div className="rounded-[20px] flex-col justify-start items-start inline-flex">
            <img className="w-[306px] h-[216px] relative" src="https://via.placeholder.com/306x216" />
            <div className="w-[306px] px-4 py-5 bg-[#f8f9fa] justify-between items-start inline-flex">
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Bags</div>
                <div className="text-black/60 text-base font-normal font-['Poppins'] leading-tight">16 products</div>
              </div>
              <div className="w-6 h-6 px-4 bg-white rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop by pet */}
      <div className="self-stretch h-[457px] px-[312px] py-[60px] flex-col justify-start items-start gap-[60px] flex">
        <div className="self-stretch justify-between items-end inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="text-black text-[40px] font-semibold font-['Poppins'] leading-[48px]">Shop by pet</div>
          </div>
        </div>
        <div className="w-[1296px] justify-between items-end inline-flex">
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <img className="w-[205px] h-[205px]" src="https://via.placeholder.com/205x205" />
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Cat</div>
          </div>
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <img className="w-[205px] h-[205px]" src="https://via.placeholder.com/205x205" />
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Hamster</div>
          </div>
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <img className="w-[205px] h-[205px]" src="https://via.placeholder.com/205x205" />
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Dog</div>
          </div>
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <img className="w-[205px] h-[205px]" src="https://via.placeholder.com/205x205" />
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Parrot</div>
          </div>
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <img className="w-[205px] h-[205px]" src="https://via.placeholder.com/205x205" />
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Rabbit</div>
          </div>
          <div className="flex-col justify-start items-center gap-6 inline-flex">
            <img className="w-[205px] h-[205px]" src="https://via.placeholder.com/205x205" />
            <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">Turtle</div>
          </div>
        </div>
      </div>

      {/* Best selling products */}
      <div className="self-stretch h-auto px-[312px] py-[60px] flex-col justify-start items-center gap-[60px] flex">
        <div className="text-black text-[40px] font-semibold font-['Poppins'] leading-tight">Best selling products</div>
        <div className="w-full justify-start items-start gap-6 flex flex-wrap">
          {[
            { name: "Cat Bowl", price: "$20.99", img: "https://via.placeholder.com/306x306" },
            { name: "Cat Bowl", price: "$49.99", img: "https://via.placeholder.com/306x306" },
            { name: "Dog Leash", price: "$9.99", img: "https://via.placeholder.com/306x306" },
            { name: "Premium Cat Food", price: "$19.99", img: "https://via.placeholder.com/306x306" },
            { name: "Dog Bowl", price: "$19.99", img: "https://via.placeholder.com/306x306" },
            { name: "Premium Dog Food", price: "$29.99", img: "https://via.placeholder.com/306x306" },
            { name: "Dog Bed", price: "$49.99", img: "https://via.placeholder.com/306x306" },
            { name: "Premium Dog Food", price: "$19.99", img: "https://via.placeholder.com/306x306" },
          ].map((product, index) => (
            <Link to={`/best-detail/${product.name}`} key={index} className="rounded-[20px] border border-[#f8f9fa] flex-col justify-start items-start inline-flex w-[calc(24.5%-12px)] mb-6">
              <div>
                <img className="w-[306px] h-[306px] relative" src={product.img} alt={product.name} />
                <div className="w-full p-5 justify-between items-start inline-flex">
                  <div className="flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">{product.name}</div>
                    <div className="text-black text-base font-normal font-['Poppins'] leading-tight">{product.price}</div>
                  </div>
                  <div className="w-7 h-7 px-1 py-0.5 bg-[#f8f9fa] rounded-[50px] justify-between items-center flex">
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pet shop */}
      <div className="self-stretch px-[312px] py-[120px] bg-[#f8f9fa] justify-end items-center inline-flex">
        <div className="flex-col justify-start items-start gap-[60px] inline-flex">
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-[#0442bf] text-base font-bold font-['Poppins'] capitalize">Pet shop</div>
              <div className="w-[587px] text-black text-[40px] font-bold font-['Poppins']">The smarter way to shop <br />for your pet</div>
            </div>
            <div className="w-[479px] text-black/80 text-base font-normal font-['Poppins'] leading-relaxed">Lorem ipsum dolor sit amet consectetur. At et vehicula sodales est proin turpis pellentesque sinulla a aliquam amet rhoncus quisque eget sit</div>
          </div>
          <div className="h-[60px] px-10 py-[17px] bg-black rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xl font-semibold font-['Poppins']">Learn More</div>
          </div>
        </div>
        <div className="w-[512.36px] h-[373.17px] relative">
          <img className="w-[366.56px] h-[350.68px] left-0 top-[22.49px] absolute" src="https://via.placeholder.com/367x351" />
        </div>
      </div>

      {/* Footer */}
      <Foot />
    </div>
  );
}

export default App;
