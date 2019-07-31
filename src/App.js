import React, { Component } from 'react'
import './App.scss'
import { Route , Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import TreeIndex from './tree/TreeIndex'
import TreeShow from './tree/TreeShow'
import TreeCreate from './tree/TreeCreate'
import TreeEdit from './tree/TreeEdit'
import Dashboard from './tree/Dashboard'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import MapContainer from './tree/MapContainer'
import Home from './tree/Home'
// import GMapDemo from './tree/GMapDemo'
// import Map from './tree/Map'


import vid from './intro.mp4';

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }
  

  render () {


    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {/* {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))} */}
        <main >
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />

          <AuthenticatedRoute  user={user} exact path='/trees' render={() => (
            <TreeIndex user={user}/>
          )}/>
          <Route  exact path='/trees/:id' render={(props) => (
            <TreeShow treeId={props.match.params.id} user={user}/>
          )}/>

          <AuthenticatedRoute  user={user} path='/create/:lat/:lng' render={() => (
            <TreeCreate user={user} /> 
          )}/>  
          
            <AuthenticatedRoute  user={user} path='/trees/:id/edit' render={() => (
            <TreeEdit user={user} />
          )}/> 
            <Route  path='/dashboard' render={() => (
            <Dashboard />
          )}/> 

           <AuthenticatedRoute user={user}  path='/map' render={() => (
            <MapContainer  user={user}  />
          )}/> 


          {/* <AuthenticatedRoute  user={user} path='/map' render={() => (
            <GMapDemo user={user} />
          )}/>  */}
          {/* <GMapDemo /> */}
    
        

<Route exact path='/' render={()=>{
          return (
            <div>
            <div className='home-route'> 
            {/* <Header/> */}
        
             
              <div className ='home-bg'> 
            
                <video autoPlay loop muted >
                  <source src={vid} type="video/mp4" />
                </video> 
                {/* <div className="logo"> <Logo /> </div>   */}
                <div className="logo" > <h1> SAVE NATURE </h1> </div>  
               
                <Link className = 'virtical' to='/sign-up'> Join Us </Link> 
                <Link className = 'virtical2' to='/dashboard'> Read More </Link> 
             
               
                <div className="indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                 
               </div>

              </div>
              
            </div>
              <Home />  
             

              </div>

            
          
          )
        }}  />

        {/* <Route path='/trees' component={Treeindex}/> */}

    
        </main>


        
        {/* <footer>
          <h1> hello</h1>
        </footer> */}

       
    
              
      </React.Fragment>
      
    )
  }
}

export default App
