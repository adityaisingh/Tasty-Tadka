import React from 'react';
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from  "./Components/Body";
import Footer from "./Components/Footer";
import About from  "./Components/About";
import Error from  "./Components/Error";
import Contact from './Components/Contact';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';



const AppLayout = () => {
  return (
     <>
      <Header/>
      <Outlet/>
      <Footer/>
     </>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,

  children: [
          // show children component for routing
    {
       path:"/",
       element:<Body/>
    },
   {
    path:"/about",
    element:<About/>
   },

  {
     path:"/contact",
     element:<Contact/>
  },

  ],
},
 ]);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


