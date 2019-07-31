import React, {Component} from 'react' 
import {Link, withRouter} from 'react-router-dom'
import {index, destroy} from './api.js' 
import Commentcreate from "../comments/Commentcreate"



class Commentindex extends Component{
    state ={ 
        comments: []
    }
    updateComments = () => {
        // console.log(this.props.match.params.id)
        console.log(this.props.user)
        index(this.props.user, this.props.match.params.id)
        
        .then(response => {
            this.setState ({
                comments: response.data.comments
            })
        })
        .catch((error) => console.log(error))
    }
    componentDidMount() {
        this.updateComments()
    }  

    destroy(commentId) {
       const user = this.props.user 
         destroy(user, commentId) 
         .then( () => alert('Deleted'))
         .then(() => {
             const newComment = this.state.comments.filter((comment) => comment._id != commentId)
             this.setState({ 
                 comments:newComment 
             })
         }) 
         .catch((error) => console.log(error))
    }  
     
    render () {
        return ( 
            <div> 
              <Commentcreate updateComments={this.updateComments} treeId={this.props.treeId} alert={this.props.alert} user={this.props.user} />

            {this.state.comments.map((comment, index) => (
              <div key={index}> 
                {/* <Link to={`/comments/${comment._id}`} ><h2>Comment:</h2> </Link> */}
                <div className="comments">
                <img src={comment.image} />
                <h3 class="list-group-item">  {comment.comment}</h3>
                </div>
                
               <button onClick={ () => this.destroy(comment._id)}> Delete </button>
               {/* <Link to={`/comments/${comment._id}/edit`} > <button> Edit Comment</button> </Link> */}
              </div> 
            ))} 

            
          </div>
        )
    }
}
export default withRouter(Commentindex)




// import React, {Component} from 'react';
// import {index , destroy} from './api'
// import {Link} from 'react-router-dom';
// import Commentcreate from '../comments/Commentcreate'
// // import SimpleMapPage from " ./MapContainer"

// class Commentindex extends Component{

//     state={
//         comments:[]
//     }
  
//     updateComments = () => {
//         console.log('tree id in index', this.props.treeId)
//         index(this.props.user, this.props.treeId)
        
//         .then(response => {
//             this.setState ({
//                 comments: response.data.comments
//             })
//         })
//         .catch((error) => console.log(error))
//     }
//     componentDidMount() {
//         this.updateComments()
//     }  

//     destroy(commentId) {
//         const user = this.props.user 
//           destroy(user, commentId) 
//           .then( () => alert('Deleted'))
//           .then(() => {
//               const newComment = this.state.comments.filter((comment) => comment._id != commentId)
//               this.setState({ 
//                   comments:newComment 
//               })
//           }) 
//           .catch((error) => console.log(error))
 
//         }

//         render(){
//             // const mapStyles = {
//             //     width: '100%',
//             //     height: '100%',
//             //   };
//             return(
                
//                 <div> 
                    
//                  <Commentcreate updateComments={this.updateComments} treeId={this.props.treeId} user={this.props.user} />
  
//                        {this.state.comments.map((comment,index) => (
//                    <div key={index}>
//                         <Link to={`/comments/${comment._id}`}><h1>{comment.comment}</h1></Link>
//                         <Link to={`/comments/${comment._id}`}> <img src={comment.image} alt=""/></Link>
//                         <button onClick={ () => this.destroy(comment._id)}> Delete Comment</button>
                    
//                    </div>
//                    ))}

//                 {/* <SimpleMapPage/> */}

//                 </div>
//             )
//         }
    
// }



// export default Commentindex
