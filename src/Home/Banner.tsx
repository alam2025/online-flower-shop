
import { Button } from "flowbite-react"
import bannerImg from '../assets/Flower Asset/pngwing 10.png'
const Banner = () => {
      return (
            <div className="lg:px-[10%]  md:px-[5%]  flex flex-col md:flex-row justify-center items-center gap-20 bg-rose-100 pt-20">
                  <div className="w-[90%] md:w-1/2 space-y-7">
                        <h1 className=" text-5xl font-extrabold">Let's make beautiful flowers a part of your life.</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>

                        <Button  gradientMonochrome="failure">
                              Shop Now
                        </Button>

                  </div>
                  <div className=" md:w-1/2 ">
                        <img className="w-[80%] " src={bannerImg} alt="" />
                  </div>


            </div>
      );
};

export default Banner;