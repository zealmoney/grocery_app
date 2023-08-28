import { Segment, List, Grid, Container, Header, Divider, Icon, Image } from "semantic-ui-react"

const Footer = () => {

    return(
    <Segment style={{padding: '2em 0em'}} vertical inverted>
        <Container>
        <Grid stackable>
            <Grid.Row style={{fontWeight: 'normal'}}>
                <Grid.Column width={4} >
                    <Header
                    as='h4'
                    content='POPULAR PRODUCTS'
                    inverted
                    />
                    <List link inverted style={{fontWeight: 'normal', 
                            fontSize: '1.2em', margin: '2em 0em'}}>
                        <List.Item as='a'>Hummus Original</List.Item>
                        <List.Item as='a'>Corned Beef</List.Item>
                        <List.Item as='a'>Vine leaves in layer</List.Item>
                        <List.Item as='a'>Bulgur Coarse Pivlalik Roasted Noodles</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='DEALERS'
                    inverted
                    />
                    <List inverted link style={{fontSize: '1.2em', fontWeight: 'normal', 
                                                margin: '2em 0em'}}>
                        <List.Item as='a'>City Cross</List.Item>
                        <List.Item as='a'>Mattem</List.Item>
                        <List.Item as='a'>Willys</List.Item>
                        <List.Item as='a'>Coop</List.Item>
                        <List.Item as='a'>Hemkop</List.Item>

                    </List>

                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='OUR LINKS'
                    inverted
                    />
                    <List link inverted style={{fontWeight: 'normal', fontSize: '1.2em',
                                                margin: '2em 0em'}}>
                        <List.Item as='a'>Help</List.Item>
                        <List.Item as='a'>Contact us</List.Item>
                        <List.Item as='a'>Reservations</List.Item>
                        <List.Item as='a'>Delivery Service</List.Item>                
                    </List>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header
                    as='h4'
                    content='KEFENA.COM SOCIAL MEDIA'
                    inverted
                    />
                    <List inverted link style={{fontSize: '1.2em', 
                        fontWeight: 'normal', margin: '2em 0em'}}>
                        <List.Item as='a'><Icon name='facebook f' />Facebook</List.Item>
                        <List.Item as='a'><Icon name='twitter' />Twitter</List.Item>
                        <List.Item as='a'><Icon name='instagram' />Instagram</List.Item>
                        <List.Item as='a'><Icon name='linkedin' />Linkedin</List.Item>

                    </List>
                </Grid.Column>
            </Grid.Row>
            <Divider></Divider>
            <Grid.Row>
                <Grid.Column textAlign="center">
                    <List horizontal>
                    <List.Item>Contact us</List.Item>
                    <List.Item>Terms & Condition</List.Item>
                    <List.Item>Privacy Policy</List.Item>

                    </List>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Header 
                    as='h4' 
                    content='All Right Reserved &copy; 2023'
                    inverted
                    />

                </Grid.Column>
                <Grid.Column width={4} textAlign="right">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                            <Image src='/images/wireframe/apple.png' rounded />
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <Image src='/images/wireframe/google.png' rounded />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
            
            
            </Grid>
        </Container>

</Segment>

    )

}
export default Footer

