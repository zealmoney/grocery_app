import { useNavigate } from "react-router-dom"
import { Grid, Image, Segment, Card, Header, Button } from "semantic-ui-react"

const DealerComponent = () => {
    const navigate = useNavigate()
    return(
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment style={{}}>
                                   <Image fluid src="/images/dealers/dealer3.webp" />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Segment style={{}}>
                                   <Image fluid src="/images/dealers/dealer4.webp" />
                                </Segment>
                                
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Segment style={{}}>
                                   <Image fluid src="/images/dealers/dealer5.webp" />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Segment style={{}}>
                                   <Image fluid src="/images/dealers/dealer2.webp" />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Segment style={{}}>
                                   <Image fluid src="/images/dealers/dealer6.webp" />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Segment style={{}}>
                                   <Image fluid src="/images/dealers/dealer7.webp" />
                                </Segment>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Grid.Column>
                <Grid.Column width={6}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column textAlign="left">
                                <Header
                                    as="h2"
                                    content="Our Products are Available at Dealer Stores Nationwide"
                                    style={{fontSize: '2em', wordSpacing: '0.2em'}}
                                />
                                <span style={{fontSize: '1.3em'}}>Our network of dealers guarantees availability 
                                    and quality throughout the country
                                </span>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign="left">
                                <Button color="teal" size="large" onClick={() => navigate("/dealer")}  >
                                    View All Dealers
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default DealerComponent