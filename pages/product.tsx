import ProductPage from "@/component/ProductPage";
import ResponsiveAppBar from "@/component/ResponsiveAppBar";
import { Box } from "@mui/system";

export default function product() {
    return (<Box>
<ResponsiveAppBar></ResponsiveAppBar>

<Box  marginLeft={3} marginTop={20}>

<ProductPage></ProductPage>

</Box>


    </Box>);
}