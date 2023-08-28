import { useNavigate } from "react-router-dom"
import { Grid, Segment, Image, Message } from "semantic-ui-react"
import getProducts from "./Db";
const ProductComponent = ({mobile}) => {
    const navigate = useNavigate();
   
    const handleBtnProduct =(prodId, productname) => {
        
        navigate("/products/" + productname + "/" + prodId)
    }
    return(
       <Grid stackable>
        <Grid.Row>
        {
            
            getProducts().map((product) => {
               if(product.prodId >= 1 && product.prodId <= 4){
                return(
                    <Grid.Column width={4} >
                        <Segment raised style={{minHeight: 350}} >
                            <Image style={{cursor: 'pointer'}} onClick ={() => {handleBtnProduct(product.prodId,product.name.replaceAll(" ", "-"))}} src={product.image} centered />
                            <Message color="teal">
                                <Message.Header style={{cursor: 'pointer'}} onClick ={() => {handleBtnProduct(product.prodId,product.name.replaceAll(" ", "-"))}}>{product.name}</Message.Header>
                            </Message>
                        </Segment>
                    </Grid.Column>
                )
               }
            })
        }
        </Grid.Row>
        
       </Grid>
       
    )
}
export default ProductComponent