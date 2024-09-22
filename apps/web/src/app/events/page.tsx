import Image from 'next/image';
import Wrapper from '@/components/wrapper';
import { CardEvent } from '@/components/card';
import { getEvents } from '@/lib/event';


export default async function AllEvents() {
  const { events } = await getEvents();
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white xl:ml-[120px]">
        <div className="flex flex-col items-start ">
          <p className="text-gray-600 text-lg mb-2">
            Thriving Above Event Expectations.
          </p>
          <h1 className="text-7xl font-bold mb-2 text-text_pri">
            Event<span className="text-secondary">Hive</span>-ing
          </h1>
          <h1 className="text-7xl font-bold mb-2 text-text_pri">
            the Best.Day.
          </h1>
          <h1 className="text-7xl font-bold mb-8 text-text_pri">Ever.</h1>
          <div className="flex space-x-4">
            <div className="bg-secondary text-white p-4 rounded-lg text-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <p className="text-2xl font-bold">2k+</p>
              <p>Total Events Hosted</p>
            </div>
            <div className="bg-secondary text-white p-4 rounded-lg text-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <p className="text-2xl font-bold">100+</p>
              <p>Total Events Live</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/assets/eventall.png"
            alt="A live event with a crowd and stage lighting"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
            layout="responsive"
            objectFit=""
          />
        </div>
      </div>
      <Wrapper>
        <div className="mt-10 mb-[131px]">
          <div className="flex justify-between mb-6">
            <div className="font-bold text-4xl text-secondary">
              Event <span className="text-text_pri">Around you</span>
            </div>
            <div className="flex w-auto items-center justify-end">
              <input
                type="search"
                placeholder="Search events"
                className="border p-2 border-gray-500 h-10 w-full max-w-[400px] rounded-md text-text_pri"
              />
              <select className="border p-2 border-gray-500 h-10 w-full max-w-[400px] rounded-md ml-2">
                <option value="">All Event Types</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
              <button className="bg-secondary text-white p-2 rounded-md ml-2 btn btn-active btn-primary">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {events.map((item: any) => {
              return (
                <CardEvent
                  key={item.id}
                  title={item.title}
                  slug={item.slug}
                  image={item.image}
                  date={item.date}
                  location={item.location}
                  eventtype={item.eventtype}
                />
              );
            })}
          </div>
          <div className="flex justify-center mt-2">
            <div className="join ">
              <button className="join-item btn btn-active btn-primary bg-secondary text-white hover:bg-violet-500">«</button>
              <button className="join-item btn btn-active btn-primary bg-secondary text-white hover:bg-violet-500">Page 22</button>
              <button className="join-item btn btn-active btn-primary bg-secondary text-white hover:bg-violet-500">»</button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
