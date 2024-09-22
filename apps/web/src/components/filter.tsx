'use client';

import { useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

interface SearchProps {
  onSearch: (searchQuery: string, eventType: string) => void;
}

const SearchFilter: React.FC<SearchProps> = ({ onSearch }) => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get('search');
  const queryEventtype = searchParams.get('eventtype');
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(querySearch || '');
  const [eventType, setEventType] = useState<string>(queryEventtype || '');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEventType(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery, eventType);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full justify-center mb-4">
      <input
        type="search"
        ref={searchRef}
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        placeholder="Search events"
        className="border p-2 border-gray-500 h-10 w-full max-w-[500px] rounded-md"
      />
      <select
        value={eventType}
        onChange={handleEventTypeChange}
        className="border p-2 border-gray-500 h-10 w-full max-w-[200px] rounded-md ml-2"
      >
        <option value="">All Event Types</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-secondary text-white p-2 rounded-md ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
