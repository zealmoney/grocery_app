import { Container, Grid, Segment, Image, Message, Header } from "semantic-ui-react"
import { useNavigate, useParams } from "react-router-dom";
import getProducts from "./Db";
import Headers from "./Headers";
import Footer from "./Footer";
import AllProducts from "./AllProducts";

const AllProductsComponent = () => {
    const params = useParams()

    return(
        <div>
        <Headers />
        <AllProducts />
        <Footer />
       </div>
    )
}
export default AllProductsComponent