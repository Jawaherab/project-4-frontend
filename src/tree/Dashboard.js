import React, {Component} from 'react';
import {All} from './api'
import {Link, withRouter} from 'react-router-dom';
import Commentindex from '../comments/Commentindex'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import './Dashboard.scss'


// import MapContainer from " ./MapContainer"
class Dashboard extends Component{

    state={
        trees:[]
    }
  
    componentDidMount(){
        const user = this.props.user
        console.log(user)
        All(user)
        .then(response => {
           console.log(response)
           this.setState({
               trees:  response.data.trees
           })
        })
        .catch((error) => console.log(error)) 
     }

     

        render(){
            
            return(
                
                
                <div className="container"> 
                     {/* <Commentindex user={this.props.user}/> */}
                       {this.state.trees.map((tree, index) => (
                   <div key={index} className="card1">
                        <Link to={`/trees/${tree._id}`}><h1>{tree.name}</h1></Link>
                        <Link to={`/trees/${tree._id}`}> <img src={tree.imageUrl} alt=""/></Link>
                   </div>
                   ))}


                </div>

                
            )
        }
    
}



export default withRouter(Dashboard)