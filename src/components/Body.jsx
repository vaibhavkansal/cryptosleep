import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { auth } from "../utils/customfirebase";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser, removeUser}  from "../utils/userslice";
import Header from "./Header";
import HomeSection from "./HomeSection";
import MattressSection from "./MattressSection";
import CurtainSection from "./CurtainSection";
import FurnitureSection from "./FurnitureSection";
import AboutSection from "./AboutSection";
import CartSection from "./cartSection";
import OrderHistory from "./OrderHistory";


const Body = () => {
    const dispatch = useDispatch();

    
    useEffect(()=>{
        console.log("rerun");
        onAuthStateChanged(auth, (user) => {
            console.log("authChanged called");
            if (user) {
                //user is signed in 
              dispatch(addUser({uid:user.uid,number:user.phoneNumber}));
            } else {
                // user is not logged in
                dispatch(removeUser());
            }
          });


        },[])


    const  appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Structure/>,
            children:[
                {
                    path: "/",
                    element:<HomeSection/>
                },
                {
                    path: "/mattress",
                    element:<MattressSection/>
                },
                {
                    path: "/curtain",
                    element:<CurtainSection/>
                },
                {
                    path: "/furniture",
                    element:<FurnitureSection/>
                },
                {
                    path: "/about",
                    element:<AboutSection/>
                },
                {
                    path:"/cart",
                    element:<CartSection/>
                },
                {
                    path:"/orderhistory",
                    element:<OrderHistory/>
                }
            ]

        }
    ])


    function Structure() {
        return (
          <>
            <Header brand="Cryptosleep"/>
            <Outlet/>
          </>
       
        );
      }

    

  
    



    return(
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;