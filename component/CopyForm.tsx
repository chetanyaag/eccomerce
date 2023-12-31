import { Card, CardContent, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";





export default function CopyForm(props: {
    asin: any; data: number; tag1:string
}){

    const router = useRouter()
    const [tag, setTag] = useState('shoaib12303-21')
    const [asin, setAsin] = useState(props.asin)

    const handleClick=()=>{
        navigator.clipboard.writeText("https://paisabacha.in/product?asin="+asin+"&tag="+props.tag1)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((err) => {
        alert('Error copying text to clipboard:'+ err);
      });
    }
    
    const handleClick2 =()=>{
        router.push("/dashboard")
    }


    return(
        <>
         <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                    Copy the genrated link
                    </Typography>
                    <TextField style={{ margin: '16px 0' }} InputProps={{ readOnly:true}} label="COPY THE LINK " value={"https://paisabacha.in/product?asin="+asin+"&tag="+ props.tag1} variant="outlined" helperText="Press SUCCESS BUTTON TO COPY THE LINK" fullWidth></TextField>
                    <div style={{ display: 'flex', justifyContent: 'center',margin: '16px 0' }}>
                    <Stack spacing={2} direction='row'>
                    <Button variant="contained" onClick={handleClick} color={props.data==0? "error":"secondary"}>{props.data==0?"Failed":"Success"}</Button> <Button variant="contained" color="warning" onClick={handleClick2}>Back</Button>
                    </Stack>
                    </div>
                
                </CardContent>
            </Card>
        </>
    );
}