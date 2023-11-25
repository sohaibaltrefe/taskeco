import React from 'react'
import Input from '../../../page/Input';
import { useFormik } from 'formik';
import  {registerSchema} from '../valdation/validate.js'
import {  toast } from 'react-toastify';

import axios from 'axios';
export default function Regiester() {
    const initialValues ={
        
        userName:'',
        email:'',
        password:'',
        image:'',

    };
    const handelFieldChange=(event)=>{
        formik.setFieldValue('image',event.target.files[0]);
    }
    const   onSubmit= async users=>{
const formData =new FormData() ;
formData.append("userName",users.userName);
formData.append("email",users.email);

formData.append("password",users.password);

formData.append("image",users.image);
const {data}= await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);

if(data.message=="success"){
    formik.resetForm();
    toast.success('account created succesfully , plz  verify your email yo login', {
        position: "bottom-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}
console.log(data);
};
   
    
        const   formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema:registerSchema
    }); 
    const inputs=[
        {
            id:'username',
            type:'text',
            name:'userName',
            title:'user name',
            value:formik.values.username,

        },

        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,


        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,


        },
        {
            id:'image',
            type:'file',
            name:'image',
            title:'user image',
onChange:handelFieldChange

        },
        
    ];
    const renderInputs=inputs.map((input,index)=>
    <Input
     type={input.type} 
     id={input.id}
      name={input.name}
       title={input.title}
       value={input.value}
       key={input.type}
       errors={formik.errors}
        onChange={input.onChange || formik.handleChange} 
               onBlur={formik.handleBlur}
               touched={formik.touched}
/>
    )
  return (
    <>
    <div className='container'>
        <h2>create account</h2>
        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            {renderInputs}
<button type='submit' disabled={!formik.isValid}>Register</button>     
   </form>
    </div>
    </>
  )
}
