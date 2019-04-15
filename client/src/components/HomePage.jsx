import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component{
    render() {
        return(
            <div className={"App"}>
                <div className={"App__Form"}>
                    <button className="FormField__Button mr-20">
                        <Link to={"/sign-form"}>
                            Sign In
                        </Link>
                    </button>
                    <button className="FormField__Button mr-20">
                        <Link to={"/campaign-form"}>
                            Create Form
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default HomePage;