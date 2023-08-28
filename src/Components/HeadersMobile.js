import { Menu, Sidebar, Segment, Icon, Button, Container, Divider } from "semantic-ui-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import SingleProductComponentMobile from "./SingleProductComponentMobile"

const HeadersMobile = () => {
const [sidebarOpened, setSidebarOpened] = useState()
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
    
       <Menu.Item as="a">Products</Menu.Item>
       <Menu.Item as="a">Our dealers</Menu.Item>
       <Menu.Item as="a">Prescription</Menu.Item>
       <Menu.Item as="a">Inspiration</Menu.Item>
       <Menu.Item as="a">Current</Menu.Item>
       <Menu.Item as="a">About us</Menu.Item>
     

   </Sidebar>
   <Sidebar.Pusher dimmed={sidebarOpened}>
             <Segment
              textAlign='center'
              vertical
              style={{padding: '1em 0em' }} 
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
                             <Link style={{color: '#000'}} to='/'>KEFENA</Link>
                         </Menu.Item> 
                         <Menu.Item position="right" onClick={() => setSidebarOpened(true)}>
                             <Icon name="sidebar" />
                         </Menu.Item>                          
                        
                         
                     </Container>
                 </Menu>
             </Segment>
         </Sidebar.Pusher>
      <SingleProductComponentMobile />
  </Sidebar.Pushable>
)
}
export default HeadersMobile