import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
 
const CaptainProtectWrapper =({
    children
}) => {

    const token = localStorage.getItem('token');
    const {captain,setCaptain} =useContext(CaptainDataContext);
    const [isLoading,setisLoading] =useState(true);
    const navigate = useNavigate();



    useEffect(() => {
        if (!token) {
            console.log("No token found");
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(response=>{
        if(response.status===200){
            setCaptain(response.data.captain)
            setisLoading(false);
        }
    }).catch(err=>{
        localStorage.removeItem("token");
        setisLoading(false);
        navigate('/captain-login')
    })
    }, [ token ])

    if(isLoading){
        return(
            <div>
                Loading....
            </div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper