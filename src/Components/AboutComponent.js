import { useNavigate } from "react-router-dom"
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react"

const AboutComponent = () => {

    const navigate = useNavigate()

    const openHistory = () => {
        navigate("/history")
    }

    return(
                        <Segment raised>
                        <Grid stackable>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Image fluid src="/images/about/aboutus.webp" />
                                </Grid.Column>
                                <Grid.Column width={8} style={{padding: '3em 2em'}}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                            <Header 
                                                as="h1" 
                                                content="Our History"
                                                color="teal"
                                            />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                            <p style={{fontSize: '1.5em'}}>
                                                When father Hratch came to Sweden from 
                                                Beirut in the 60s, the bag was full of 
                                                spices, bulgur and tahina.
                                            </p>

                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Button color="teal" size="large" onClick={() => openHistory()}  >
                                                    Read More
                                                </Button>

                                            </Grid.Column>
                                       

                                        </Grid.Row>
                                        
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Segment>

                   
    )
}
export default AboutComponent