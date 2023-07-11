import SectionTitle from "./SectionTitle";

import flower1 from '../assets/Flower Asset/pngwing 6.png'
import flower2 from '../assets/Flower Asset/pngwing 5.png'
import flower3 from '../assets/Flower Asset/pngwing 7.png'
import FeatureCard from "./FeatureCard";
import Services from "./Services";

const FestureFlower:React.FC = () => {
      const flowers: {name:string, img:string,color:string}[]=[
            {name:'Ping Flower', img:flower1,color:'#D9D9D9'},
            {name:'Ping Flower', img:flower2,color:'#AAD0D2'},
            {name:'Ping Flower', img:flower3,color:"#87A866"},
      ]
      return (
            <div  className="lg:px-[10%]  md:px-[5%] mb-24">
                  <SectionTitle  title={"Our Featured Flowers"} des={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}></SectionTitle>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-28">
                        {
                              flowers.map((flower,index)=><FeatureCard 
                              key={index} flower={flower}
                              ></FeatureCard>)
                        }
                  </div>
               <Services></Services>

                 
            </div>
            
      );
};

export default FestureFlower;