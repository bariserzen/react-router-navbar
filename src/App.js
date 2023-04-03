import React from 'react';
import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';
import RootLayout from './pages/RootLayout';



const router = createBrowserRouter([

   {
    path: '/',
    element: <RootLayout/>,
    children: [
     { index: true,         element:<Home/> },
     { path: '/sign-up',    element:<SignUp/> },
     { path: '/services',   element:<Services/> },
     { path: '/products',   element:<Products/> },
     { path: '/contact-us', element:<ContactUs/> },
     { path: '/marketing',  element:<Marketing/> },
     { path: '/consulting', element:<Consulting/> },

    ],
   },
 ]);


const App = () => {
  
  return <RouterProvider router={router}/>;
};

export default App;



