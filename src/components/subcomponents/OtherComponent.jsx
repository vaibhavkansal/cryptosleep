import React, { useEffect, useRef, useState } from 'react'
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import { getFunctions, httpsCallable } from "firebase/functions";
import { auth,signOutfun,app,db } from '../../utils/customfirebase';
import { useSelector } from 'react-redux';
import { collection, addDoc,doc,setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from "uuid";


export const Blankspace = () => {
  return (
    <div className='h-20'></div>
  )
}

export const Whychosecurtain = () =>{
  return(
    <>
        <div className='bg-gray-100'>
        <div className="container" style={{"marginTop":"-20px"}}>
		<div className="row" align="center">
			<h3 className="font-extrabold text-5xl mt-4">CUSTOMIZE CURTAINS</h3>
			<h4 className="text-gray-600 mb-7">Design your Curtains by yourself with just 4 easy steps</h4>
		</div>
		<div className="row" style={{"margin":"45px"}}>

			<div className="col-md-3 mb-5">
				<div className="card text-center">
					<img style={{"margin":"-45px"}} className="w-28 self-center" src="https://www.curtainwala.com/assets/images/icons/Select-fabric-icon.png"/>
						<div className="mt-16 text-2xl font-medium">STEP 1</div>
						<div className="my-4 text-xl font-extrabold my-5">Select the Fabric</div>
				</div>
			</div>
      <div className="col-md-3 mb-5">
				<div className="card text-center">
					<img style={{"margin":"-45px"}} className="w-28 self-center" src="https://www.curtainwala.com/assets/images/icons/Give-measurement-icon.png"/>
						<div className="mt-16 text-2xl font-medium">STEP 2</div>
						<div className="my-4 text-xl font-extrabold my-5">Give the Measurements</div>
				</div>
			</div>
      <div className="col-md-3 mb-5">
				<div className="card text-center">
					<img style={{"margin":"-45px"}} className="w-28 self-center" src="https://www.curtainwala.com/assets/images/icons/Get-estimate-icon.png"/>
						<div className="mt-16 text-2xl font-medium">STEP 3</div>
						<div className="my-4 text-xl font-extrabold my-5">Get Cost Estimation</div>
				</div>
			</div>
      <div className="col-md-3 mb-5">
				<div className="card text-center">
					<img style={{"margin":"-45px"}} className="w-28 self-center" src="https://www.curtainwala.com/assets/images/icons/Get-installed-icon.png"/>
						<div className="mt-16 text-2xl font-medium">STEP 4</div>
						<div className="my-4 text-xl font-extrabold my-5">Get Installed</div>
				</div>
			</div>			
		</div>
	</div>
        </div>
    </>
  )
}


export const MattressSizeModal = (props) => {

	const product = props.product;
	const setproduct = props.setproduct;
	const closeModalref = useRef(null);
	const lengthref = useRef(null);
	const breadthref = useRef(null);
	const [selectedSize, setSelectedSize] = useState('Single');
	const [selectedVariant, setSelectedVariant] = useState([72,36]);
	const [selectThickness, setselectThickness] = useState(5);

	const sizes = {
		Single: [[72,30],[72,35],[72,36],[72,42],[75,30],[75,35],[75,36],[75,42],[78,30],[78,35],[78,36],[78,42]],
		Diwan: [[72,48],[75,48],[78,48]],
		Queen: [[72,60],[72,66],[75,60],[75,66],[78,60],[78,66]],
		King: [[72,70],[72,72],[75,70],[75,72],[78,70],[78,72]],
		Custom: [],
	};
	const thickness = [5,6,8,10];

	const handleSizeClick = (size) => {
	setSelectedSize(size);
	setSelectedVariant(''); // Reset variant when size changes
	};

	const handleVariantClick = (variant) => {
		console.log(variant)
	setSelectedVariant(variant);
	};

	const handleThicknessClick = (thickness) => {
		setselectThickness(thickness);
		};

	const customsizeChange = () =>{
		const l = lengthref.current?.value;
		const b = breadthref.current?.value;
		const c = [l,b];
		setSelectedVariant(c);

	}

	const setsize = ()=>{
		const finalsize = selectedSize+" | "+ selectedVariant[0] +'" X '+ selectedVariant[1] + '" | '+ selectThickness+ '"';
		const newMrp = Math.round(parseInt(product.unitRateMRP) *  selectedVariant[0]*selectedVariant[1]*selectThickness);
		const newSP = Math.round(parseInt(product.unitRateSellingP) *  selectedVariant[0]*selectedVariant[1]*selectThickness);
		console.log(finalsize,parseInt(product.unitRateMRP),newMrp,newSP)
		setproduct({...product,"OrderSize":finalsize,"mrp":newMrp,"sellingPrice":newSP});
		closeModalref.current?.click();		
	}

	return (
	   <div className="modal fade" id="SizeModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
        <div id="loginmodaldialog" className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content"  >
            <div className="modal-header">
            <h5 className="modal-title">Choose a Variant			</h5>
                <button id="closemodal" ref={closeModalref} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
				<div className='text-gray-600 font-semibold m-3'>Size Category</div>
				<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  gap-y-2 gap-x-3">
				{Object.keys(sizes).map((size) => (

					
					<button
						key={size}
						onClick={() => handleSizeClick(size)}
						className={`md:px-4 py-2 rounded-md border border-solid text-center ${
						selectedSize === size ? 'bg-violet-700 text-white' : 'bg-white text-gray-800'
						}`}
					>
						{size}
					</button>
				))}	
				</div>
				<div>

					{selectedSize ==="Custom" ?<div className="text-gray-600 font-semibold m-3">Dimension (In Inches)</div> :<div className="text-gray-600 font-semibold m-3">Variants for {selectedSize}</div>}
					<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-2 gap-x-3">

	
						{sizes[selectedSize].map((variant) => (
						<button
							key={variant}
							onClick={() => handleVariantClick(variant)}
							className={`md:px-4 py-2 rounded-md border border-solid text-center ${
							JSON.stringify(selectedVariant)  === JSON.stringify(variant) ? 'bg-violet-800 text-white' : 'bg-white text-gray-800'
							}`}
						>
							{variant[0] + '" X ' + variant[1] + '"'}
						</button>

						))}

					</div>
					{selectedSize==="Custom" && <>

						<div className="w-full">
							<div className="flex flex-row-wrap gap-3">
							<input type='number' ref={lengthref} onChange={customsizeChange} placeholder="Length" className="w-1/2 p-2  text-center border-2 border-solid rounded-lg border-violet-700"/>
							<input type='number' ref={breadthref} onChange={customsizeChange} placeholder="Breadth" className="w-1/2 p-2 text-center border-2 border-solid rounded-lg border-violet-700"/>
							</div>

						</div>
								
								</>}

				</div>

				<div className='text-gray-600 font-semibold m-3'>Thickenss / Height (In Inches)</div>
				<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  gap-y-2 gap-x-3">
				{thickness.map((size) => (
					<button
						key={size}
						onClick={() => handleThicknessClick(size)}
						className={`px-4 py-2 rounded-md border border-solid text-center ${
							selectThickness === size ? 'bg-violet-700 text-white' : 'bg-white text-gray-800'
						}`}
					>
						{size +'"'}
					</button>
				))}	

				</div>

                
            </div>
            <div className="modal-footer">
                <div className="w-full flex">
				<button onClick={setsize} className=" w-full rounded-lg mt-3 bg-violet-700 text-white text-2xl py-2 px-4 rounded-lg hover:bg-violet-700 focus:bg-violet-900 focus:outline-none transition-all duration-200">
						Confirm Variant
					</button>
                </div>
            </div>

            </div>
            </div>
    </div>
	);
}

export const CurtainSizeModal = (props) => {

	const product = props.product;
	const setproduct = props.setproduct;
	const closeModalref = useRef(null);
	const lengthref = useRef(null);
	const [selectedCategory, setselectedCategory] = useState('Door');
	const [selectedVariant, setSelectedVariant] = useState(7);

	const sizecategory = {
		Window: [5,7,8,9],
		Door: [5,7,8,9],
		Custom: [],
	};

	const handleSizeClick = (size) => {
		setselectedCategory(size);
		setSelectedVariant(''); // Reset variant when size changes
		};

	const handleVariantClick = (variant) => {
			console.log(variant)
		setSelectedVariant(variant);
		};
	
	const setsize = ()=>{
			const finalsize = selectedCategory + " | "+ selectedVariant +' Ft OR '+ (selectedVariant*12).toFixed(1) + ' In';
			const newMrp = Math.round((parseInt(product.unitRateMRP) *  ((selectedVariant*0.3048)+0.4)) + 125);
			const newSP = Math.round((parseInt(product.unitRateSellingP) *   ((selectedVariant*0.3048)+0.4))+125);
			setproduct({...product,"OrderSize":finalsize,"mrp":newMrp,"sellingPrice":newSP});
			closeModalref.current?.click();		
		}
	

	return (
	   <div className="modal fade" id="SizeModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
        <div id="loginmodaldialog" className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content"  >
            <div className="modal-header">
            <h5 className="modal-title">Choose a Variant			</h5>
                <button id="closemodal" ref={closeModalref} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
				<div className='text-gray-600 font-semibold m-3'>Size Category</div>
				<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  gap-y-2 gap-x-3">
				{Object.keys(sizecategory).map((category) => (

					
					<button
						key={category}
						onClick={() => handleSizeClick(category)}
						className={`md:px-4 py-2 rounded-md border border-solid text-center ${
							selectedCategory === category ? 'bg-violet-700 text-white' : 'bg-white text-gray-800'
						}`}
					>
						{category}
					</button>
				))}	
				</div>
				<div>

					{selectedCategory ==="Custom" ?<div className="text-gray-600 font-semibold m-3">Dimension (In Inches)</div> :<div className="text-gray-600 font-semibold m-3">Variants for {selectedCategory}</div>}
					<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-2 gap-x-3">

	
						{sizecategory[selectedCategory].map((variant) => (
						<button
							key={variant} 
							onClick={() => handleVariantClick(variant)}
							className={`md:px-4 py-2 rounded-md border border-solid text-center ${
							selectedVariant  === variant ? 'bg-violet-800 text-white' : 'bg-white text-gray-800'
							}`}
						>
							{variant + ' Ft'}
						</button>

						))}

					</div>
					{selectedCategory==="Custom" && <>
						

						<div className="w-full">
							<div className="flex flex-row-wrap gap-3">
							<input type='number' ref={lengthref} onChange={()=>(setSelectedVariant((lengthref.current?.value / 12).toFixed(2)))} placeholder="Height" className="w-1/2 p-2  text-center border-2 border-solid rounded-lg border-violet-700"/>
							</div>

						</div>
								
								</>}

				</div>

		
                
            </div>
            <div className="modal-footer">
                <div className="w-full flex">
				<button onClick={setsize} className=" w-full rounded-lg mt-3 bg-violet-700 text-white text-2xl py-2 px-4 rounded-lg hover:bg-violet-700 focus:bg-violet-900 focus:outline-none transition-all duration-200">
						Confirm Variant
					</button>
                </div>
            </div>

            </div>
            </div>
    </div>
	);
}


export const AddressModal = (props) => {

	const items = props.cartimtems;
	const total = props.total;

	var loggeduser = useSelector((state) => state.user);
 
	const closeModalref = useRef(null);
	const firstname = useRef(null);
	const lastname = useRef(null);
	const address = useRef(null);
	const pincode = useRef(null);
	const number = useRef(null);
	const functions = getFunctions(app);

	const callFunction = async (completedir,total) => {
		const uniqueId = uuidv4();
		const docRef = doc(db, "UserCart", uniqueId);
		await setDoc(docRef, completedir);
		const createOrder = httpsCallable(functions, "createOrder");
		try {
		  const result = await createOrder({ amount : String(total*100)});
		  console.log(result);
		  console.log(result.data.response.responseamount);
		  console.log(result.data.response.currency);
		  setDoc(docRef, {
			...completedir, // Keep existing data
			functionResponse: result.data, // Add function response
			timestamp: new Date(),
		  });



		  if (window.Razorpay) {
			const options = {
			  key: "rzp_live_J7gn7nE5T7goDG", // Replace with your Razorpay Key ID
			  amount: String(result.data.response.amount), // Amount in smallest currency unit (e.g., 50000 paisa = ₹500)
			  currency: result.data.response.currency,
			  name: "Cryptosleep Store",
			  description: "Payment",
			  order_id: result.data.response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			  handler: function (response) {
				console.log("Payment Successful:", response);
			  },
			  prefill:completedir,
			  notes: {
				address: "Address for order delivery",
			  },
			  theme: {
				color: "#5b21b6", // Customize button color
			  },
			};
			console.log(options);
	  
			const rzp1 = new window.Razorpay(options);
			rzp1.open();
		  } else {
			console.error("Razorpay script is not loaded properly.");
		  }
			}
		catch (error) {
		  console.error("Error calling function:", error);
		}
	  };

	function paynow(){
		const firstNameValue = firstname.current?.value.trim();
		const lastNameValue = lastname.current?.value.trim();
		const addressValue = address.current?.value.trim();
		const pincodeValue = pincode.current?.value.trim();
		const numberValue = number.current?.value.trim();

		if (!firstNameValue || !lastNameValue || !addressValue || !pincodeValue || !numberValue) {
			alert("All fields must be filled!");
			return;
		}

		if (!/^\d{10}$/.test(numberValue)) {
			alert("Phone number must be exactly 10 digits!");
			return;
		}

		const userdetails = {
			firstName: firstNameValue,
			lastName: lastNameValue,
			address: addressValue,
			pincode: pincodeValue,
			number: numberValue,
		}

		const completedir = {"user":userdetails,"cart":items,"loggeduser":loggeduser};
		callFunction(completedir,total);

	}


	return (
	   <div className="modal fade " id="SizeModal" tabIndex="-1"  aria-labelledby="LoginModalLabel" aria-hidden="true">
        <div id="loginmodaldialog " className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content"  >
            <div className="modal-header">
            <h5 className="modal-title">Address</h5>
                <button id="closemodal" ref={closeModalref} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body ">
				<div className="grid grid-cols-2 gap-2">
					<div class="relative z-0 w-full mb-5 group border-b-2 border-b-violet-800">
						<input type="text" name="firstname" ref={firstname} id="firstname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label for="firstname" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
					</div>
					<div class="relative z-0 w-full mb-5 group border-b-2 border-b-violet-800">
						<input type="text" name="lastname" ref={lastname} id="lastname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label for="lastname" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
					</div>
				</div>
				<div className="grid gap-2">
					
					<div class="relative z-0 w-full mb-5 group border-b-2 border-b-violet-800">
						<textarea type="text" ref={address} name="address" id="address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label for="address" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<div class="relative z-0 w-full mb-5 group border-b-2 border-b-violet-800">
						<input type="number" ref={pincode} name="pincode" id="pincode" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label for="pincode" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pincode</label>
					</div>
					<div class="relative z-0 w-full mb-5 group border-b-2 border-b-violet-800">
						<input type="text" name="number" ref={number} id="number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label for="number" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number</label>
					</div>
				</div>

			</div>
            <div className="modal-footer">
                <div className="w-full flex">
				<button onClick={paynow} className=" w-full rounded-lg mt-3 bg-violet-700 text-white text-2xl py-2 px-4 rounded-lg hover:bg-violet-700 focus:bg-violet-900 focus:outline-none transition-all duration-200">
						Pay Now
					</button>
                </div>

            </div>

            </div>
            </div>
    </div>
	);
}

