import React from "react"
import ReactDOM from "react-dom"
import TopBanner from "./top_banner.js";
import LeftBanner from "./left_banner.js";
import ToggleAnimations from "./toggle_animation.js";
import TitleText from "./title_text/title_text";
import Column from "./column/column";

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

const textInfo = {
    languages: ["Javascript HTML5/CSS3", "Go", "Rust", "C/C++", "Python", "Solidity"],
    socials: ["Github", "LinkedIn", "Email"],
    programmingStacks: ["React.js", "MongoDB", "ES6", "Socket.io", "NodeJS", "Express", "JQuery", "Tokio-rs", "Blockchain"],
    devopsStacks: ["Linux (Redhat, Debian)", "Kubernetes", "Docker", "Digital Ocean", "AWS (Amazon Web Service)"]
};

ReactDOM.render(
    <TitleText textInfo={textInfo} />,
    document.getElementById("title_text_div")
);

ReactDOM.render(
      <Column/>,
      document.getElementById("column_div")
);