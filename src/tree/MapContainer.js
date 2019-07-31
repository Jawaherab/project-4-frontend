import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker,Callout } from 'google-maps-react';
import {  Link } from 'react-router-dom'
import {index} from './api'
import CurrentLocation from './Map';
import treeImage from "./1.png";




export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}, 
    treeId:'',
    trees: []  //For cord [{lat:3333,lng:3333}.{}.{}]
   
  };
  componentDidMount = () => {
    
    
      index(this.props.user)
      .then(
        res => {
          // let trees = res.data.trees.map(tree => {
          //   return {
          //     lat: tree.lat,
          //     lng: tree.lng
          //   }
            
          // })
          let trees = res.data.trees
          // console.log("trrreees")
            // console.log(trees)
          this.setState({
            trees: trees
          })
        }
      )
      .catch(error => console.error(error))
     
  }
  

  onMarkerClick = (props, marker, e) =>
  {
    console.log(marker)
  // return(<InfoWindow title="ddss" />)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      treeId:marker.treeId
    })};

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

   



  

  render() {
    const markers= this.state.markers
    return (
     
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}>

    
        <Marker
         onClick={this.onMarkerClick} name={`create`}  
        //  icon={treeImage}
        /> 

        {this.state.trees.map((tree,index) => {

        return(
        // <Map>

              <Marker
              onClick={this.onMarkerClick}
              key={index} 
              position={{lat: tree.lat, lng: tree.lng}}  
              name="hello" 
              treeId={tree._id}
              />
    
        // </Map>
            
          
        )
     
           
       
        })}

<InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >

         <a href={`#/trees/${this.state.treeId}`} > We need trees here </a>   
          {/* <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div> */}
        </InfoWindow>
{/*         
        {this.state.trees.map((tree,index) => (
     
     <InfoWindow key={index} position={{lat: tree.lat, lng: tree.lng}}  label={tree.name} /> 

 ))} */}
  
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAwGNgKqZss5lNSJTifdhPcRtzPv3EH5sM'
})(MapContainer);