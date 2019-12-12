import React from "react"

export default class TitleText extends React.Component {
    render () {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <div className={"title_component_div"}>
                    <h2 className={"hello"}>Hello there! I am,</h2>
                    <h1 className={"name"}>Dylan Kerler</h1>
                    <div className={"summary_div"}>
                        <h3 className={"blurb_title"}>Frontend (Javascript/React) engineer with <b>3 years experience</b></h3>
                        <h3 className={"blurb_main"}>I have created a variety of software products using technologies such as;</h3>
                        <h3 className={"blurb_list"}>React.js, NodeJS, Kubernetes, Jenkins, Rust and many more…</h3>
                    </div>
                    <button className={"want_to_hire_button"}>Want to hire me?</button>
                    <button className={"about_button"}>About</button>
                </div>
            </div>
        )
    }
}