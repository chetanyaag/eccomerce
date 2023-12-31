import { Grid, Typography, Button, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Rating, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Apiurl } from '@/constants';

const ProductPage = () => {


  const [name, setName] = useState('')
  const [url, seUrl] = useState('')
  const [image, setImage] = useState('')

  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [feature, setFeature] = useState([])
  // const [name, setName] = useState('')

  const router = useRouter()
  const {asin} = router.query
  const tag = router.query.tag

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const asin = urlParams.get('asin');
    const tag = urlParams.get('tag')
    // console.log("\n\n"+window.location.search +"\n");
    fetch(Apiurl+"getProductData?asin="+ asin).then((response) => response.json())
      .then((json) => {
        if (json['status'] == 200) {
            if (json['data']['product_title'] != null){
              setName((json['data']['product_title']).substring(0,130) + "....")
            }
            if (json['data']['product_image'] != null){
              setImage(json['data']['product_image'])
            }
            if (json['data']['product_price'] != null){
              setPrice(json['data']['product_price'])
            }
            if (json['data']['product_binding'] != null){
              setCategory(json['data']['product_group'])
            }
            if (json['data']['product_group'] != null){
              setCategory(json['data']['product_group'])
            }
            if (json['data']['product_features'] != null){
              setFeature(json['data']['product_features'])
            }
        }

      });
      // const interval = setInterval(() => {
      //   console.log('This will run every second!');
      // }, 10000);
      // return () => clearInterval(interval);

  },[])
  setTimeout(function() {
    window.location.replace("https://www.amazon.in/dp/"+ asin+ "?tag="+ tag);
  }, 2000);
  

const handleClick= ()=>{
    var link = "https://www.amazon.in/dp/"+ asin + "?tag="+ tag;
    router.push(link)
}


  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="450"
            sx={{backgroundSize: "cover"}}
            image={image}
            alt="Product Image"
          />          <CardHeader
          title={name}
          titleTypographyProps={{fontSize:"20px"}}
       />
          <CardContent>

            <Typography variant="h3">
              ₹ {price}
            </Typography>

            <Rating name="product-rating" value={4} readOnly />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Add to Cart
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClick}>
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={1}></Grid> */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          {/* <CardHeader title="" /> */}
          <CardContent>
          <Typography variant="body1" gutterBottom>
            {category==""? "": category}
            </Typography>

          <br/>

            <Typography variant="h6">
              Product Feature

            </Typography>
          <List dense>
          {feature.map((item) => (

        <ListItem key={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
          </List>


          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={1}></Grid>
    </Grid>
  );
};

export default ProductPage;
