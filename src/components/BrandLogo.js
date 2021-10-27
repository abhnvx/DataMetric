import React from 'react';
import { useEffect, useState } from "react";
import logo from '../assets/images/logo.png';

export const BrandLogo = () => {
    return (
        <div className="bg-gray-1000">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className="text-base text-white md:text-lg">
          Powering the Next Generation of Companies
          </p>
        </div>
        <img
              className="object-cover w-full h-full rounded shadow-lg"
              src={logo}
              alt=""
            />
      </div>
      </div>
    );
  };