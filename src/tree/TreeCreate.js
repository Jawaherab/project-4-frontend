import React,{Component} from 'react'
import {create} from './api'
import {withRouter } from 'react-router-dom'
class TreeCreate extends Component{
    state = {
        dataForm:{
          name:'',
          imageUrl:'',
          type:'',
          address: '',
          numbers:'',
          lat: this.props.match.params.lat,
          lng: this.props.match.params.lng
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
            dataForm: newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newTree = this.state.dataForm
        const user = this.props.user
        create(user, newTree)
        .then(() => this.props.history.push('/trees'))
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.dataForm.name}/>
                <label>Image</label>
                <input  onChange={this.handleChange} type="text" name="imageUrl" value={this.state.dataForm.imageUrl}/>
                <label>Type</label>
                <input  onChange={this.handleChange} type="text" name="type" value={this.state.dataForm.type}/>
                <label>Address</label>
                <input  onChange={this.handleChange} type="text" name="address" value={this.state.dataForm.address}/>
                <label>Number Of Trees</label>
                <input onChange={this.handleChange} type="number" name="numbers" value={this.state.dataForm.numbers}/>
                    
                    <p>lat: {this.props.match.params.lat}</p>
                    <p>lng: {this.props.match.params.lng}</p>
                <button type="submit">Create</button>
               
            </form>
        )
    }
}



export default withRouter(TreeCreate)