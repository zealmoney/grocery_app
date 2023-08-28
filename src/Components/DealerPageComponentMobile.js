import { useState } from "react"
import { Menu, Sidebar, Segment, Icon, Button, Container, Divider } from "semantic-ui-react"
import {Link, useNavigate} from 'react-router-dom'
import Footer from "./Footer"
import HomePageHeadingDealer from "./HomePageHeadingDealer"
import DealerPageComponent from "./DealerPageComponent"

const DealerPageComponentMobile = () => {
   const [sidebarOpened, setSidebarOpened] = useState()
   const navigate = useNavigate()
   return(
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
                 id='bgSegmentHistory'
                 style={{ minHeight: 150, padding: '1em 0em' }} 
                >
                    <Menu
                     fixed='top'
                     size="huge"
                     secondary
                     pointing
                     style={{backgroundColor: '#FFFFFF'}}           
                    >
                        <Container>
                           
                            <Menu.Item as='a' >
                                <Link style={{color: '#000'}} to='/'>KEFENA.COM</Link>
                            </Menu.Item> 
                            <Menu.Item position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon name="sidebar" />
                            </Menu.Item>                          
                           
                            
                        </Container>
                    </Menu>
                    <HomePageHeadingDealer mobile />
                </Segment>
            </Sidebar.Pusher>
            <DealerPageComponent />
            <Footer />
     </Sidebar.Pushable>
   )
   
}
export default DealerPageComponentMobile