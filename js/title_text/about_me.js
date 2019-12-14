import React from "react";

const LanguageList = (props) => {
    const arrLanguages = props.languages;
    const languages = arrLanguages.map((lang, index) => <li key={index}>{lang}</li>);
    return (
        <ul>
            {languages}
        </ul>
    );
};

const SocialList = (props) => {
    const arrSocials = props.socials;
    const socials = arrSocials.map((social, index) => <li key={index}>{social}</li>);
    return (
        <ul>
            {socials}
        </ul>
    );
};

const TechStacks = (props) => {
    const arrTechStacks = props.techStacks;
    const techStacks = arrTechStacks.map((stack, index) => {
        if (index < arrTechStacks.length - 1) {
            return (<b>{stack}, </b>)
        }  else {
            return (<b>{stack}</b>)
        };
    });
    return (
        <p>{techStacks}</p>
    );
};

class CloseButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <h3 onClick={this.props.toggleClose} className="close_button_about_me">Close</h3>
        )
    }
}

export default class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div className="full_size_div" onClick={this.props.toggleClose}>
                <div className="about_me_div" onClick={(e) => e.stopPropagation()}>
                    <CloseButton toggleClose={this.props.toggleClose}/>
                    <div className="about_me_text_div">
                        <h1>About Me</h1>
                        <div className="about_me_sub_text">
                            <div className="languages_div">
                                <h2>Languages</h2>
                                <LanguageList languages={this.props.textInfo.languages}/>
                            </div>

                            <div className="social_div">
                                <div>
                                    <h2>Social</h2>
                                    <SocialList socials={this.props.textInfo.socials}/>
                                </div>
                            </div>

                            <div className="tech_stack_div">
                                <h2>Tech Stacks, Frameworks and Libraries</h2>
                                <TechStacks techStacks={this.props.textInfo.programmingStacks}/>
                                <TechStacks techStacks={this.props.textInfo.devopsStacks}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}