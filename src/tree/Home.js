
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img1 from './3.png'
import vid from './Nature.mp4'
import treeved from './3.mp4'

import viid from './intro.mp4';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import './Home.scss'



class Home extends Component {

  render(){
    return(
      <div>
    <div className="main">
    <h1> Save Nature is a community of people who are taking action to raise total green spaces through planting trees around all cities, thats will lead to improved air quality and reduced temperatures in the city. </h1>
    <img class="img1" src={img1}  />
    </div>

    <div className="ved">
    <video autoPlay  >
                  <source src={vid} type="video/mp4" />
     </video> 
    </div>



    <div>
            <div className='home-route'> 
             
              <div className ='home-bg'> 

              {/* < video autoPlay loop muted >
                  <source src={viid} type="video/mp4" />
                </video>  */}
          
                <div className="card" >
                    <p> Trees can both help make our air healthier and our cities more verdant 
                      and livable. Globally, tens of millions of lives could be saved if cities 
                      invest an average of $4 per resident annually in planting urban trees.</p>
                  </div>
                  <div className="ved2">
                      <video autoPlay loop muted >
                                  <source src={treeved} type="video/mp4" />
                    </video> 
                    </div>
               

              </div>
              
            </div>

            <MDBContainer className="images">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="http://live.saudigazette.com.sa/uploads/images/2019/03/19/1192739.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="http://live.saudigazette.com.sa/uploads/images/2019/03/19/1192740.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="http://live.saudigazette.com.sa/uploads/images/2019/03/19/1192741.jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
           </div>

           
    
    {/* <div className="main"> 
    <div> 

     < video autoPlay loop muted >
                  <source src={viid} type="video/mp4" />
                </video> 
      <div className="card" >
        <p> Trees can both help make our air healthier and our cities more verdant 
          and livable. Globally, tens of millions of lives could be saved if cities 
          invest an average of $4 per resident annually in planting urban trees.</p>
      </div>

      <div className="ved2">
      <video autoPlay loop muted >
                  <source src={treeved} type="video/mp4" />
     </video> 

    </div>
    
     </div>
      
     <MDBContainer className="images">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="http://live.saudigazette.com.sa/uploads/images/2019/03/19/1192739.jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="http://live.saudigazette.com.sa/uploads/images/2019/03/19/1192740.jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="http://live.saudigazette.com.sa/uploads/images/2019/03/19/1192741.jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
   
      
    </div> */}

</div>

    )
  }


}

export default Home







