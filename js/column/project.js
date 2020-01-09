import React from "react";
import {Store} from "../redux_store.js";

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnimations: this.props.showAnimations,
            language: Store.getState().language,
            threadId: null,
            animationUnsubscribe: null
        };

        this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
        this.initialiseAnimations = this.initialiseAnimations.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.showAnimations) {
            const this_item = document.getElementById(this.props.id);
            // Get rid of "absolute styling" if we are showing static projects and NOT animating
            this_item.style.top = "";
            this_item.style.position = "";
        }
    }

    componentDidMount() {
        if (this.state.showAnimations) {
            const animationUnsubscribe = Store.subscribe(() => {
                // Only listen to animation state changes if we are animating
                this.handleStoreUpdate();
            });
            const threadId = this.initialiseAnimations();
            this.setState({ threadId, animationUnsubscribe })
        }
    }

    componentWillUnmount() {
        if (this.state.showAnimations) {
            clearInterval(this.state.threadId);
            this.state.animationUnsubscribe();
        }
    }

    handleStoreUpdate() {
        const { showAnimations } = Store.getState();
        this.setState({ showAnimations });
    }

    handleClick() {
        window.open(this.props.project.github)
    }

    initialiseAnimations() {
        const this_item = document.getElementById(this.props.id);
        const item_info = this_item.getBoundingClientRect();
        const full_height = item_info.height + 25; //25 is the margin on top and below the div (not taken into account by getBoundingClientRect())
        let i = item_info.top;
        return setInterval(() => { /// Return the thread id
            if (this.state.showAnimations) {
                this_item.style.position = "absolute";
                const parent_item = document.getElementById(this.props.parentId);
                const parent_item_info = parent_item.getBoundingClientRect();
                if (i + full_height + 25 < parent_item_info.y) { // If the element is higher than the top of its container
                    i = parent_item_info.bottom - full_height;
                }
                this_item.style.top = i + "px";
                i--;
            }
        }, 16);
    }

    render() {
        return (
            this.props.project.language === Store.getState().language || Store.getState().language === "all" ?
                <div className={"project_div " + this.props.project.language + "_project" + " "} id={this.props.id} onClick={this.handleClick}>
                    <h3 className="project_title">{this.props.project.title}</h3><h3 className="project_github"><a href={this.props.project.github}>Github</a></h3>
                    <p className="project_text">{this.props.project.projectText}</p>
                    <p className="read_more">Read more...</p>
                </div> :
                    <div id={this.props.id}></div>
        )
    }
}