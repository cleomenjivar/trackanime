import React, { Component } from "react";
import "./Navbar.css";
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";


class Navbar extends Component {

    render(){
        
        return(
          <Router>
            <div className="nav-container">
                <div className="nav-links">
                    <p>Testing the Navbar</p>
                    <div className="navbar-link"><Link to="/">HOME</Link></div>

                    <div><Link to="/WatchedTracker">WATCHED TRACKER
                    </Link></div>

                    <div><Link to="/Contact">CONTACT
                    </Link></div>

                    <div><Link to="WeAppreciate">WE APPRECIATE IT!
                    </Link></div>
                </div>
            </div>
          </Router>
        )
    }
}

export default Navbar;

//Testing another way to do the navigation bar

// import Home from "./Main";
// import WatchedTracker from "./WatchedTracker";
// import Contact from "./Contact";
// import WeAppreciate from "./WeAppreciate";

// class Navbar extends Component {
//     render() {
//       return (
//         <Router>
//             <div>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <ul className="navbar-nav mr-auto">
//                 <li><Link to={'/'} className="nav-link"> HOME </Link></li>
//                 <li><Link to={'/WatchedTracker'} className="nav-link">WATCHED TRACKER</Link></li>
//                 <li><Link to={'/Contact'} className="nav-link">CONTACT</Link></li>
//                 <li><Link to={'/WeAppreciate'} className="nav-link">WE APPRECIATE IT!</Link></li>
//                 </ul>
//             </nav>
//                 {/* <hr />
//                 <Switch>
//                     <Route exact path='/' component={Home} />
//                     <Route path='/WatchedTracker' component={WatchedTracker} />
//                     <Route path='/Contact' component={Contact} />
//                     <Route path='/WeAppreciate' component={WeAppreciate} />
//                 </Switch> */}
//             </div>
//         </Router>
//       );
//     }
//   }

// export default Navbar;