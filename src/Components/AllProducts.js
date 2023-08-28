import { Container, Grid, Segment, Image, Message, Header, Pagination } from "semantic-ui-react"
import { useNavigate, useParams } from "react-router-dom";
import getProducts from "./Db";
import PaginationComponent from "./PaginationComponent";

const AllProducts = ({mobile}) => {
    const navigate = useNavigate();
    const params = useParams()
    const handleBtnProduct =(prodId, productname) => {
        
        navigate("/products/" + productname + "/" + prodId)
    }
    const getItemsPerPage = () => {
        let lastItemId = params.pageno * 4
        let firstItemId = lastItemId - 3
    }

    return(
        <Segment vertical style={{textAlign: 'center', padding: '4em 0em'}}>
         <Container>
         <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header
                      as="h1"
                      color='teal'
                      content="PRODUCTS"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                <Grid>
        <Grid.Row>
        {
            
            getProducts().map((product) => {
               let lastItemId = params.pageno * 4
               let firstItemId = lastItemId - 3
               if(product.prodId >= firstItemId && product.prodId <= lastItemId){
                return(
                    <Grid.Column computer={4} mobile={8} tablet={8}>
                        <Segment raised style={{minHeight: mobile ? 270 : 330}} >
                            <Image style={{cursor: 'pointer'}} onClick ={() => {handleBtnProduct(product.prodId,product.name.replaceAll(" ", "-"))}} src={product.image} centered />
                            <Message color="teal" size="mini">
                                <Message.Header style={{cursor: '', fontSize: mobile ? '1.2em' : ''}} onClick ={() => {handleBtnProduct(product.prodId,product.name.replaceAll(" ", "-"))}}>{product.name}</Message.Header>
                            </Message>
                        </Segment>
                        <br/>
                    </Grid.Column>
                )
               }
            })
        }
        </Grid.Row>
        
       </Grid>
                </Grid.Column>
            </Grid.Row>
            <PaginationComponent />
         </Grid>
         </Container>
       </Segment>
    )
}
export default AllProducts