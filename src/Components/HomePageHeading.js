import { Container, Grid, Header, Message } from "semantic-ui-react"

const HomePageHeading = ({mobile}) => {
    return(
        <Container>
            <Grid textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                    <Header 
                        as="h1" 
                        inverted
                        content="Packaged Food For Your Daily Needs"
                        style={{
                            fontSize: mobile? '2.5em' : '4em', 
                            fontWeight: 'normal', 
                            marginTop: '1.5em'
                        }}
                    />

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column id="bgColumn" style={{maxWidth: mobile? 400 : 600}}>                 
                        <Header
                          as="h1"
                          content="PLEASE HAVE A SEAT AT THE TABLE"
                          style={{
                            paddingTop: '1em', 
                            marginBottom: '0em',
                            color: '#48C9B0 ',
                            fontSize: mobile? '1.2em': '2em',
                          }}
                          
                        />
                       
                        <Header
                          as="h6"
                          content="Our food unites and we want to 
                          contribute to a society where everyone 
                          feels welcome at the table."
                          style={{
                            paddingBottom: '1em', 
                            marginTop: '0em',
                            color: '#48C9B0 ',
                            fontSize: mobile? '1em': '1.3em',
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
export default HomePageHeading