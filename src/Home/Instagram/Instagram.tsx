import React from 'react';
import SectionTitle from '../SectionTitle';
import image1 from '../../assets/Flower Asset/Flower 01.png'
import image2 from '../../assets/Flower Asset/Rectangle 4.png'
import image3 from '../../assets/Flower Asset/Rectangle 5.png'
import image4 from '../../assets/Flower Asset/Rectangle 6.png'

const Instagram: React.FC = () => {
      return (
            <div className=' mb-24 lg:px-[10%]  md:px-[5%]'>
                  <SectionTitle title='Instagram' des='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'></SectionTitle>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                       
                        <div>
                              <img className="h-auto max-w-full rounded-lg" src={image1} alt=""/>
                        </div>
                        <div>
                              <img className="h-auto max-w-full rounded-lg" src={image2}alt=""/>
                        </div>
                        <div>
                              <img className="h-auto max-w-full rounded-lg" src={image3} alt=""/>
                        </div>
                        <div>
                              <img className="h-auto max-w-full rounded-lg" src={image4} alt=""/>
                        </div>
                       
                  </div>
            </div>
      );
};

export default Instagram;