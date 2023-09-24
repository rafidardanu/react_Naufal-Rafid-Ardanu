// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './router/Router'

function App() {
  return (
    <Router />
  );
}

export default App

// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Route, Switch } from "react-router";
// import CreateProduct from './pages/CreateProduct.jsx';
// import LandingPage from './pages/LandingPage.jsx';

// function App(){
//     return(
//         <BrowserRouter>
//             <Switch>
//                 <Route path="/" exact component={LandingPage} />
//                 <Route path="/CProduct" exact component={CreateProduct} />
//             </Switch>
//         </BrowserRouter>
//     );
// }
// export default App;