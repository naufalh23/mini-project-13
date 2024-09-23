import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="flex justify-center">
      <div className="carousel lg:w-[1320px] lg:h-[596px] justify-items-center ">
        <div
          id="slide1"
          className="carousel-item relative w-[1320px] h-[596px]"
        >
          <Image
            src={'/assets/event-0.png'}
            alt="..."
            layout="fill"
            objectFit="fill"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <Image
            src={'/assets/event-2.png'}
            alt="..."
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
          <Image
            src={'/assets/event-1.jpg'}
            alt="..."
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-full">
          <Image
            src={'/assets/event-3.jpg'}
            alt="..."
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
