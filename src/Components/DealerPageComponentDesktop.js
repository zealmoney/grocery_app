import Footer from "./Footer"
import HistoryComponent from "./HistoryComponent"
import { Button, Container, Grid, Header, Icon, Menu, Search, Segment } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import HomePageHeadingDealer from "./HomePageHeadingDealer"
import DealerPageComponent from "./DealerPageComponent"
import SearchComponent from "./SearchComponent"

const DealerPageComponentDesktop = () => {

    const navigate = useNavigate()

    return(
        <div>
           <Segment 
          id="bgSegmentHistory"
          textAlign='center' 
          inverted  
          style={{minHeight: 250}}

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
                    <Menu.Item as="a" onClick={() => navigate("/")}>Home</Menu.Item>
                    <Menu.Item as="a" onClick={() => navigate("/openproducts/1")}>Products</Menu.Item>
                    <Menu.Item as="a" onClick={() => navigate("/history")}>Our History</Menu.Item>
                    <Menu.Item active as="a" onClick={() => navigate("/dealer")}>Our Dealers</Menu.Item>
                    <Menu.Item as="a">Recommended</Menu.Item>
                    <Menu.Item position='right'>
                        <SearchComponent />
                    </Menu.Item>
                </Container>
                   
            </Menu>
        <HomePageHeadingDealer />
       </Segment>
       <DealerPageComponent />       
       <Footer />
        </div>
    )
}
export default DealerPageComponentDesktop