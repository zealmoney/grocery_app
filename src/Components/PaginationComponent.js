import { useEffect, useState } from "react"
import { Grid, Pagination } from "semantic-ui-react"
import getProducts from "./Db"
import { useNavigate, useParams } from "react-router-dom"

const PaginationComponent = () => {
    const [activePage, setactivePage] = useState()
    const [pageItem, setPageItem] = useState(0)
    const navigate = useNavigate()
    const params = useParams()
    let count = 0

    useEffect(() => {
        setactivePage(params.pageno)
        getTotalPages()
    }, [])

    const handlePaginationChange = (activePage) => {
        setactivePage(activePage)
        navigate("/openproducts/" + activePage)
    }
    const getTotalPages = () => {
        getProducts().map((product) => {
          ++count
        })
        let item = Math.ceil(count/4)
        setPageItem(item)
    }
    return(
         <Grid.Row>
                <Grid.Column>
                    <Pagination
                        onPageChange={(e, {activePage}) => handlePaginationChange(activePage)}
                        totalPages={pageItem}
                        activePage={activePage}                 
                    />

                </Grid.Column>
            </Grid.Row>
    )
}
export default PaginationComponent