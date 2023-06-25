import React from 'react';
import Slider from './Slider/Slider';

const Excellence = () => {
    return (
        <div>
{/* text section */}

            <div className='text-center my-10'><h1 className='text-5xl mb-6' >OUR CENTRES OF EXCELLENCE</h1>
            <p className='w-4/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus blanditiis, unde officiis ipsum iusto eaque omnis velit explicabo, nihil quia quidem, facilis nisi minima totam obcaecati culpa consequatur error numquam.</p></div>
{/* slider section */}
            <div className='h-64 border border-red-600'>
          <Slider></Slider>      
            </div>
        </div>
    );
};

export default Excellence;