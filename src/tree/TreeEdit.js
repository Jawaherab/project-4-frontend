import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

class TreeEdit extends Component{
    state = {
        dataForm:{
          name:'',
          imageUrl:'',
          type:'',
          address: '',
          numbers: ''
        }
      }

    componentDidMount(){
        const user = this.props.user;
        const treeId = this.props.match.params.id;
        show(user,treeId)
        .then((response) => {
            const tree = response.data.tree
            this.setState({
                dataForm:tree
            })
        }) 
        .catch(error => console.log(error))
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


    handleSubmit = (event) =>{
        event.preventDefault();
        const user = this.props.user;
        const treeId = this.props.match.params.id;
        const updateTree = this.state.dataForm;
        console.log(this.props)
        update(user,updateTree,treeId)
        .then(() => this.props.history.push(`/trees/${treeId}`))
        .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props)
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
            <input  onChange={this.handleChange} type="number" name="numbers" value={this.state.dataForm.numbers}/>



            <button type="submit">Save</button>
        </form>
        )
    }
}



export default withRouter(TreeEdit)