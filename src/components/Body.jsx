import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { auth,fetchdata } from "../utils/customfirebase";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser, removeUser}  from "../utils/userslice";
import { setProducts } from "../utils/productslice";
import { Suspense, lazy } from "react";
import ScrollToTop from "./subcomponents/ScrollToTop";
import Header from "./Header";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import CartSection from "./CartSection";
import Footer from "./Footer";
import ShimmerHeader from "./subcomponents/ShimmerHeader";
// import Product from "./Product";
// import CurtainUploadSection from "./CurtainUploadSection";
// import MattressUploadSection from "./MattressUploadSection";
// import ItemList from "./ItemList";
// import OrderHistory from "./OrderHistory";
// import MattressSection from "./MattressSection";
// import CurtainSection from "./CurtainSection";
// import FurnitureSection from "./FurnitureSection";



// const HomeSection = lazy(()=> import("./HomeSection"))
// const AboutSection = lazy(()=> import("./AboutSection"))
// const CartSection = lazy(()=> import("./cartSection"))
const Product = lazy(()=> import("./Product"))
const CurtainUploadSection = lazy(()=> import("./CurtainUploadSection"))
const MattressUploadSection = lazy(()=> import("./MattressUploadSection"))
const ItemList = lazy(()=> import("./ItemList"))
const OrderHistory = lazy(()=> import("./OrderHistory"))
const MattressSection = lazy(()=> import("./MattressSection"))
const CurtainSection = lazy(()=> import("./CurtainSection"))
const FurnitureSection = lazy(()=> import("./FurnitureSection"))



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


    useEffect(() => {
        const fetchProducts = async () => {
          try {
    
            const data = await fetchdata();
            dispatch(setProducts(data));
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchProducts();
      }, []);
      


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
                },
                {
                    path:"/mattressupload",
                    element:<MattressUploadSection/>
                },
                {
                    path:"/curtainupload",
                    element:<CurtainUploadSection/>
                },
                {
                    path:"/itemlist",
                    element:<ItemList/>
                },
                {
                    path:"/:maincategory/:pid",
                    element:<Product/>
                },
                {
                    path:"*",
                    element:<Navigate to="/"/>
                }
            ]

        }
    ])


    function Structure() {
        return (
          <>
            <Header brand="Cryptosleep"/>
            <ScrollToTop /> {/* Add ScrollToTop here */}
            <Suspense fallback={<ShimmerHeader/>}>
            <Outlet/>
            </Suspense>
            <Footer/>
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