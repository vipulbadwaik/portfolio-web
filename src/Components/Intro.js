import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
    <div className="h-screen bg-slate-950 flex">
      <div className='flex flex-col'>
        <h1 className='text-white text-7xl'>Hi, I am </h1>
        <h1 className='text-green-700 text-7xl'> 
        <Typewriter
        words={['Fronted Developer','Software Engineer','Tech Enthusiast','Coder']}
        loop = 'false'
        cursor
        cursorStyle='_'


        
        
        
        />
</h1>
        
      </div>
    </div>
  )
}

export default Intro