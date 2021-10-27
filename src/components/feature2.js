import React from 'react';
import { useEffect, useState } from "react";
import feature2 from '../assets/images/F2.png';


export const Feature2 = () => {
    return (
        <div className="bg-gray-1000">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{' '}
              Segment customers by all the Attributes!
            </h2>
            <p className="text-base text-white md:text-lg">
            Split customers into groups based on certain characteristics that those customers share.
            </p>
          </div>
          <div className="mb-2 transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-full rounded shadow-lg"
              src={feature2}
              alt=""
            />
          </div>
        </div>
      </div>
      </div>
    );
  };