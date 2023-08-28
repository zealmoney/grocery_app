import { Container, Grid, Header, Message } from "semantic-ui-react"

const HomePageHeadingDealer = ({mobile}) => {
    return(
        <Container>
            <Grid textAlign="center">
               
                <Grid.Row>
                    <Grid.Column id="bgColumnHistory" style={{maxWidth: mobile? 400 : 600, marginTop: '6em'}}>                 
                        <Header
                          as="h1"
                          content="OUR DEALERS"
                          style={{
                            paddingTop: '1.5em', 
                            marginBottom: '0em',
                            color: '#48C9B0 ',
                            fontSize: mobile? '1.5em': '2em',
                          }}
                          
                        />
                       
                        <Header
                          as="h6"
                          content="You can find Kefena's products at retailers all over the country, both in stores and online."
                          style={{
                            paddingBottom: '1.5em', 
                            marginTop: '0em',
                            color: '#48C9B0 ',
                            fontSize: mobile? '1.2em': '1.3em',
                            fontWeight: 'normal'
                          }}color="teal"
                          textAlign="center"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
          
             

        </Container>

    )
}
export default HomePageHeadingDealer