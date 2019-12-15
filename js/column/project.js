import React from "react";

export default class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const this_item = document.getElementById(this.props.id);
        const item_info = this_item.getBoundingClientRect();
        const full_height = item_info.height + 25; //25 is the margin on top and below the div (not taken into account by getBoundingClientRect())
        let i = item_info.top;
        const thread_id = setInterval(() => {
            this_item.style.position = "absolute";
            if (i + full_height + 25 < 0) { // If the element is out of view
                const parent_item = document.getElementById(this.props.parentId);
                const parent_item_info = parent_item.getBoundingClientRect();
                console.log(parent_item_info.bottom);
                i = parent_item_info.bottom - full_height;
            }
            this_item.style.top = i + "px";
            i--;
        }, 16);
    }

    render() {
        return (
            <div className={"project_div " + this.props.language + "_project"} id={this.props.id}>
                <h3 className="project_title">{this.props.title}</h3><h3 className="project_github">Github</h3>
                <p className="project_text">{this.props.projectText}</p>
                <p className="read_more">Read more...</p>
            </div>
        )
    }
}