import { Grid, Header, Segment, Image, Container, Divider } from "semantic-ui-react"

const HistoryComponent = () => {

    return(
        <div>
            <Segment vertical style={{padding: '2em 0em'}}>
                <Container>
                <Grid stackable textAlign="center">
                    <Grid.Row>
                        <Grid.Column width={12}>
                        <Header
                            as="h1"
                            content="Bringing African food to the scandevanians"
                            color="teal"
                            textAlign="center"
                        />
                        <Divider />

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image fluid src="/images/about/about2.png" size="large" />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle" width={8} textAlign="left">
                            <p style={{fontSize: '1.3em', wordBreak: 'break-word', fontWeight: 'normal'}}>
                                When father Hratch came to Sweden from Beirut on the sixties, the bag was full of spices, bulgur and tahina.
                                He met love, and inspired by his and his wife Anni's meeting over food, the portfolio grew rapidly with the aim of letting more northerners taste and unite through the flavors of the Middle East.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image fluid src="/images/about/about2.png" size="large" />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle" width={8} textAlign="left">
                            <p style={{fontSize: '1.3em', wordBreak: 'break-word', fontWeight: 'normal'}}>
                                The suitcase was exchanged for a truck and in 1998 the eldest son Michael took over as CEO of the fast-growing company.   
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Image fluid src="/images/about/about3.png" size="large" />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle" width={8} textAlign="left">
                            <p style={{fontSize: '1.3em', wordBreak: 'break-word', fontWeight: 'normal'}}>
                                 Today, the group has a turnover of close to half a billion kroner and employs more than 50 people originating from over 20 different countries, while the Maroutian family is as present and active as then.  
                            </p>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
                </Container>
              
            </Segment>
        </div>
    )
}
export default HistoryComponent