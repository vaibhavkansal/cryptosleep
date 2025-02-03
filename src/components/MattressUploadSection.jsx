// Import necessary libraries
import React, { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { app } from "../utils/customfirebase";
import { Blankspace } from "./subcomponents/OtherComponent";
import { useNavigate } from "react-router-dom";

const MattressUploadSection = () => {
  const [formData, setFormData] = useState({
    id: `MAT-${uuidv4().slice(0, 8)}`,
    image: null,
    name: "",
    about: "",
    mrp: "",
    sellingPrice: "",
    thickness:5,
    review: "",
    maincategory:"mattress",
    category: [],
    unitRateMRP: "",
    unitRateSellingP: "",
    otherImages: [],
    mattressFeel: "",
    warranty: "",
    idealFor: [],
    mattressFirmness: 5,
    detailDesc: "",
    baseLayer:"NO",
    baseLayerDetail:"",
    middleLayer:"NO",
    middleLayerDetail:"",
    topLayer:"NO",
    topLayerDetail:"",
    layerImage:null,
    clothType: "",
  });

  const db = getFirestore(app);
  const storage = getStorage(app);
  const navigate = useNavigate();
  const layerDetail = {"Pu Foam":"Cryptosleep P.U. foam resilience lends itself to better flexibility, thus offering pressure point comfort. It has a medium-firm feel and gives optimal body support and a comfortable bounce.","Hr Foam":"HR foam is renowned for its superior bounce and elasticity. It adapts quickly to body movements, providing optimal support and comfort. This type of foam is highly durable, making it a preferred choice for premium mattresses and seating.","Comfort Soft Foam":"A softer, snug, superior PU foam that has undergone rigorous testing. Resilience and softness blended together for the right feel.","Memory Foam":"Cryptosleep Memory foam is celebrated for its unique ability to contour to the body, relieving pressure points and enhancing comfort. It retains shape after use, ensuring consistent support. Ideal for those seeking a customized sleep experience, memory foam is a hallmark of luxurious mattresses.","Bonded Foam":"Rebonded foam is made by compressing and bonding shredded pieces of foam under high pressure. It is known for its exceptional density and firmness, offering robust support and durability. Commonly used in orthopedic mattresses and seating solutions, rebonded foam provides excellent support for the back and body."}

  
  
  // Handle input change


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      if (name === "image") {
        setFormData({ ...formData, image: files[0] });
      } else if (name === "otherImages") {
        setFormData({ ...formData, otherImages: Array.from(files) });
      } else if(name === "layerImage"){
        setFormData({ ...formData, layerImage: files[0] });
      }
    } else if (type === "checkbox") {
        if (name === "category"){
          const categories = [...formData.category];
          if (e.target.checked) {
            categories.push(value);
          } else {
            const index = categories.indexOf(value);
            if (index > -1) categories.splice(index, 1);
          }
          setFormData({ ...formData, category: categories });
        }
        
  
    } else if (type === "radio"){
      setFormData({ ...formData, maincategory: "mattress" });


    } else {

            let updatedFormData = { ...formData, [name]: value };
            if (name === "mrp"){

              var intd = parseInt(value);
              var thick = parseInt(formData["thickness"]);

              intd = intd / (2592*thick);

              updatedFormData = { ...updatedFormData, ["unitRateMRP"]: intd };
            }
            else if (name === "sellingPrice"){

              var intd = parseInt(value);
              var thick = parseInt(formData["thickness"]);

              intd = intd / (2592*thick);
              updatedFormData = { ...updatedFormData, ["unitRateSellingP"]: intd };

            }
            
            // else if (name === "topLayer"){
            //   updatedFormData = { ...updatedFormData, ["topLayerDetail"]: layerDetail[value] };
            
            // }
            // else if (name === "middleLayer"){
            //   updatedFormData = { ...updatedFormData, ["middleLayerDetail"]: layerDetail[value] };
            
            // }
            // else if (name === "baseLayer"){
            //   updatedFormData = { ...updatedFormData, ["baseLayerDetail"]: layerDetail[value] };
            
            // }

            setFormData(updatedFormData);
        
    }
  };

  const newHandleChange = (e) => {
    const { name, value, type, files } = e.target;
    let updatedFormData = { ...formData, [name]: value };
    if (name === "topLayer"){
      updatedFormData = { ...updatedFormData, ["topLayerDetail"]: layerDetail[value] };
    
    }
    else if (name === "middleLayer"){
      updatedFormData = { ...updatedFormData, ["middleLayerDetail"]: layerDetail[value] };
    
    }
    else if (name === "baseLayer"){
      updatedFormData = { ...updatedFormData, ["baseLayerDetail"]: layerDetail[value] };
    
    }

    setFormData(updatedFormData);

  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the main image to Firebase Storage
      console.log("formData");
      console.log(formData);
      let mainImageUrl = "";
      if (formData.image) {
        const imageRef = ref(storage, `products/${formData.id}/mainImage.jpg`);
        await uploadBytes(imageRef, formData.image);
        mainImageUrl = await getDownloadURL(imageRef);
      }

      // Upload the main image to Firebase Storage
      let layerimg = "";
      if (formData.layerImage) {
        const imageRef = ref(storage, `products/${formData.id}/layerImage.jpg`);
        await uploadBytes(imageRef, formData.layerImage);
        layerimg = await getDownloadURL(imageRef);
      }

      // Upload other images to Firebase Storage
      const otherImageUrls = [];
      for (const file of formData.otherImages) {
        const imageRef = ref(storage, `products/${formData.id}/otherImages/${file.name}`);
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);
        otherImageUrls.push(imageUrl);
      }

      // Save form data to Firestore
      await setDoc(doc(db, "products", formData.id), {
        ...formData,
        image: mainImageUrl,
        otherImages: otherImageUrls,
        layerImage:layerimg,
      });

      alert("Product uploaded successfully!");
      setFormData({
        id: `MAT-${uuidv4().slice(0, 8)}`,
        image: null,
        name: "",
        about: "",
        mrp: "",
        sellingPrice: "",
        thickness:5,
        review: "",
        maincategory:"mattress",
        category: [],
        unitRateMRP: "",
        unitRateSellingP: "",
        otherImages: [],
        mattressFeel: "",
        warranty: "",
        idealFor: [],
        mattressFirmness: 5,
        detailDesc: "",
        baseLayer:"NO",
        baseLayerDetail:"",
        middleLayer:"NO",
        middleLayerDetail:"",
        topLayer:"NO",
        topLayerDetail:"",
        layerImage:null,
        clothType: "",
      });
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Error uploading product. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <Blankspace/>
      <div className="flex justify-between">
      <h1>Upload Product</h1>
      <button className="btn btn-primary"onClick={()=>{navigate("/itemlist")}}>View Item List</button>
      </div>
     
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input type="text" className="form-control" value={formData.id} required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Main Image</label>
          <input type="file" className="form-control" name="image" onChange={handleChange} />
        </div>


        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">About</label>
          <textarea className="form-control" name="about" value={formData.about} onChange={handleChange} required></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">MRP (72x36)</label>
          <input type="number" className="form-control" name="mrp" value={formData.mrp} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Selling Price (72x36)</label>
          <input type="number" className="form-control" name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Main Thickness</label>
          <input type="number" className="form-control" name="thickness" value={formData.thickness} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Review</label>
          <input type="number" className="form-control" name="review" value={formData.review} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <div>
          {/* ['Bestseller Curtains','Blackout Curtains','Designer Curtains','Jacquard Curtains'] */}
            {['Bestseller Mattress','Soft Mattress','Medium Mattress','Hard Mattress'].map((cat) => (
              <div className="form-check" key={cat}>
                <input className="form-check-input" type="checkbox" name="category" value={cat} id={cat} onChange={handleChange} />
                <label className="form-check-label" htmlFor={cat}>{cat}</label>
              </div>
            ))}
          </div>
        </div>

       
        <div className="mb-3">
          <label className="form-label">Unit Rate MRP</label>
          <input type="number"  className="form-control" name="unitRateMRP" value={formData.unitRateMRP} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Unit Rate SellingPrice</label>
          <input type="number" className="form-control" name="unitRateSellingP" value={formData.unitRateSellingP} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Other Images</label>
          <input type="file" className="form-control" name="otherImages" multiple onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Mattress Feel</label>
          <select className="form-select" name="mattressFeel" value={formData.mattressFeel} onChange={handleChange} required>
            <option value="">Choose...</option>
            <option value="hard">Hard</option>
            <option value="medium">Medium</option>
            <option value="soft">Soft</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Warranty</label>
          <input type="text" className="form-control" name="warranty" value={formData.warranty} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Ideal For</label>
          <input type="text" className="form-control" name="idealFor" value={formData.idealFor} onChange={handleChange} placeholder="Separate values with commas" />
        </div>

        <div className="mb-3">
          <label className="form-label">Mattress Firmness (1-10)</label>
          <input type="range" className="form-range" name="mattressFirmness" min="1" max="10" value={formData.mattressFirmness} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Detailed Description</label>
          <textarea className="form-control" name="detailDesc" value={formData.detailDesc} onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Layer Image</label>
          <input type="file" className="form-control" name="layerImage" onChange={handleChange} />
        </div>


        
        <div className="md:flex mb-3">

          <div className="basis-1/3">
              <label className="form-label">Base Layer</label>
              <select id="optionbaseLayer" name="baseLayer" onChange={newHandleChange} className="border rounded px-2 py-1 w-full">
                  <option>No</option>
                  <option>Pu Foam</option>
                  <option>Hr Foam</option>
                  <option>Comfort Soft Foam</option>
                  <option>Memory Foam</option>
                  <option>Bonded Foam</option>
                </select>

                <input id="baseLayer" name="baseLayer" value={formData.baseLayer} onChange={handleChange} className="border rounded px-2 py-1 w-full"/>
              <textarea rows={5} className="w-full border border-solid py-2" id="baseLayerDetail" name="baseLayerDetail" value={formData.baseLayerDetail} onChange={handleChange}/>
            </div>
          <div className="basis-1/3">
              <label className="form-label">middle Layer</label>
              <select id="optionmiddleLayer" name="middleLayer"  onChange={newHandleChange} className="border rounded px-2 py-1 w-full">
                  <option>No</option>
                  <option>Pu Foam</option>
                  <option>Hr Foam</option>
                  <option>Comfort Soft Foam</option>
                  <option>Memory Foam</option>
                  <option>Bonded Foam</option>
              </select>

              <input id="middleLayer" name="middleLayer" value={formData.middleLayer} onChange={handleChange} className="border rounded px-2 py-1 w-full"/>
              <textarea rows={5} className="w-full border border-solid py-2"  id="middleLayerDetail" name="middleLayerDetail" value={formData.middleLayerDetail} onChange={handleChange}/>

          </div>
          <div className="basis-1/3">
              <label className="form-label">Top Layer</label>
              <select id="optiontopLayer" name="topLayer"  onChange={newHandleChange} className="border rounded px-2 py-1 w-full">
                  <option>No</option>
                  <option>Pu Foam</option>
                  <option>Hr Foam</option>
                  <option>Comfort Soft Foam</option>
                  <option>Memory Foam</option>
                  <option>Bonded Foam</option>
                </select>

                <input id="topLayer" name="topLayer" value={formData.topLayer} onChange={handleChange} className="border rounded px-2 py-1 w-full"/>
                <textarea rows={5} className="w-full border border-solid py-2"  id="topLayerDetail" name="topLayerDetail" value={formData.topLayerDetail} onChange={handleChange}/>

          </div>
          
        </div>

        <div className="mb-3">
        </div>

        <div className="mb-3">
          <label className="form-label">Cloth Type</label>
          <input type="text" className="form-control" name="clothType" value={formData.clothType} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default MattressUploadSection;
