import React from "react"
import AboutMe from "./about_me";
import EmailBox from "./email_box";

export default class TitleText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAboutMeClicked: false,
            isEmailBoxClicked: false,
        };

        this.toggleAboutMe = this.toggleAboutMe.bind(this);
        this.toggleEmailBox = this.toggleEmailBox.bind(this);
    }

    toggleAboutMe() {
        this.setState((prevState) => {
            this.setState({
                isAboutMeClicked: !prevState.isAboutMeClicked,
            });
        })
    }

    toggleEmailBox() {
        this.setState(prevState => {
            this.setState({
                isEmailBoxClicked: !prevState.isEmailBoxClicked
            });
        })
    }

    render () {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <div className={"title_component_div"}>
                    <h2 className={"hello"}>Hello there! I am,</h2>
                    <h1 className={"name"}>Dylan Kerler</h1>
                    <div className={"summary_div"}>
                        <h3 className={"blurb_title"}>Frontend (Javascript/React) engineer with <b>3 years experience</b></h3>
                        <h3 className={"blurb_main"}>I have created a variety of software products, using technologies such as;</h3>
                        <h3 className={"blurb_list"}>React.js, NodeJS, Kubernetes, Jenkins, Rust and many more…</h3>
                    </div>
                    <button className={"want_to_hire_button"} onClick={this.toggleEmailBox}>Want to hire me?</button>
                    <button onClick={this.toggleAboutMe} className={"about_button"}>About</button>
                </div>
                { this.state.isAboutMeClicked ?
                    <AboutMe textInfo={this.props.textInfo} toggleClose={this.toggleAboutMe} toggleEmailClose={this.toggleEmailBox}/>
                        : null }
                { this.state.isEmailBoxClicked ?
                    <EmailBox toggleClose={this.toggleEmailBox}/> :
                        null }
            </div>
        )
    }
}