import Image from 'next/image';

export default function LoadingComp() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex flex-col items-center space-x-3 rtl:space-x-reverse">
        <Image src={'/assets/logo.png'} alt="..." width={250} height={50} />
        <span className="loading loading-dots loading-lg bg-secondary"></span>
      </div>
    </div>
  );
}
