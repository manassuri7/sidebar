import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './components/RouteConfig';
import Router from './components/Router';
import './index.css';
var root = document.getElementById('root')

if(root)
	ReactDOM.render(
	<Router routes = {Routes}/>,
	root);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Voucher from "./Voucher";
// import Notfound from './notFound';
// import * as serviceWorker from './serviceWorker';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

// // const routing = (
// //   <Router>
// //     <div>
// //       <Switch>
// //         <Route exact path="/" component={Voucher} />
// //         <Route component={Notfound} />
// //       </Switch>
// //     </div>
// //   </Router>
// // )

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );


// serviceWorker.unregister();
