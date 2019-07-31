import React, {Component} from 'react';
import {index , destroy} from './api'
import {Link} from 'react-router-dom';
import  './tree.scss'
// import SimpleMapPage from " ./MapContainer"

class TreeIndex extends Component{

    state={
        trees:[]
    }
  
    componentDidMount(){
        const user = this.props.user
        console.log(user)
        index(user)
        .then(response => {
           console.log(response)
           this.setState({
               trees:  response.data.trees
           })
        })
        .catch((error) => console.log(error)) 
     }

     destroy(treeId){
        const user = this.props.user
        destroy(user, treeId)
        .then(() => alert('deleted')) 
        .then(() => {
           const newTrees = this.state.trees.filter((tree) => tree._id != treeId)
            this.setState({
                trees:newTrees
            })
        })
        .catch((error) => console.log(error))
    }

        render(){
            // const mapStyles = {
            //     width: '100%',
            //     height: '100%',
            //   };
            return(
                <div className="backg"> 
                <div className="tree"> 
         
                       {this.state.trees.map((tree,index) => (
                   <div key={index} className="card2">
                        <Link to={`/trees/${tree._id}`}><h1>{tree.name}</h1></Link>
                        <Link to={`/trees/${tree._id}`}> <img className="img5"src={tree.imageUrl} alt=""/></Link>
                        <h3 onClick={() => this.destroy(tree._id)}>Delete</h3>
                        {/* <Link to={`/trees/${tree._id}/edit`}><button>Edit</button></Link> */}
                   </div>
                   ))}

                {/* <SimpleMapPage/> */}
    
                </div>

                <div className="pic">

                </div>
                </div>
            )
        }
    
}



export default TreeIndex
