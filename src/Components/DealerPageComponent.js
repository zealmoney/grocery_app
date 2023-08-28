import { Grid, Header, Segment, Image, Container, Divider } from "semantic-ui-react"

const DealerPageComponent = () => {

    return(
        <div>
            <Segment vertical style={{padding: '2em 0em'}}>
                <Container>
                <Grid stackable textAlign="center">
                    <Grid.Row>
                        <Grid.Column width={12}>
                        <Header
                            as="h1"
                            content="Our dedicated and reliable dealers"
                            color="teal"
                            textAlign="center"
                        />
                        <Divider />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column verticalAlign="middle" width={12} textAlign="left">
                            <p style={{fontSize: '1.3em', wordBreak: 'break-word', fontWeight: 'normal'}}>
                                 Buy Kefena's wide range at your favorite store, both physical and online. Our network of dealers guarantees availability and quality throughout the country.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        
                        <Grid.Column verticalAlign="middle" width={12} textAlign="left">
                            <p style={{fontSize: '1.3em', wordBreak: 'break-word', fontWeight: 'normal'}}>
                                If you are missing something in the range, do not hesitate to ask your store to order the product home, alt. contact us at customer@kefena.com for more information on where the product may be available. Then we also have an opportunity to contact the store.  
                             </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                       
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Header
                                as="h1"
                                content="Available for purchase here:"
                                textAlign="left"
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Grid stackable>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <Segment compact style={{minHeight: 75}}>
                                            <Image src="/images/dealers/dealer1.webp" />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact style={{minHeight: 75}}>
                                            <Image src="/images/dealers/dealer2.webp" />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact style={{minHeight: 75}}>
                                            <Image src="/images/dealers/dealer3.webp" />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact style={{minHeight: 75}}>
                                            <Image src="/images/dealers/dealer4.webp" />
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <Segment compact style={{minHeight: 75}}>
                                            <Image  src="/images/dealers/dealer5.webp" />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact style={{minHeight: 75}}>
                                            <Image src="/images/dealers/dealer6.webp" />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact style={{minHeight: 75}}>
                                            <Image src="/images/dealers/dealer7.webp" />
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Segment compact style={{minHeight: 75}}>
                                            <Image src="/images/dealers/dealer7.webp" />
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
              
            </Segment>
        </div>
    )
}
export default DealerPageComponent