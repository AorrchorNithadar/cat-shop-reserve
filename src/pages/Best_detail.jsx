import React from 'react';
import { useParams } from 'react-router-dom';
import Foot from "../controller/Foot";
import Nav from "../controller/Nav";

// icon
import iconmoney from "../asset/icon/thai-baht.png";
import iconclose from "../asset/icon/cancel.png";

function Best_detail() {
    const { productName } = useParams();

    return (
        <div className="w-[1920px] h-[767px] px-[312px] bg-white flex-col justify-start items-center inline-flex">
            {/* Nav */}
            <Nav />

            <div className="self-stretch h-[140px] px-[312px] py-[60px] flex-col justify-start items-center gap-[60px] flex">
                <div className="text-black text-[40px] font-semibold font-['Inter'] leading-tight">Best selling products</div>
            </div>
            <div className="h-[586px] px-[312px] py-[100px] justify-center items-start gap-[110px] inline-flex">
                <div className="w-[550px] p-10 bg-[#f8f9fa] rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch h-[306px] rounded-[20px] border border-[#f8f9fa] flex-col justify-start items-start flex">
                        <img className="w-[470px] h-[306px] relative" src="https://via.placeholder.com/470x306" />
                    </div>
                </div>
                <div className="w-[636px] h-[359px] flex-col justify-between items-start inline-flex">
                    <div className="h-[38px] relative">
                        <div className="w-7 h-7 left-[608px] top-0 absolute bg-[#b6b6b6] rounded-[50px] flex justify-center items-center">
                        <img className="w-7 h-7 rounded-full" src={iconclose} />
                        </div>

                        <div className="left-0 top-[1px] absolute text-black text-[40px] font-semibold font-['Poppins'] leading-[48px] whitespace-nowrap">Pet Carrier</div>
                    </div>
                    <div className="self-stretch h-[235px] flex-col justify-start items-start gap-10 flex">
                        <div className="self-stretch text-black/80 text-base font-normal font-['Poppins'] leading-relaxed">กระเป๋าใส่สัตว์เลี้ยง พกพา เล็กกะทัดรัด คุณภาพดี รับประกัน</div>
                        <div className="justify-start items-center gap-5 inline-flex">
                            <div className="w-10 h-10 relative bg-white/10 rounded-[50px]">
                                <img className="w-10 h-10 left-0 top-0 absolute rounded-full" src={iconmoney} />
                            </div>
                            <div className="text-black text-xl font-semibold font-['Poppins'] leading-tight">245</div>
                        </div>
                        <div className="w-[241px] h-10 relative">
                            <div className="w-7 h-7 left-[121px] top-[25px] absolute bg-black rounded-[50px]"></div>
                            <div className="left-[177px] top-[13px] absolute text-black text-xl font-semibold font-['Poppins'] leading-[48px]">1</div>
                            <div className="w-7 h-7 left-[213px] top-[25px] absolute bg-black rounded-[50px]"></div>
                            <div className="left-0 top-[13px] absolute text-black text-xl font-semibold font-['Poppins'] leading-[48px]">จำนวน</div>
                        </div>
                    </div>
                    <div className="w-[248px] h-10 px-5 py-3.5 bg-[#0442bf] rounded-lg justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-base font-normal font-['Poppins'] capitalize leading-tight">เพิ่มไปยังตะกร้า</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Foot />
        </div>
    );
}
export default Best_detail;