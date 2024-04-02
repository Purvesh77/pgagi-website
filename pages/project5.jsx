// pages/project3.js
import '../src/app/globals.css';

import React from 'react';
import Image from 'next/image';

const Project5 = () => {
  return (
    <div className="bg-black h-50px">
      <div className="flex flex-col md:flex-row items-center rounded-lg p-8 bg-black text-white mx-auto" style={{ maxWidth: '1200px' }}>
        <div className="w-full md:w-1/2">
          <div className="bg-[linear-gradient(87.43deg,rgba(143,0,255,0)_0%,#560099_265.05%)] w-2 h-full mr-8"></div>
          <div className="text-left ml-8">
            <h2 className="text-5xl font-bold mb-4">AutoCaptioner Plus</h2>
            <p>
            An automation tool for content creators that generates captions for photos and videos and posts them directly to social media, streamlining content management.
  
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src="/images/project5.png"
            alt="TalentHarbor AI"
            width={200}
            height={200}
            className="rounded-lg ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Project5;