import React from 'react';
interface FeatureCardProps {
      flower: {
            name: string;
            img: string;
            color:string;
      };
}
const FeatureCard: React.FC<FeatureCardProps> = ({ flower }) => {
     

      return (
            <div className={` bg-[${flower.color}] px-7 pt-10 h-[400px] rounded-t-full`}>
                  <img className=' h-full' src={flower.img} alt="" />
                  <h1 className=' text-xl text-center mt-6'>{flower.name}</h1>
            </div>
      );
};

export default FeatureCard;