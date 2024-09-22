import ShareButton from '@/components/share';
import Wrapper from '@/components/wrapper';
import { getEventSlug, getEvents } from '@/lib/event';
import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';
import { CardEvent } from '@/components/card';

export const revalidate = 3600;

export const generateStaticParams = async () => {
  const { events } = await getEvents();

  return events.map((events: any) => ({
    params: {
      slug: events.slug,
    },
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { events } = await getEventSlug(params.slug);

  return {
    title: events.title,
    description: events.title,
    authors: events.user.name,
    date: events.date,
    openGraph: {
      images: [events.image],
    },
  };
}

export default async function EventDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { events } = await getEvents();
  const currentEvent = events.find(
    (events: any) => events.slug === params.slug,
  );
  const otherEvents = events.filter(
    (events: any) => events.slug !== params.slug,
  );

  const formatDL = currentEvent.date ? format(
    new Date(currentEvent.date),
    'EEEE, dd MMMM yyyy, HH:mm',
  ):'';
  
  
  return (
    <>
      <div className="min-h-auto flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-[1320px] w-full">
          <div className="relative">
            <img
              src={currentEvent.image}
              alt={currentEvent.title}
              className="w-full h-96 object-cover brightness-50"
            />
            <div className="absolute top-4 left-4">
              <Link
                href={`/`}
                className="flex items-center gap-2 btn btn-active btn-primary bg-secondary"
              >
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                back
              </Link>
            </div>
            <div className="absolute bottom-4 left-4 text-white p-2">
              <h1 className="text-5xl font-bold underline underline-offset-2">
                {currentEvent.title}
              </h1>
              <h2 className="text-2xl font-medium mt-2 flex items-center">
                <span className="mr-2">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="fill-current"
                  >
                    <title>MapLibre</title>
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 3.19c2.937 0 5.371 2.265 5.371 5.035 0 4.111-4.364 7.635-5.035 8.138-.084 0-.084.084-.084.084-.084.084-.168.084-.168.084s-.168 0-.168-.084l-.084-.084c-.84-.503-5.203-3.943-5.203-8.138 0-2.77 2.434-5.036 5.371-5.036zm0 2.601c-1.427 0-2.602 1.173-2.602 2.684 0 1.51 1.175 2.685 2.602 2.685 1.427 0 2.602-1.175 2.602-2.685S13.427 5.79 12 5.79zM8.979 17.287h6.042a.66.66 0 0 1 .67.672v2.014a.66.66 0 0 1-.67.67H8.98a.66.66 0 0 1-.67-.67v-2.014a.66.66 0 0 1 .67-.672zm.755 1.258v.924h4.448v-.924H9.734z" />
                  </svg>
                </span>
                {currentEvent.location}
              </h2>
            </div>
          </div>
          <div className="p-6 bg-white">
            <div className="flex justify-between">
              <div className="container">
                <h3 className="text-xl font-bold text-black">Date & time</h3>
                <p className="mt-2">{formatDL}</p>
                <a href="#" className="text-blue-600 mt-2 block">
                  Add to calendar
                </a>
              </div>
              <div className="container text-end">
                <h3 className="text-3xl font-bold text-secondary">
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                  }).format(currentEvent.price)}
                </h3>
                <p className="mt-2">Available seat: {currentEvent.capacity}</p>
                <div className="text-yellow-400 mt-2 flex justify-end">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                      {index < currentEvent.rating ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="w-5 h-5 text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 16l-4-4m0 0l4-4m-4 4h12"
                          />
                        </svg>
                      )}
                    </span>
                  ))}
                  <div className="text-sm text-gray-600 ml-1">
                    {currentEvent.rating} / 5
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4 w-full">
              Book now
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full mt-2 w-full">
              Program promoter
            </button>
            <p className="text-center text-gray-500 mt-2">No Refunds</p>
          </div>
        </div>
      </div>
      <Wrapper>
        <div className="flex">
          <div className="flex-[2] pr-52 max-lg:pr-0">
            <h5 className="mb-2 text-[32px] max-md:text-[24px] font-bold tracking-tight text-gray-900 ">
              {currentEvent.title}
            </h5>
            <ShareButton
              slug={currentEvent.slug}
              className="hidden max-md:block"
            />
            <img
              className="h-[350px] max-sm:h-[200px] max-md:h-[300px] w-full my-5 shadow"
              src={currentEvent.image}
              alt={currentEvent.title}
            />
            <h2 className="font-bold text-black text-2xl mb-2">Description</h2>
            <div>{currentEvent.content}</div>
          </div>
          <div className="flex-1 sticky max-md:hidden top-[100px] h-full">
            <p className=" text-2xl font-bold text-black py-2 ">
              Event Location
            </p>
            <div className="flex gap-1">
              <Image
                src={'/assets/maps.jpg'}
                alt="maps"
                height={260}
                width={480}
              ></Image>
            </div>
            <ShareButton slug={currentEvent.slug} className="mt-5" />
          </div>
        </div>
      </Wrapper>
      <div className="bg-gray-100 w-full mt-20">
        <Wrapper>
          <div className="mt-10 mb-auto ">
            <div className="flex justify-between mb-6">
              <div className="font-bold text-4xl text-secondary">
                Other Event <span className="text-text_pri">you may like</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center">
              {otherEvents.map((events: any) => (
                <CardEvent
                  key={events.id}
                  title={events.title}
                  slug={events.slug}
                  image={events.image}
                  date={events.date}
                  location={events.location}
                  eventtype={events.eventtype}
                />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <Link
                href={'/events'}
                className="btn btn-active btn-primary bg-secondary text-white text-sm font-normal"
              >
                Load more...
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
