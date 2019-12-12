import React from "react"

export default class TitleText extends React.Component {
    render () {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <div style={{height: "100%", width: "100%"}} className={"title_component_div"}>
                    <h2 className={"hello"}>Hello there! I am,</h2>
                    <h1 className={"name"}>Dylan Kerler</h1>
                    <div className={"summary_div"}>
                        <h3 className={"blurb_title"}>Frontend (Javascript/React) engineer with 3 years experience</h3>
                        <h3 className={"blurb_main"}>I have worked on several products and projects using a variety of technologies,
                            such as React, NodeJS, MongoDB, Rust, Go and many more...</h3>
                    </div>
                    <button className={"want_to_hire_button"}>Want to hire me?</button>
                    <button className={"about_button"}>About</button>
                </div>
            </div>
        )
    }
}