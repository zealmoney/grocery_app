import { Segment, Grid, Container, Header, Button } from "semantic-ui-react"
import DealerComponent from "./DealerComponent"
import AboutComponent from "./AboutComponent"
import ProductComponent from "./ProductComponent"
import PopularComponent from "./PopularComponent"
import LoadingComponent from "./LoadingComponent"
import AllProductsComponent from "./AllProductsComponent"
import { Link, useNavigate } from "react-router-dom"

const BodySectionDesktop = () => {
    var count = 1;
    const navigate = useNavigate()

    const openProductsComponent = () => {       
       // navigate("/loading")
       // setTimeout(() => {
            navigate("/openproducts/1")
       // }, 5000);
    }
  
    return(
        <div>
             <Segment vertical style={{textAlign: 'center', padding: '4em 0em'}}>
         <Container>
         <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header
                      as="h1"
                      color='teal'
                      content="OUR POPULAR FOODS"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                       <PopularComponent /> 
                </Grid.Column>
            </Grid.Row>

         </Grid>
         </Container>
       </Segment>
       <Segment vertical textAlign='center' style={{padding: '4em 0em', backgroundColor: '#FFF'}}>
         <Container>
         <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header 
                        as="h1" 
                        size='huge'
                        color='teal'
                        content="OUR PRODUCTS" 
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProductComponent />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Button
                      basic
                      color='teal'
                      size='huge'
                      onClick={() => openProductsComponent()}
                    
                    >
                        View All Products
                    </Button>
                </Grid.Column>
            </Grid.Row>
         </Grid>


         </Container>
       </Segment>
       <Segment vertical textAlign='center' style={{padding: '6em 0em', backgroundColor: '#F4F6F6'}}>
         <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <DealerComponent />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
         </Container>
       </Segment>
       <Segment textAlign='center' vertical style={{padding: '4em 0em'}}>
        <Container>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header
                      as="h1"
                      content="ABOUT KEFENA"
                      color='teal'

                    />

                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <AboutComponent />
                </Grid.Column>
            </Grid.Row>
          
        </Grid>
        </Container>
       </Segment>
        </div>
    )
}
export default BodySectionDesktop