import React from "react";
import Sidebar from "./Sidebar";
import Voucher from './Voucher';
import Cards from './Cards';
import NestedRouter from './NestedRouter'; 
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {routes} from './SidebarRoutes';

class App extends React.Component{
  constructor(props){
      super(props);

      this.state = {

      }
      this.redirect=this.redirect.bind(this)
  }

  // componentDidMount(){
  //     this.props.dispatch(test())
  // }
  
  redirect(path){
      this.props.history.push({
          pathname : path
      })
  }

  render(){
    
      return(
          <React.Fragment>
           <div style={{display:'table', width:'100%'}}>
              <div style={{display:'table-cell', width:'30%'}}>
                  <Sidebar routes={routes}/>
                  
              </div>
              <div style={{display:'table-cell', width:'70%'}}>
                  <NestedRouter routes = {this.props.routes} />
              </div>
              </div>
          </React.Fragment>
      )
  }
}

// const App=()=> {
//   return (
//     <div style={{display:'table', width:'100%'}}>
//       <div style={{display:'table-cell', width:'100%'}}><Sidebar routes={routes} /></div>
      
//      {/* <div style={{display:'table-cell', width:'70%', paddingTop: '70'}}> */}
        
//      {/* <Router>
//        <Switch>
//           <Route exact={true} path='/' component={Voucher}></Route>
//           <Route path='/cards' component={Cards}></Route>
//        </Switch>
//      </Router> */}
   
//             {/* <NestedRouter
//               routes={routes}
//             /> */}
          
//      {/* </div> */}
//     </div>
//   )
// }

export default App