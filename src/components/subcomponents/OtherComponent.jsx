import React, { useRef, useState } from 'react'

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
		// Single: ['72" X 30"','72" X 35"','72" X 36"','72" X 42"','75" X 30"','75" X 35"','75" X 36"','75" X 42"','78" X 30"','78" X 35"','78" X 36"','78" X 42"' ],
		// Diwan: ['72" X 48"', '75" X 48"','78" X 48"'],
		// Queen: ['72" X 60"','72" X 66"','75" X 60"','75" X 66"','78" X 60"','78" X 66"'],
		// King: ['72" X 70"','72" X 72"','75" X 70"','75" X 72"','78" X 70"','78" X 72"'],
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
		const newMrp = parseInt(product.unitRateMRP) *  selectedVariant[0]*selectedVariant[1]*selectThickness/parseInt(product.thickness);
		const newSP = parseInt(product.unitRateSellingP) *  selectedVariant[0]*selectedVariant[1]*selectThickness/parseInt(product.thickness);
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