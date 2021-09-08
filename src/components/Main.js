import React, {Component} from "react";

import Navbar from "./Navbar.js";
import WatchedTracker from "./WatchedTracker.js";
import Footer from "./Footer.js";
import SearchBar from "./SearchBar.js";
import ContactPage from "./Contact.js"

class Main extends Component {

    render() {

        return(
            <div className="" >
                <div>
                    <h1>Testing Main</h1>
                    <Navbar />
                        <SearchBar />
                </div>

                <div>
                    <h1>Tracker goes here!</h1>
                    <WatchedTracker />
                </div>

                <div>
                    <h1>Footer</h1>
                    <Footer />
                </div>

                <div>
                    <h1>Contact</h1>
                    <ContactPage />
                </div>
            </div>
        )
    }
}

export default Main;