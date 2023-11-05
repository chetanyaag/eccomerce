import { Apiurl } from "@/constants";
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Cookies from 'universal-cookie';


export default function UserTable() {

    const [users, setUsers]= useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editedRow, setEditedRow] = useState(8000);
    const [username, setUsername] = useState("")
    const [pwd, setPwd] = useState("")
    const cookies = new Cookies();
    useEffect(()=>{

        fetch(Apiurl+"get_users").then((response) => response.json())
        .then((json) => {
            if (json["status"]==200){
                setUsers(json["message"])
            }

        })
        const intervalId = setInterval(() => {
            // Your code to be executed every 2 seconds goes here
            console.log('This code runs every 2 seconds');
          }, 2000);
      
          // Clean up the interval when the component unmounts
          return () => {
            clearInterval(intervalId);
          };
    }, [])
    

    const onClickEdit=(event:any, index:any)=>{
        setIsEdit(true)
        setEditedRow(index)
        setUsername(users[index])

    }

    const onClickSave=(e:any, index:any)=>{
        setIsEdit(false)
        setEditedRow(6000)

        if (pwd.length<5 ){
            alert("Password should contain atleast 5 char")
        }
        if (pwd.length>5 ){

            fetch( Apiurl+"change_password", {
                method: "POST",
                body: JSON.stringify({
                    tkn: cookies.get('token'),
                    user:username,
                    pwrd:pwd

                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((response) => response.json())
            .then((json)=>{
                if (json["status"]===200){
                    alert("New password is updated")
                }else {
                    alert("User Not found in database")
                }

            })

        }
        setUsername("")
        setPwd("")

    }
const handlePwd = (e:any)=>{
    setPwd(e.target.value)
}

    return (
        <>
            <Card>
                <CardContent>

                <Typography variant="h5" >All Users</Typography>
                <br/>
                    <TableContainer component={Paper}>
                        <Table aria-label="Active Users">
                            <TableHead>
                                <TableRow>
                                    {/* <TableCell>Id</TableCell> */}
                                    <TableCell><Typography variant="h6" >Tag</Typography> </TableCell>
                                    <TableCell><Typography variant="h6" >Password</Typography></TableCell>
                                    <TableCell><Typography variant="h6" >Edit</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users.map((username, index)=>(
                                        <TableRow>
                                        {/* <TableCell>{}</TableCell> */}
                                        <TableCell>{username}</TableCell>
                                        <TableCell> 
                                            {isEdit && editedRow===index?           
                                        <TextField label="enter password" value={pwd} onChange={handlePwd} variant="outlined"/>:
                                        <Typography variant="h6" >*********</Typography>
                                        }</TableCell>
                                        <TableCell>
                                        {isEdit && editedRow===index?           
                                        <Button onClick={(e)=>{onClickSave(e, index)}} variant="contained" color="success"> save</Button>:<Button onClick={(e)=>{onClickEdit(e, index)}}><EditIcon/></Button>
                                        }
                                       
                                        
                                        </TableCell>
                                    </TableRow>
                                    ))
                                }
                            </TableBody>

                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </>
    );
}