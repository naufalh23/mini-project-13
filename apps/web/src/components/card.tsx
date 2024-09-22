import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ICardEvent {
  title: string;
  slug: string;
  image: string;
  date: string;
  location: string;
  eventtype: string;
}

export const CardEvent: React.FC<ICardEvent> = ({
  title,
  image,
  date,
  location,
  eventtype,
  slug,
}) => {
  const formatDate = format(new Date(date), 'EEEE, dd MMMM yyyy, HH:mm');
  return (
    <Link data-cy="event-redirect" href={`/events/${slug}`}>
      <div className="w-[387px] h-[400px] p-5 bg-white rounded-[10px] shadow-xl border-2 border-gray-100 mr-5 mb-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:ring-2 hover:ring-secondary hover:shadow-xl hover:shadow-secondary/50 duration-300">
        <div className="container">
          <div className="flex flex-warp relative w-[347px] h-[240px]">
            <Image src={image} alt={title} width={347} height={240} />
            <div className="absolute top-2 left-2 px-1 bg-white rounded-sm text-secondary">
              {eventtype}
            </div>
          </div>
          <div className="mt-4 text-black text-base">{title}</div>
          <div className="mt-4 text-[#7848F4] text-xs">{formatDate} WIB</div>
          <div className="mt-5 text-[#7E7E7E] text-xs">{location}</div>
        </div>
      </div>
    </Link>
  );
};
