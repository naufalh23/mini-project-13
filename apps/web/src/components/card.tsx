import Image from 'next/image';

export default function Card() {
  return (
    <div className="w-fit h-[400px] p-5 bg-white">
      <div className="container">
        <div className="flex flex-warp relative">
          <Image src="/assets/c1.png" alt="..." width={347} height={240} />
          <div className="absolute top-2 left-2 px-1 bg-white rounded-sm ">
            Free
          </div>
        </div>
      </div>
    </div>
  );
}
