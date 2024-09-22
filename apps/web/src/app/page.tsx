import { CardEvent } from '@/components/card';
import Carousel from '@/components/carousel';
import BrandMarquee from '@/components/marque';
import SearchBar from '@/components/search';
import Wrapper from '@/components/wrapper';
import { getEvents } from '@/lib/event';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const { events } = await getEvents();
  return (
    <div>
      <div className="relative">
        <Carousel />
        <div className="absolute inset-x-0 -bottom-[72px] ">
          <SearchBar />
        </div>
      </div>
      <Wrapper>
        <div className="mt-[157px] mb-[131px]">
          <div className="font-bold text-4xl text-text_pri mb-6">
            Upcoming <span className="text-secondary">Event</span>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {events.slice(0, 6).map((items: any) => {
              return (
                <CardEvent
                  key={items.id}
                  title={items.title}
                  slug={items.slug}
                  image={items.image}
                  date={items.date}
                  location={items.location}
                  eventtype={items.eventtype}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <Link href={"/events"} className="btn btn-active btn-primary bg-secondary text-white text-sm font-normal">Load more...</Link>
          </div>
        </div>
        
      </Wrapper>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 bg-primary items-center h-64">
        <Image
          className="absolute bottom-0 ml-[100px]"
          src={'/assets/content-1.png'}
          alt="..."
          height={303}
          width={544}
        />
        <div className="col-start-2 w-full">
          <h2 className="font-bold text-4xl text-white mb-4">
            Make your own Event
          </h2>
          <p className="text-white mb-4 w-[400px] text-lg">
            Be a part of our community and start creating incredible events!
          </p>
          <Link href={"/events/create"} className="btn btn-active btn-primary bg-secondary text-white font-bold w-[302px] h-[60px]">
            Create Event
          </Link>
        </div>
      </div>
      <BrandMarquee />
    </div>
  );
}
