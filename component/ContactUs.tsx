import { useRouter } from "next/router";
import { useEffect } from "react";


export default function ContactUs(){

    const router = useRouter()

    useEffect(()=>{
        alert("Please Login to contact Us..")
        router.push("/login")
    },[])
    return(<></>)

}