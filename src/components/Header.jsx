import { useState ,useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import { auth ,signOutfun } from "../utils/customfirebase";
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import { Link ,useLocation} from "react-router-dom";


const Header = (props) => {

    const user = useSelector((state) => state.user);
    
    const numberRef = useRef(null);
    const closeModalref = useRef(null);
    const recapturedivref = useRef(null);
    const [optState,setoptState] = useState(false);
    const [optStatetext,setotStatetext] = useState("Login");
    const [placeholder, setplaceholder] = useState("9876543210");
    const [brandName,setbrandName] = useState(props.brand);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation(); // Gets the current location

    useEffect(()=>{
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptrediv', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            console.log("Success");
          }
        });   
    
      },[])  
      const isActive = (path) => location.pathname === path;

  



    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);


     
    

  useEffect(() => {
    const updatedValue = optState ? "123456" : "9876543210";
    const updatedValuetext = optState ? "Enter OTP":"Enter Login Mobile Number";
    setplaceholder(updatedValue);
    setotStatetext(updatedValuetext);

  }, [optState]);

    function sendOtp(){
        var number = numberRef.current.value;
    if(number > 1000000000 && number < 10000000000){
      console.log(number);
      const appVerifier = window.recaptchaVerifier;
      var phoneNumber = '+91' + number.toString();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log("OTP send successfully")
      numberRef.current.value = "";
      numberRef.current?.focus();

      setoptState(true);
    }).catch((error) => {
      console.log("error",error);
      alert(error);
    });

    }
    else{
      alert("Wrong Number");
    }
        
            
        
    }

    function verifyOtp(){
        var code = numberRef.current.value;
        console.log(code);
        confirmationResult.confirm(code).then((result) => {
        const user = result.user;
        console.log(user)
        closeModalref.current?.click();
        if (recapturedivref.current) {
            recapturedivref.current.innerHTML = "";
        }       
     }).catch((error) => {
        console.log("error",error);
        alert(error);
    });
    }

    
    function RenderButton(){
        if (user){
            {/* if user is loged in than this  */}
            return(
            <div id="logoutbutton" className="dropdown-center ms-auto order-md-last m-2">
                <button id="accountbutton" className={`btn d-flex ${scrolled ? "btn-dark" : ""} gap-1 items-center btn-danger  dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg id="accountsvg"  width="23px" viewBox="0 0 1024 1024" fill="#fff" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M110.4 923.2c-56.8 0-102.4-48-102.4-106.4V285.6c0-58.4 45.6-106.4 102.4-106.4h800.8c56.8 0 102.4 48 102.4 106.4V816c0 58.4-45.6 106.4-102.4 106.4H110.4z m0-701.6c-34.4 0-61.6 28.8-61.6 64V816c0 35.2 28 64 61.6 64h800.8c34.4 0 61.6-28.8 61.6-64V285.6c0-35.2-28-64-61.6-64H110.4z" fill="#fff" /><path d="M541.6 392c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h328c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24h-328zM541.6 511.2c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h328c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24h-328zM541.6 638.4c-12.8 0-23.2-10.4-23.2-24s10.4-24 23.2-24h276.8c12.8 0 23.2 10.4 23.2 24s-10.4 24-23.2 24H541.6zM58.4 886.4c-2.4 0-4.8 0-7.2-0.8-12.8-4-20-18.4-16-32 23.2-78.4 77.6-142.4 148-176l16-8-13.6-12c-40-34.4-63.2-85.6-63.2-139.2 0-100 78.4-180.8 173.6-180.8 96 0 173.6 80.8 173.6 180.8 0 53.6-23.2 104.8-63.2 139.2l-13.6 12 16 8c68 32 132.8 112 157.6 194.4 16 52.8-16.8 36-1.6 16-3.2 4.8-16.8-5.6-32-5.6-12.8 0-19.2 24.8-19.2 22.4-31.2-104-120.8-203.2-217.6-203.2-99.2 0-186.4 67.2-216 166.4-1.6 11.2-11.2 18.4-21.6 18.4z m239.2-498.4c-69.6 0-126.4 58.4-126.4 130.4s56.8 130.4 126.4 130.4c69.6 0 126.4-58.4 126.4-130.4-0.8-72-56.8-130.4-126.4-130.4z" fill="#fff" /></svg>
                    </button>
                <ul className="dropdown-menu  dropdown-menu-end">
                    <li><Link className="dropdown-item" to="/orderhistory">Order History</Link></li>
                    <li><button className="dropdown-item" onClick={signOutfun}>Log Out</button></li>
                </ul>
            </div>
            )
        }
        else{
            {/* if user is logged out  */}
            return(
            <button type="button" className={`btn btn-danger ${scrolled ? "btn-dark" : ""} px-4 my-2`} id="loginbutton" data-bs-toggle="modal" data-bs-target="#LoginModal" >Login</button>
            )
        }
    }
    

    return (
       <>
    <div className="container-fluid " >

    <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
        <div id="loginmodaldialog" className="modal-dialog modal-dialog-centered">
        <div className="modal-content"  >
            <div className="modal-header">
            <h5 className="modal-title">Login To Our Website</h5>
                <button id="closemodal" ref={closeModalref} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <h5 className="mb-3">{optStatetext}</h5>

            <div className="input-group mb-3">
                {!optState &&                 <span className="input-group-text" id="basic-addon1">+91</span>                }
                <input type="number" ref={numberRef} className="form-control"
                 placeholder={placeholder}
                 aria-label="Number" aria-describedby="basic-addon1"/>
            </div>


                
            </div>
            <div className="modal-footer">
                <div className="w-full flex">
                    {!optState ? <>
                        <button type="button" onClick={sendOtp} className="btn btn-primary justify-center px-4 mx-auto">Send OTP</button>

                    </> : <>
                    <button type="button" onClick={verifyOtp} className="btn btn-primary justify-center px-4 mx-auto">Verify</button>
                    </>}

                </div>
            </div>

            </div>
            </div>
    </div>
<nav id= "navbarHeaderDiv" className={`navbar ${scrolled ? 'navbar-dark bg-dark' : ''} navbar-expand-md fixed-top opacity-100 p-0` } >
    <div className="container-fluid justify-content-between flex-nowrap">

        <button type="button" className="navbar-toggler border-0"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon "></span>
        </button>

        <a href="index.html" className="navbar-brand mx-2 w-32">
            {scrolled ? <>
            <p className="text-xl my-auto">{brandName.toUpperCase()}</p>
            </> : <>
            <img src="../../asset/logo5.svg"/>
            </>}
            </a>
        <div className=" ms-auto order-md-last d-flex">
            <Link className="btn w-100 text-wrap my-2 md-pe-2 px-md-3 mb-3 " to="/cart" ><img width="25" height="25"  src="../../asset/cart.svg" alt="cart"/></Link>
            <RenderButton/>
        </div>



        <div  className={`offcanvas offcanvasCustomStart w-3/4 ${scrolled ? 'navbar-dark bg-dark' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title fw-bold navbar-brand" id="offcanvasNavbarLabel">{brandName.toUpperCase()}</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <ul className="offcanvas-body navbar-nav justify-content-md-end   ">
                <li className="nav-item"><Link className={`nav-link mx-2 fw-bold ${isActive("/") ? "active" : ""}`} to="/">Home</Link></li>
                <li className="nav-item"><Link className={`nav-link mx-2 fw-bold ${isActive("/mattress") ? "active" : ""}`} to="/mattress">Mattress</Link></li>
                <li className="nav-item"><Link className={`nav-link mx-2 fw-bold ${isActive("/curtain") ? "active" : ""}`} to="/curtain">curtain</Link></li>
                <li className="nav-item"><Link className={`nav-link mx-2 fw-bold ${isActive("/furniture") ? "active" : ""}`} to="/furniture">furniture</Link></li>
                <li className="nav-item"><Link className={`nav-link mx-2 fw-bold ${isActive("/about") ? "active" : ""}`} to="/about">about</Link></li>
                
            </ul>
        </div>

    </div>

</nav>
    <div id="recaptrediv" ref={recapturedivref}></div>
</div>





       </> 
    );
};

export default Header;
