'use client';

import { CardEvent } from '@/components/card';
import Wrapper from '@/components/wrapper';
import { getEvents } from '@/lib/event';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function SearchEvents() {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get('search');
  const queryEventtype = searchParams.get('eventtype');
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState<string>(querySearch || '');
  const [eventtype, setEventtype] = useState<string>(queryEventtype || '');
  const [value] = useDebounce(search, 1000);
  const router = useRouter();

  const handleChange = () => {
    if (searchRef.current) {
      setSearch(searchRef.current.value);
    }
  };

  const handleEventtypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const eventType = e.target.value === 'free' ? 'Free' : e.target.value;
    console.log('Event type changed:', eventType);
    setEventtype(eventType);
  };

  const getData = async () => {
    console.log('Getting data with event type:', eventtype);
    try {
      router.push(`?search=${value}&eventtype=${eventtype}`);
      const { events } = await getEvents(value, eventtype);
      console.log('Received events:', events);
      setData(events);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('Use effect triggered with event type:', eventtype);
    getData();
  }, [value, eventtype]);

  return (
    <Wrapper>
      <div className="flex w-full justify-center mt-20">
        <input
          onChange={handleChange}
          ref={searchRef}
          defaultValue={value}
          type="search"
          placeholder="Search events"
          className="border p-2 border-gray-500 h-10 w-full max-w-[400px] rounded-md text-text_pri"
        />
        <select
          value={eventtype}
          onChange={handleEventtypeChange}
          className="border p-2 border-gray-500 h-10 w-full max-w-[400px] rounded-md ml-2"
        >
          <option value="">All Event Types</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>
      <div className="my-14">
        <div className="flex flex-wrap justify-center items-center">
          {data.map((item: any) => {
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
      </div>
    </Wrapper>
  );
}
