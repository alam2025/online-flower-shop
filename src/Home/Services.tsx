import React from 'react';
import service1 from '../assets/Flower Asset/Group 57.png'
import service2 from '../assets/Flower Asset/Group 58.png'
import service3 from '../assets/Flower Asset/Group 59.png'
const Services:React.FC = () => {
      return (
            <div className=' grid grid-cols-2 md:grid-cols-3 gap-10'>
                  <div className='flex justify-center items-center flex-col gap-4'>
                        <img src={service1} alt="" />
                        <p>Same Day Delivery. Click & Collect.</p>
                  </div>
                  <div className='flex justify-center items-center flex-col gap-4'>
                        <img src={service2} alt="" />
                        <p>Fresh Flowers. Local Growers.</p>
                  </div>
                  <div className='flex justify-center items-center flex-col gap-4'>
                        <img src={service3} alt="" />
                        <p>24/7 Free Support.</p>
                  </div>
            </div>
      );
};

export default Services;