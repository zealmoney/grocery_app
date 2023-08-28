import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Card, Grid, Header, Segment, Image, Message, List } from 'semantic-ui-react'

const CarouselComponent = () => {

    return(
        <Carousel
        
          infinite
          autoPlaySpeed={1000}
          responsive={{
            desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 3,
                paritialVisibilityGutter: 40
            },
            mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                paritialVisibilityGutter: 30
            },
            tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1,
                paritialVisibilityGutter: 30
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable        
        
        
        >
            <div>           
                <Segment textAlign='center' raised>
                    <Image src="/images/products/p1.jpeg" />
                    <Message size='mini' color='yellow'>
                        <Message.Header  style={{color: '#000'}}>Elliot Baker</Message.Header>
                        <Message.Content>
                            <p  style={{color: '#000'}}>Please find the description below</p>
                        </Message.Content>
                    </Message>

                </Segment>
           
            </div>
            <div>
                <Segment textAlign='center' raised>
                    <Image src="/images/products/p2.jpeg" />
                    <Message size='mini' color='yellow'>
                        <Message.Header  style={{color: '#000'}}>Elliot Baker</Message.Header>
                        <Message.Content>
                            <p  style={{color: '#000'}}>Please find the description below</p>
                        </Message.Content>
                    </Message>
                </Segment>
               
            </div>
            <div>
                <Segment textAlign='center' raised>
                    <Image src="/images/products/p3.jpeg" />
                    <Message size='mini' color='yellow'>
                        <Message.Header  style={{color: '#000'}}>Elliot Baker</Message.Header>
                        <Message.Content>
                            <p  style={{color: '#000'}}>Please find the description below</p>
                        </Message.Content>
                    </Message>
                </Segment>
          
            </div>
            <div>
                <Segment textAlign='center' raised>
                    <Image src="/images/products/p4.jpeg" />
                    <Message size='mini' color='yellow'>
                        <Message.Header style={{color: '#000'}}>Elliot Baker</Message.Header>
                        <Message.Content>
                            <p style={{color: '#000'}}>Please find the description below</p>
                        </Message.Content>
                    </Message>
                </Segment>
            
            </div>
        
          
        </Carousel>
    )


}
export default CarouselComponent