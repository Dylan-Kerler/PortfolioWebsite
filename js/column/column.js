import React from "react"
import Project from "./project"
import {Store, toggle_animation} from "../redux_store.js"

export default class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: Store.getState().language
        };

        this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
    }

    componentDidMount() {
        /*  make the height auto, then set the height to a fixed pixel length,
            so that the coordinates of the bottom don't change when the elements are moving
         */
        const wrapper = document.getElementById("wrapper_1");
        const wrapper_info = wrapper.getBoundingClientRect();
        wrapper.style.height = wrapper_info.height + "px";

        Store.subscribe(() => {
            this.handleStoreUpdate();
        });
    }

    handleMouse() {
        Store.dispatch(toggle_animation());
    }

    handleStoreUpdate() {
        const language = Store.getState().language;
        this.setState({ language });
    }

    render() {
        //const filter_projects = this.props.projects.filter(project => project.language === this.state.language || this.state.language === "all");
        const projects_list = this.props.projects.map((project, index) => {
            const showAnimations = this.state.language === "all";
            return (
                <Project project={project} id={index.toString()} parentId={"wrapper_1"} showAnimations={showAnimations} key={index}/>
            )
        });
        return (
            <div style={{height: "100%", width: "100%"}}>
                <div className={"column_transparent_div"} onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}>
                    <div className={"wrapper"} id={"wrapper_1"}>
                        {projects_list}
                    </div>
                </div>
            </div>
        )
    }
}