import React from "react"
import Project from "./project"

export default class Column extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(prevState => {
                return {show: true}
            });
        }, 5000)

    }

    popElement() {
    }

    render() {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <div className={"column_transparent_div"} >
                    <div className={"wrapper"} id={"wrapper_1"}>
                        <Project language={"javascript"} title={"Eostrex Website"} projectText={"Built using a bunch of tools such as React.js, MongoDB, Express and others"} parentId={"wrapper_1"} id={"1"}/>
                        <Project language={"javascript"} title={"Eostrex Website"} projectText={"Built using a bunch of tools such as React.js, MongoDB, Express and others"} parentId={"wrapper_1"} id={"2"}/>
                    </div>
                </div>
            </div>
        )
    }
}