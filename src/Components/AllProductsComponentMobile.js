import { Menu, Sidebar, Segment, Icon, Button, Container, Divider } from "semantic-ui-react"
import { useState } from "react"
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import AllProducts from "./AllProducts";

const AllProductsComponentMobile = () => {
  
    const [sidebarOpened, setSidebarOpened] = useState()
    const navigate = useNavigate()

    return(
    <div>
        <Sidebar.Pushable>
        <Sidebar
            as={Menu}
            animation="overlay"
            visible={sidebarOpened}
            inverted
            vertical
            onHide={() => setSidebarOpened(false)}
            style={{backgroundColor: 'teal'}}

        >
            
                    <Menu.Item as="a" onClick={() => navigate("/")}>Home</Menu.Item>
                    <Menu.Item as="a" onClick={() => navigate("/openproducts/1")}>Products</Menu.Item>
                    <Menu.Item as="a" onClick={() => navigate("/history")}>Our History</Menu.Item>
                    <Menu.Item as="a" onClick={() => navigate("/dealer")}>Our Dealers</Menu.Item>
                    <Menu.Item as="a">Recommended</Menu.Item>  
            

        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                    textAlign='center'
                    vertical
                    style={{padding: '1em 0em', backgroundColor: '#FFF' }} 
                    >
                        <Menu
                        fixed='top'
                        size="huge"
                        secondary
                        pointing
                        style={{backgroundColor: 'teal'}}           
                        >
                            <Container>
                                
                                <Menu.Item as='a' >
                                    <Link style={{color: '#fff'}} to='/'>KEFENA.COM</Link>
                                </Menu.Item> 
                                <Menu.Item position="right" onClick={() => setSidebarOpened(true)}>
                                    <Icon name="sidebar" style={{color: '#fff'}} />
                                </Menu.Item>                          
                                
                                
                            </Container>
                        </Menu>
                    </Segment>
                    <AllProducts mobile />
                    <Footer />

                </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
       
    )
}
export default AllProductsComponentMobile