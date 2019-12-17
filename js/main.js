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

const languages = ["All", "Javascript", "Solidity", "Rust", "C++", "Go"];
ReactDOM.render(
    <ToggleAnimations languages={languages}/>,
    document.getElementById("toggle_animation_div")
);

const textInfo = {
    languages: ["Javascript HTML5/CSS3", "Go", "Rust", "C/C++", "Python", "Solidity"],
    socials: [{name: "Github", link: 'https://github.com/Dylan-Kerler'}, {name: "LinkedIn", link: 'https://www.linkedin.com/in/dylan-kerler-54837619a/'}, {name: "Email"}],
    programmingStacks: ["React.js", "MongoDB", "ES6", "Socket.io", "NodeJS", "Express", "JQuery", "Tokio-rs", "Blockchain"],
    devopsStacks: ["Linux (Redhat, Debian)", "Kubernetes", "Docker", "Digital Ocean", "AWS (Amazon Web Service)"]
};

ReactDOM.render(
    <TitleText textInfo={textInfo} />,
    document.getElementById("title_text_div")
);

const projects = [
    {
        language: "javascript",
        title: "Binance-MM-JS",
        github: 'https://github.com/Dylan-Kerler/Binance-MM-JS',
        projectText: "(2019) Javascript market making bot for Binance to maintain a fixed spread and fixed portfolio exposure for any given period"
    },
    {
        language: "javascript",
        title: "Eostrex Website",
        github: 'https://github.com/Dylan-Kerler/Eostrex-Site',
        projectText: "(2018) Website for a decentralised exchange, employing structured and organisation-based programming concepts - built with ReactJS, NodeJS, Express, Socket.io and Flux"
    },
    {
        language: "cplusplus",
        title: "Eostrex Smart Contract",
        github: 'https://github.com/Dylan-Kerler/Eostrex-Smart-Contract',
        projectText: "(2018) Smart contract for on-chain decentralised exchange for eosio.tokens, using C++ and several of the native EOSIO libraries"
    },
    {
        language: "go",
        title: "GoP2PB2B",
        github: 'https://github.com/Dylan-Kerler/go_p2pb2b',
        projectText: "(2019) Go wrapper around p2pb2b cryptocurrency exchange api endpoints, using cryptography libraries and net/http package",
    },
    {
        language: "rust",
        title: "Rustcoin",
        github: 'https://github.com/Dylan-Kerler/rustcoin',
        projectText: "(2018) Utxo based cryptocurrency written from scratch using sha256 hashing algorithm and ecdsa signing on secp256k1 elliptic curve, written in Rust",
    },
    {
        language: "javascript",
        title: "Portfolio Website",
        github: 'https://github.com/Dylan-Kerler/PortfolioWebsite',
        projectText: "(2019) The website you are currently using (yes, this one) , was made with ReactJS, Redux, NodeJS and Express",
    },
    {
        language: "solidity",
        title: "Ethex",
        github: 'https://github.com/Dylan-Kerler/Ethex',
        projectText: "(2017) On-chain decentralised exchange written in Solidity for Ethereum, using a custom matching engine and efficient programming concepts",
    },
    {
        language: "rust",
        title: "Advent of Code",
        github: 'https://github.com/Dylan-Kerler/AdventOfCode',
        projectText: "(2019) My solutions to the advent of code 2019 problems, written in Rust; Utilising multi-threading as well as other modern programming paradigms",
    },
    {
        language: "javascript",
        title: "Eoswalletpro",
        github: 'https://github.com/Dylan-Kerler/eoswalletpro',
        projectText: "(2017) Javascript based native eos wallet for storing eos and eosio.token tokens, built using JQuery"
    }
];

ReactDOM.render(
      <Column projects={projects}/>,
      document.getElementById("column_div")
);