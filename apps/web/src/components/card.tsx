import Image from 'next/image';
import React from 'react';

interface ICardEvent{
  title: string;
  image: string;
  date: string;
  location: string;
  eventtype: string;

}

export const CardEvent: React.FC<ICardEvent> = ({ title, image, date, location, eventtype }) => {
  return (
    <div className="w-[387px] h-[400px] p-5 bg-white rounded-[10px] shadow-xl border-2 border-gray-100">
      <div className="container">
        <div className="flex flex-warp relative">
          <Image src={image} alt={title} width={347} height={240} />
          <div className="absolute top-2 left-2 px-1 bg-white rounded-sm text-secondary">
            {eventtype}
          </div>
        </div>
        <div className="mt-4 text-black text-base">
          { title }
        </div>
        <div className="mt-4 text-[#7848F4] text-xs">
          { date }
        </div>
        <div className="mt-5 text-[#7E7E7E] text-xs">
          { location }
        </div>
      </div>
    </div>
  );
}
