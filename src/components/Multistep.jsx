// Parent Component

import { useState } from "react";
import { Name } from "./Name";
import { Address } from "./Address";
import { Education } from "./Education";
import db from "../database/db";
function Multistep(){
    ///Browser database Connection

    const saveformData = async () =>{

        try{
            await db.forms.put({
                id:"registraion-001",
                name:name,
                address:address,
                education:education,
                currentstep:currentstep
            });

            console.log("Form Data saved succesfully");
        }
        catch (error){
            console.error("Error while saving data : ", error);
        }
    };

    ///

    const[name, setName] = useState({
            fname:"Akshay",
            dob: "1998-10-13"
    });

    const[address, setAddress] = useState({
            faddress:"Somatane Phata Near Toll Plaza",
            pincode: "410506"
    });

    const[education, setEducation] = useState({
            hqualification:"Masters in Computer Science",
            uname: "SavitriBai Phule Pune "
    });


    //Current Step in Component
    const[currentstep, setcurrentstep] = useState(1);

    //Increase the step

    const handleNext = async() =>{

        await saveformData();
        let isValid = true;

    if (currentstep === 1) {
        isValid = validateName();
    } 
    else if (currentstep === 2) {
        isValid = validateAddress();
    } 
    else if (currentstep === 3) {
        isValid = validateEducation();
    }

    if (!isValid) {
        return;
    }

    setcurrentstep(prev => prev + 1);
};

    const handleBack = () => {
    if (currentstep > 1) {
        setcurrentstep(prev => prev - 1);
    }
    };

    // Error Validation
    // const[errors, setError] = useState({
    //     fname:"The Fullname is required",
    //     dob:"The DateofBirth is required",
    //     faddress:"The Address is required",
    //     pincode:"The Pincode is required",
    //     hqualification:"The Higher Qualification is required",
    //     uname:"The University Name is required",

    // });
    const [errors, setErrors] = useState({});

    // Name Validation
const validateName = () => {
    const newErrors = {};

    if (!name.fname.trim()) {
        newErrors.fname = "Full Name is required";
    }

    if (!name.dob) {
        newErrors.dob = "Date of Birth is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};


const validateAddress = () => {
    const newErrors = {};

    if (!address.faddress.trim()) {
        newErrors.faddress = "Address is required";
    }

    if (!address.pincode.trim()) {
        newErrors.pincode = "Pincode is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};



const validateEducation = () => {
    const newErrors = {};

    if (!education.hqualification.trim()) {
        newErrors.hqualification = "Highest Qualification is required";
    }

    if (!education.uname.trim()) {
        newErrors.uname = "University Name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};

    return(
        
        <div className="Multistep">
            <form>
            <h2 className="form-title">Multistep Form</h2>
       { currentstep === 1 && <Name name={name} setName={setName} errors={errors} /> }
         { currentstep === 2 && <Address address={address} setAddress={setAddress} errors={errors}/> }       
          { currentstep === 3 &&<Education education={education} setEducation={setEducation} errors={errors}/> }
        { currentstep ===3 && <button type='submit'>Submit</button>}
        </form>
        <nav>
            <button className="back" onClick={handleBack} disabled={currentstep === 1}>Back</button>
            <button className="next" onClick={handleNext}disabled={currentstep === 3}>Next</button>
        </nav>
        </div>
    )
}
export {Multistep}