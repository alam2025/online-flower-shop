import React from 'react';
import { Button } from "flowbite-react"

import SectionTitle from '../SectionTitle';
const Contact: React.FC = () => {


      return (

            <section className={`py-20 bg-image mb-24 flex flex-col justify-center items-center`}
            >
                  <SectionTitle title='Get The Latest Deals' des='$30 coupon for first shopping'></SectionTitle>

                  <div className='flex md:w-1/2'>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                        <Button gradientMonochrome="failure">
                              Subscribe
                        </Button>
                  </div>
            </section>

      );
};

export default Contact;