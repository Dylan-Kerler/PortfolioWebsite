import React from "react";

class FeaturedProject extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.open("https://www.cryptopricefeeder.com");
    }

    render() {
        return (
            <div className={"featured_project_div"} onClick={this.handleClick}>
                <h3>Featured Project: </h3>
                <div className={"javascript" + "_project" + " " + "featured_project"}>
                    <h3 className="project_title">{"CryptoPriceFeeder"}</h3><h3 className="project_github"><a>Website</a></h3>
                    <p className="project_text">A website that displays and detects anomalous price data among various cryptocurrencies</p>
                    <p className="read_more">Go to website...</p>
                </div>
            </div>
        )
    }
}

export default FeaturedProject;