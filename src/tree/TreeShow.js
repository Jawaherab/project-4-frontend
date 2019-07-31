import React, {Component} from 'react' 
import {show} from './api' 
import {withRouter} from 'react-router-dom';
import { Route , Link } from 'react-router-dom'
import './tree.scss'
import Commentindex from '../comments/Commentindex'


class TreeShow extends Component {
    state = { 
        tree: {}
    }
   
    componentDidMount() {
  
        const user = this.props.user
        const treeId = this.props.treeId
        show(user, treeId) 
        .then(res => { 
            console.log(res)
            const showTree = res.data.tree
             this.setState({
                    tree: showTree
                })
            }
        )    
    }

    render() {
        console.log('tree', this.state.tree._id)
        return ( 
            <div> 
            <div className="card3">  
             
  
                {/* {this.state.tree._id ? (
                    <React.Fragment> */}

                        <h2 className="text-monospace">{this.state.tree.name}</h2> 
                        <img className="img7" src={this.state.tree.imageUrl} alt={this.state.tree.name}/>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> Type of Trees :  {this.state.tree.type} </li>
                            <li class="list-group-item"> Address : {this.state.tree.address} </li>
                            <li class="list-group-item"> Number of Trees :  {this.state.tree.numbers} </li>
                        </ul>
                        
                    {/* </React.Fragment>
                ) : <React.Fragment />} */}
{/*              
          <Route  exact path='/comments' render={(props) => (
            <Commentindex treeId={props.match.params.id}/>
          )}/> */}

          <div className="comment">  <Commentindex user={this.props.user} treeId={this.state.tree._id} /> </div>
  
            </div>

        

         

            </div>
        )
    }
} 

export default withRouter(TreeShow)