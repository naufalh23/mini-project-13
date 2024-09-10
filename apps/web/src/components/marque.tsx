import Wrapper from './wrapper';

export default function BrandMarquee() {
  return (
    <div className="flex">
      <div className="container">
        <div className="font-bold text-4xl text-black mb-4 justify-center text-center">
          <h1 className="text-black font-bold text-4xl mt-20 mb-4">
            Join these <span className="text-secondary">Brands</span>
          </h1>
          <p className="text-black mb-11 text-lg font-bold ">
          We've had the pleasure of working with industry-defining brands.
          <span>These are just some of them.</span> 
          </p>
          <button className="btn btn-active bg-secondary text-white font-bold w-[302px] h-[60px]">
            Read More!!!
          </button>
        </div>
      </div>
    </div>
  );
}
