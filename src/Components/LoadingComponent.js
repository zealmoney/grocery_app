import { Dimmer, Loader, Segment } from "semantic-ui-react"

const LoadingComponent = () => {

    return(
        <Segment vertical>
            <Dimmer active>
                <Loader size="large">Loading</Loader>
            </Dimmer>

        </Segment>
    )
}
export default LoadingComponent