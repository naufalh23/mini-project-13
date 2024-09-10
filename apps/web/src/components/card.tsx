import Image from 'next/image';

export default function Card() {
  return (
    <div className="w-[387px] h-[400px] p-5 bg-white rounded-[10px] shadow-xl border-2 border-gray-100">
      <div className="container">
        <div className="flex flex-warp relative">
          <Image src="/assets/event-1.png" alt="..." width={347} height={240} />
          <div className="absolute top-2 left-2 px-1 bg-white rounded-sm ">
            Free
          </div>
        </div>
        <div className="mt-4 text-black text-base">
          BestSeller Book Bootcamp -write, Market & Publish Your Book -Lucknow
        </div>
        <div className="mt-4 text-[#7848F4] text-xs">
          Saturday, March 18, 9.30PM
        </div>
        <div className="mt-5 text-[#7E7E7E] text-xs">
          ONLINE EVENT - Attend anywhere
        </div>
      </div>
    </div>
  );
}
