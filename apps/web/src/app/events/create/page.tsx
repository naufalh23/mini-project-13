import React from 'react';
import { FormCreate } from './_components/form';


const HomePage: React.FC = () => {
  return (
    <div className="my-10 flex justify-center items-center w-full">
      <div className="bg-gray-200 w-[1280px] shadow-lg items-center py-10 rounded-lg">
        <h1 className="flex justify-center text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Create New Event Post
        </h1>
        <FormCreate />
      </div>
    </div>
  );
};

export default HomePage;
