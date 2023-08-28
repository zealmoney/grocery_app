import { Container, Menu, Segment, Search } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom"
import SearchComponent from "./SearchComponent"

const Headers = () => {
        const navigate = useNavigate()
        return(
            <Segment vertical textAlign="center" style={{minHeight: 75, backgroundColor: '#fff;', margin: 0}}>
                <Menu
                    fixed="top"
                    size="huge"
                    secondary
                    style={{textAlign: 'center', backgroundColor: '#fff', margin:'0em 0em'}}
                >
                    <Container>
                        <Menu.Item>
                            <Link style={{color: '#000'}} to='/'>KEFENA.COM</Link>
                        </Menu.Item>
                        <Menu.Item as="a" onClick={() => navigate("/")}>Home</Menu.Item>
                        <Menu.Item active as="a" onClick={() => navigate("/openproducts/1")}>Products</Menu.Item>
                        <Menu.Item as="a" onClick={() => navigate("/history")}>Our History</Menu.Item>
                        <Menu.Item as="a" onClick={() => navigate("/dealer")}>Our Dealers</Menu.Item>
                        <Menu.Item as="a">Recommended</Menu.Item>
                        <Menu.Item position='right'>
                            <SearchComponent />
                        </Menu.Item>
                    </Container>
                </Menu>
        
            </Segment>
        )
}
export default Headers