import { Segment, Grid, Container, Header, Button } from "semantic-ui-react"
import DealerComponent from "./DealerComponent"
import AboutComponent from "./AboutComponent"
import ProductComponent from "./ProductComponent"
import PopularComponentMobile from "./PopularComponentMobile"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const BodySectionMobile = () => {
    const navigate = useNavigate()
    const [loadingState, setLoadingState] = useState(false)

    const handleLoading = () => {
        setLoadingState(true)
        setTimeout(() => {
           setLoadingState(false)
        }, 3000)
    }
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
                    <PopularComponentMobile />
                </Grid.Column>
            </Grid.Row>
            {/* <Grid.Row>
                <Grid.Column>
                <Button 
                       loading={loadingState} 
                       color="teal" 
                       basic 
                       size="huge"
                       onClick={() => {handleLoading()}}
                    >
                            View More
                    </Button>
                </Grid.Column>
            </Grid.Row>
          */}

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
                    <ProductComponent mobile />
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
       <Segment vertical textAlign='center' style={{padding: '4em 0em', backgroundColor: '#F4F6F6'}}>
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
export default BodySectionMobile