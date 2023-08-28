import { useState } from "react"
import { Button, Grid, Icon, List, Segment } from "semantic-ui-react"
import { getPopularProduct } from "./Db"
import { useNavigate } from "react-router-dom"

const PopularComponentMobile = () => {
   
    const navigate = useNavigate()
    return(
       <Grid stackable>
        <Grid.Row>
            <Grid.Column>
                <Segment raised>
                    <List divided relaxed size="huge">

                    {
                        getPopularProduct().map((product) => {
                            return(
                                <List.Item>
                                    <Button 
                                        circular color="teal" 
                                        fluid size="huge"
                                        onClick={() => navigate("/products/" + product.name + "/" + product.prodId)}
                                    >
                                        {product.name}
                                    </Button>
                                </List.Item>
                            )
                        })
                    }     
                </List>
                </Segment>
                
            </Grid.Column>               
        </Grid.Row>
       </Grid>
    )
}
export default PopularComponentMobile