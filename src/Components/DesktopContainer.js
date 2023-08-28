import { Button, Container, Grid, Header, Icon, Menu, Search, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import HomePageHeading from './HomePageHeading'
import Footer from './Footer'
import BodySectionDesktop from './BodySectionDesktop'
import { Link, useNavigate } from 'react-router-dom'
import SearchComponent from './SearchComponent'

const DesktopContainer = () => {
    const navigate = useNavigate()

    return(
        <div>
       <Segment 
          id="bgSegment"
          textAlign='center' 
          inverted  
          style={{minHeight: 400}}

        >
            <Menu
            secondary
            size='huge'
            fixed='top'
            style={{textAlign: 'center', backgroundColor: '#FFF'}}
            >
                <Container>
                    <Menu.Item>
                        <Link style={{color: '#000'}} to='/'>KEFENA.COM</Link>
                    </Menu.Item>
                    <Menu.Item active as="a" onClick={() => navigate("/")}>Home</Menu.Item>
                    <Menu.Item as="a" onClick={() => navigate("/openproducts/1")}>Products</Menu.Item>
                    <Menu.Item as="a" onClick={() => navigate("/history")}>Our History</Menu.Item>
                    <Menu.Item as="a" onClick={() => navigate("/dealer")}>Our Dealers</Menu.Item>
                    <Menu.Item as="a">Recommended</Menu.Item>
                    <Menu.Item position='right'>
                        <SearchComponent />                    
                    </Menu.Item>
                </Container>
                   
            </Menu>
        <HomePageHeading />
       </Segment>
       <BodySectionDesktop />
       
       <Footer />
         </div>
        

    )
    
}
export default DesktopContainer