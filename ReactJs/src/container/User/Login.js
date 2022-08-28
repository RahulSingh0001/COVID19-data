import './UserStyle.css';
import Logos from '../img/UserDtl.jpg'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import AddUser from  '../Pages/AddUser';


const LogIn=()=>{
    const{useState}=React;
    const navigate = useNavigate();
    const[eye,seteye]=useState(true);
    const[inpass,setinpass]=useState("password");
    const[warning,setwarning]=useState(false);
    const[tick,settick]=useState(false);
    
     const[inputText,setInputText]=useState({ 
        
        firstName:"",
        lastName:"",
        email:"",
        contactNo:"",
        Address:"",
    });
    
    const[wfirstName,setfirstName]=useState(false);
    const[wlastName,setlastName]=useState(false);
    const[wemail,setwemail]=useState(false);
    const[wcontactNo,setcontactNo]=useState(false);
    const[wAddress,setAddress]=useState(false);

 const Eye=()=>{
     if(inpass=="password"){
         setinpass("text");
         seteye(false); 
         setwarning(true);
     }
     else{
         setinpass("password");
         seteye(true);  
         setwarning(false);
     }
 }

const Tick=()=>{
   
    if(tick){
        settick(false);
    }
    else{
        settick(true);
    }
}


    const inputEvent=(event)=>{
        
        const name=event.target.name; 
        const value=event.target.value;
            setInputText((lastValue)=>{ 
                return{
                    ...lastValue,
                    [name]:value
                }
            }); 
        
    } 

    const cancelCourse=()=>{
      document.getElementById('firstName').value="";
      document.getElementById('lastName').value="";
      document.getElementById('email').value="";
      document.getElementById('contact').value="";
      document.getElementById('address').value="";
      }
    const isValidEmail=(email)=> {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
      }
    const isValidcontact=(contact)=> {
      return /[0-9]|\./.test(contact);
    }
     
    console.log('Email entered',inputText.email);
    console.log('Email valid',isValidEmail(inputText.email));
      
    const submitForm=(e)=>{
         
        e.preventDefault();
        
        setwemail(false);
        setlastName(false);
        setfirstName(false);
        setAddress(false);
        setcontactNo(false);

        if(inputText.firstName==""){
            setfirstName(true);          
            toast.warning('First Name Cannot be empty!!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }
        if(inputText.lastName==""){
            setlastName(true);
            toast.warning('Last Name cannot be empty', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }
        if(inputText.email=="" || isValidEmail(inputText.email)==false){           
            setwemail(true);
            toast.warning('Email Not Valid!!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }
        else if(inputText.email!="" || isValidEmail(inputText.email)!=false){
            setwemail(false);
        }
        if(inputText.contactNo=="" || inputText.contactNo.length<10 || isValidcontact(inputText.contactNo)==false){
            setcontactNo(true);            
            toast.warning('Contact number cannot be empty,alpha numeric or less than 10 digits!!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }
        if(inputText.Address==""){
            setAddress(true);            
            toast.warning('Address cannot be empty', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }


      else{
          setfirstName(false);
          setAddress(false);
          setcontactNo(false);
          setlastName(false);
          setwemail(false);
          cancelCourse();
            toast.success('Data added successfully!!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            navigate(<AddUser/>);
      }
    } 




return(
<>
<div className="container">
  <div className="card">
     <div className="form">
        <div className="left-side">
            <img src={Logos} alt=""/>

                
        </div>
        <div className="right-side">
                <div className="heading">
                    <h3>Add User Details Here!</h3>                   
                </div>

                <form onSubmit={submitForm} id="create-course-form">
                <div className="input-text">
                    <input type="text" className={`${wfirstName ? "text-warning" : ""}`} value={inputText.firstName} onChange={inputEvent} name="firstName" id="firstName"/>
                    <label>First Name</label>
                    <i className="fa fa-envelope"></i>

                </div>
                    {wfirstName? <div className='alert alert-danger mt-2 textColor'>First Name cannot be empty!!</div>: ''}

                    <div className="input-text">
                    <input type="text" className={`${wlastName ? "text-warning" : ""}`} value={inputText.lastName} onChange={inputEvent} name="lastName" id="lastName" />
                    <label>Last Name</label>
                    <i className="fa fa-envelope"></i>

                </div>
                    {wlastName? <div className='alert alert-danger mt-2'>Last Name cannot be empty!!</div>: ''}

                    <div className="input-text">
                    <input type="text" className={`${wemail ? "text-warning" : ""}`} value={inputText.email} onChange={inputEvent} name="email" id="email" />
                    <label>Email</label>
                    <i className="fa fa-envelope"></i>

                </div>
                    {wemail? <div className='alert alert-danger mt-2'>Email invalid.</div>: ''}
                <div className="input-text">
                    <input type="text" className={`${wcontactNo ? "text-warning" : ""}`} value={inputText.contactNo} onChange={inputEvent} name="contactNo" id="contact" />
                    <label>Contact Number</label>
                    <i className="fa fa-envelope"></i>
                  
                </div>
                {wcontactNo? <div className='alert alert-danger mt-2'>Contact Number cannot be empty or less than 10 digits</div>: ''}

                <div className="input-text">
                    <input  type="text"className={`${wAddress ? "text-warning" : ""}`}  value={inputText.Address} onChange={inputEvent} name="Address" id="address" />
                    <label>Address</label>
                    <i className="fa fa-envelope"></i>
                   
                </div>
                {wAddress? <div className='alert alert-danger mt-2'>Address cannot be empty!!</div>: ''}

                <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} 
                newestOnTop={false}closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
               
                <div className="save-button ">
                    <button type="submit" data-inline="true">Add</button>

                </div>

                
                 </form>
                 <div className="cancel-button ">
                    <button type="cancel" data-inline="true" onClick={cancelCourse}>Cancel</button>
                    
                </div>
           </div>
        </div>
    </div>
</div>

      
</>
);
}


export default LogIn;