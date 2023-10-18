import ResponsiveAppBar from "@/component/ResponsiveAppBar";
import { Box, CardMedia, Grid, Typography } from "@mui/material";


export default function aboutus() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>


      <Box display="flex" alignItems="center" >
        <Grid container >
          <Grid item xs={12} sm={12} md={12}>


            <CardMedia
              component="img"
              src="https://m.media-amazon.com/images/I/51WxhxxrEXL.jpg"
              alt="About Us Image"
              height="300"

            /></Grid>
          <Box m={4}>
            <Typography variant="h4" gutterBottom>  About Us   </Typography>
            <Typography variant="body1">
              Our mission is what drives us to do everything possible to expand best deals alert. We do that by Always focusing on new offers and deals for our lovely visitor, by making our deals more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.
              <br />
              PaisaBacha Deals is a fully free website that provides discounts offers from prominent national and international online retailers. We assist you in saving money every time you make an online transaction. What about that? We deal with the best e-commerce companies and search the internet to find and offer exclusive coupons and special discounts at your favorite online stores.  </Typography>
          </Box></Grid>
      </Box>
    </>
  );
}