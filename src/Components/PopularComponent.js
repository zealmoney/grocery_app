import { Button, Grid } from "semantic-ui-react"
import { getPopularProduct } from "./Db"
import { useNavigate } from "react-router-dom"

const PopularComponent = () => {
    const navigate = useNavigate()
    return(

       <Grid stackable>
        <Grid.Row>
            {
                getPopularProduct().map((product) => {
                   return(
                        <Grid.Column width={4}>
                        <Button 
                        fluid 
                        size="huge" 
                        basic 
                        color="teal" 
                        circular
                        onClick={() => navigate("/products/" + product.name + "/" + product.prodId)}
                        >
                            {product.name}
                        </Button>
                        <br/>
                    </Grid.Column>
                   )
                })
            }
           
        </Grid.Row>
       </Grid>
    )
}
export default PopularComponent