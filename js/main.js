import React from "react"
import ReactDOM from "react-dom"
import TopBanner from "./top_banner.js";
import LeftBanner from "./left_banner.js";
import ToggleAnimations from "./toggle_animation.js";
import TitleText from "./title_text";

ReactDOM.render(
    <TopBanner/>,
    document.getElementById("top_grey_banner_div")
);

ReactDOM.render(
    <LeftBanner/>,
    document.getElementById("left_grey_banner_div")
);

ReactDOM.render(
    <ToggleAnimations/>,
    document.getElementById("toggle_animation_div")
);

ReactDOM.render(
    <TitleText/>,
    document.getElementById("title_text_div")
);