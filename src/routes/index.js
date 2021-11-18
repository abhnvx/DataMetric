
import React from 'react';
import { Signup } from '../pages/signup';
import  landing  from '../pages/landing';

const indexRoutes = [
    {
      path: "/Signup",
      component: Signup,
      exact: true,
    },

    {
        path: "/",
        component: landing,
        exact: true,
      },
]

export default indexRoutes;