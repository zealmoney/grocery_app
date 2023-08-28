import { Link, useParams } from "react-router-dom"
import Headers from "./Headers"
import Footer from "./Footer"
import { Breadcrumb, Container, Grid, Segment, Image, Header, Message, Divider, Table, Tab } from "semantic-ui-react"
import { useState } from "react"
import getProducts from "./Db"

const Products = () => {
    const params = useParams()
    const sections = [
        {key: 'home', content: <Link to="/">Home</Link>, link:'true'},
        {key: 'product', content: <Link to="/openproducts/1">Products</Link>, link:'true'},
        {key: 'productname', content: <span style={{fontWeight: 'normal'}}>{params.productname}</span>, active:true},
    ]
    const getProduct = () => {
        let prod = getProducts().filter(i => i.prodId === params.prodid )[0]
        return prod
    }
  
    return(
        <div>  
            <Segment vertical style={{padding: '2em 0em'}}>
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column>
                                 <Breadcrumb size="big" icon="right angle" sections={sections} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} verticalAlign="middle">
                                    <Image centered  src={getProduct().image} size="medium" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column>
                                                <Header
                                                    as="h4"
                                                    content="Kefena"
                                                    size="large"
                                                />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                                <Header
                                                    as="h4"
                                                    content={getProduct().name}
                                                    size="huge"
                                                    color="teal"
                                                />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                                <Header
                                                    content = {getProduct().description}
                                                 style={{fontWeight: 'normal', wordSpacing: '0.2em'}}
                                                />
                                        </Grid.Column>
                                        
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                                <Header
                                                    content = "Available for purchase here:"
                                                    size="medium"
                                                    color="teal"
                                                    style={{fontWeight: 'normal', fontSize: '1.5em'}}                
                                                />
                                                <Grid>
                                                    <Grid.Row>
                                                        {
                                                            getProduct().dealers.map((dealer) => {
                                                                return(
                                                                    <Grid.Column width={5}>
                                                                        <Segment>
                                                                            <Image fluid src={dealer.valueOf()} />
                                                                        </Segment>

                                                                    </Grid.Column>
                                                                )
                                                            })
                                                        }
                           
                                                    </Grid.Row>
                                                </Grid>

                                        </Grid.Column>
                                        
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                                <Header
                                                     content = "Regional range may vary. Ask about the product at your local dealer!"
                                                     size="small"
                                                     style={{fontWeight: 'normal', fontSize: '1.2em'}}
                                                />
                                        </Grid.Column>
                                        
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Message size="large" color="teal">
                                    <Message.Header>Product Information</Message.Header>
                                    <Divider />
                                    <Grid stackable>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Header
                                                                content="Ingredients"
                                                            />
                                                            <p style={{color: '#000'}}>
                                                                {getProduct().ingredients}
                                                            </p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Header
                                                                content="Nutritional value"
                                                                
                                                            />
                                                            <Table basic celled unstackable>
                                                                        <Table.Body>  
                                                                           {         
                                                                                    getProduct().Energy1.map((entries) => {
                                                                                        return(
                                                                                            <Table.Row>
                                                                                                <Table.Cell>Energy</Table.Cell>

                                                                                                 <Table.Cell>{entries.valueOf()}</Table.Cell>

                                                                                            </Table.Row>   

                                                                                        )

                                                                                    })
                                                                            }
                                                                            {

                                                                                    getProduct().Energy2.map((entries) => {
                                                                                        return(
                                                                                            <Table.Row>
                                                                                                <Table.Cell>Energy</Table.Cell>

                                                                                                 <Table.Cell>{entries.valueOf()}</Table.Cell>

                                                                                            </Table.Row>   

                                                                                        )

                                                                                    })
                     
                                                                           } 
                                                                          {

                                                                                    getProduct().Fat.map((entries) => {
                                                                                        return(
                                                                                            <Table.Row>
                                                                                                <Table.Cell>Fat</Table.Cell>

                                                                                                 <Table.Cell>{entries.valueOf()}</Table.Cell>

                                                                                            </Table.Row>   

                                                                                        )

                                                                                    })
                     
                                                                           } 
                                                                           {

                                                                                getProduct().saturatedfat.map((entries) => {
                                                                                    return(
                                                                                        <Table.Row>
                                                                                            <Table.Cell>of which saturated fat	</Table.Cell>

                                                                                            <Table.Cell>{entries.valueOf()}</Table.Cell>

                                                                                        </Table.Row>   

                                                                                    )

                                                                                })

                                                                            }    
                                                                            {

                                                                                getProduct().Carbohydrate.map((entries) => {
                                                                                    return(
                                                                                        <Table.Row>
                                                                                            <Table.Cell>Carbohydrate</Table.Cell>

                                                                                            <Table.Cell>{entries.valueOf()}</Table.Cell>

                                                                                        </Table.Row>   

                                                                                    )

                                                                                })

                                                                            }   
                                                                            {

                                                                                    getProduct().sugars.map((entries) => {
                                                                                        return(
                                                                                            <Table.Row>
                                                                                                <Table.Cell>of which sugars	</Table.Cell>

                                                                                                <Table.Cell>{entries.valueOf()}</Table.Cell>

                                                                                            </Table.Row>   

                                                                                        )

                                                                                    })

                                                                            } 
                                                                            {

                                                                                    getProduct().Protein.map((entries) => {
                                                                                        return(
                                                                                            <Table.Row>
                                                                                                <Table.Cell>Protein	</Table.Cell>

                                                                                                <Table.Cell>{entries.valueOf()}</Table.Cell>

                                                                                            </Table.Row>   

                                                                                        )

                                                                                    })

                                                                            } 
                                                                                                                                           {

                                                                                    getProduct().Salt.map((entries) => {
                                                                                        return(
                                                                                            <Table.Row>
                                                                                                <Table.Cell>Salt	</Table.Cell>

                                                                                                <Table.Cell>{entries.valueOf()}</Table.Cell>

                                                                                            </Table.Row>   

                                                                                        )

                                                                                    })

                                                                            }                                                                                                                              
                                                                           
                                                                          
                                                                        </Table.Body>
                                                            </Table>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Header
                                                                content="Allergens"
                                                            />
                                                            <p style={{color: '#000'}}>
                                                                {getProduct().allergens}
                                                            </p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Header
                                                                content="Package size"
                                                               
                                                            />
                                                            <p style={{color: '#000'}}>
                                                                {getProduct().packagesize}
                                                            </p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Header
                                                                content="Storage"
                                                                
                                                            />
                                                            <p style={{color: '#000'}}>
                                                                {getProduct().storage}
                                                            </p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Header
                                                                content="sustainability"
                                                                
                                                            />
                                                            <p style={{color: '#000'}}>
                                                                {getProduct().sustainability}
                                                            </p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Header
                                                                content="Item number"
                                                                
                                                            />
                                                            <p style={{color: '#000'}}>
                                                                {getProduct().itemnumber} 
                                                            </p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    <Grid.Row>
                                                        <Grid.Column>
                                                            <Header
                                                                content="EAN"
                                                                
                                                            />
                                                            <p style={{color: '#000'}}>
                                                                {getProduct().ean}
                                                            </p>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>

                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>

                                </Message>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    )
}
export default Products