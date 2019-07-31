import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'
import './com.scss'
class Commentcreate extends Component{
    state = {
        dataForm:{
            comment:"",
            image:''
            
        }
    }
    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm) 
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })   
    } 
       
    handleSubmit = (event) => {
        event.preventDefault();
        const newComment = this.state.dataForm
        newComment.tree = this.props.treeId
        const user = this.props.user
        create(user,newComment, this.props.treeId)
        .then(() => alert('created'))
        .then(() => this.props.updateComments())
        .catch((error) => console.log(error)) 
    } 

    render(){
        return(
            // <form onSubmit={this.handleSubmit}>
            //     <label>Comment</label>
            //     <input onChange={this.handleChange} type="text" name="comment" value={this.state.dataForm.comment}/>
            //     <label>image</label>
            //     <input  onChange={this.handleChange} type="text" name="image" value={this.state.dataForm.image}/>
            //     <button type="submit">Comment</button>
            // </form>
             <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="formGroupExampleInput">Comment</label>
              <input type="text" class="form-control" id="formGroupExampleInput" onChange={this.handleChange} type="text" name="comment" value={this.state.dataForm.comment}/>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Image</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" onChange={this.handleChange} type="text" name="image" value={this.state.dataForm.image}/>
              <button type="submit">Comment</button>
            </div>
          </form>
        )
    }
}



export default withRouter(Commentcreate)





// import React,{Component} from 'react'
// import {create} from './api'
// import {withRouter } from 'react-router-dom'


// class CommentCreate extends Component{
//     state = {
//         dataForm:{
//             comment:'',
//             image:''
//           }
//       }
//     handleChange = (event) => {
//         //get the name of input 
//         const name = event.target.name;
//         // get the value of input
//         const value = event.target.value;
//         const newForm = Object.assign(this.state.dataForm)
//         newForm[name] = value;
//         this.setState({
//             dataForm: newForm
//         })
//     } 

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const newComment = this.state.dataForm
//         newComment.tree = this.props.treeId
//         const user = this.props.user
//         create(user, newComment, this.props.treeId)
//         .then(() => this.props.updateComments())
//         .catch((error) => console.log(error))
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>Comment</label>
//                 <input onChange={this.handleChange} type="text" name="comment" value={this.state.dataForm.comment}/>
//                 <label>Image</label>
//                 <input  onChange={this.handleChange} type="text" name="image" value={this.state.dataForm.image}/>
              
//                 <button type="submit">Create</button>
               
//             </form>
//         )
//     }
// }



// export default withRouter(CommentCreate)