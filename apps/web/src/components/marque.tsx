import Marquee from 'react-fast-marquee';
import Wrapper from './wrapper';
import Image from 'next/image';

export default function BrandMarquee() {
  return (
    <div className="font-bold text-4xl text-black mb-4 justify-center text-center">
      <h1 className="text-black font-bold text-4xl mt-20 mb-4">
        Join these <span className="text-secondary">Brands</span>
      </h1>
      <p className="text-black mb-11 text-lg font-bold ">
        We've had the pleasure of working with industry-defining brands.
        <span>These are just some of them.</span>
      </p>
      <Marquee direction='right' gradient gradientWidth={200} autoFill pauseOnHover>
        <div className="grid grid-flow-col items-center">
          <Image src={"/assets/youtube.png"} alt='...' width={200} height={200}/>
          <Image src={"/assets/zoom.png"} alt='...' width={200} height={100}/>
          <Image src={"/assets/tokopedia.png"} alt='...' width={200} height={200}/>
          <Image src={"/assets/gojek.png"} alt='...' width={200} height={200}/>
          <Image src={"/assets/google.png"} alt='...' width={150} height={100}/>
          <Image src={"/assets/microsoft.png"} alt='...' width={200} height={100}/>
        </div>
      </Marquee>
      <Marquee direction='left' gradient gradientWidth={200} autoFill pauseOnHover>
        <div className="grid grid-flow-col items-center ">
          <Image src={"/assets/lazada.png"} alt='...' width={100} height={200} className='mr-2'/>
          <Image src={"/assets/medium.png"} alt='...' width={300} height={100} className='mr-2'/>
          <Image src={"/assets/shopee.png"} alt='...' width={200} height={200} className='mr-2'/>
          <Image src={"/assets/spotify.png"} alt='...' width={200} height={100} className='mr-2'/>
          <Image src={"/assets/tiktok.png"} alt='...' width={100} height={100} className='mr-2'/>
          <Image src={"/assets/grab.png"} alt='...' width={100} height={100} className='mr-2'/>
        </div>
      </Marquee>
      
    </div>
  );
}
