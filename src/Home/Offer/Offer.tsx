import React from 'react';
import image from '../../assets/Flower Asset/pngwing 8.png'
import {Button} from 'flowbite-react'
const Offer: React.FC = () => {
      return (
            <div className="lg:px-[10%]  md:px-[5%]  flex flex-col md:flex-row justify-center items-center gap-20 bg-rose-50 py-20 mb-24">
                  <div className="w-[90%] md:w-1/2 space-y-7 flex flex-col  items-center justify-center text-center">
                        <h1 className=" text-3xl font-extrabold">Hot Deal ! Sale Up To 25% <span className=' text-rose-500'>Off</span>.</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <Button gradientMonochrome="failure">
                              Sign Up
                        </Button>

                  </div>
                  <div className=" md:w-1/2 flex items-center justify-center">
                        <img className="w-[70%] " src={image} alt="" />
                  </div>


            </div>
      );
};

export default Offer;