import LoginForm from "@/component/LoginForm";
import ResponsiveAppBar from "@/component/ResponsiveAppBar";
import { useRouter } from 'next/router'
import { Apiurl } from '../constants';
import Cookies from 'universal-cookie';
import { Box } from "@mui/material";
import { useEffect } from "react";


export default function CheckLog(){

    const cookies = new Cookies();

    const router = useRouter();

     useEffect(() => {
        if(cookies.get('token')!=null){
            fetch( Apiurl+"check_tkn", {
                method: "POST",
                body: JSON.stringify({
                    tkn: cookies.get('token')
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((response) => response.json())
            .then((json) => {if(json['status']==200){
                router.push("/dashboard");
            }
            else{
                cookies.set('token', '', { path: '/', expires: (new Date(Date.now())) });
            }
         });}
    },[])


    return(
<><ResponsiveAppBar></ResponsiveAppBar>
<Box marginTop={20}>
<LoginForm ></LoginForm>
</Box>

        </>

    );
}