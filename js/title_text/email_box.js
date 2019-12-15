import React from "react";

class CopiedToClipboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="copied_to_clipboard_div">
                    <p>Copied to clipboard</p>
                </div>
        )
    }
}

export default class EmailBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCopiedToClipboard: false
        };

        this.handleCopyClick = this.handleCopyClick.bind(this);
    }

    handleCopyClick(event) {
        //0 Because "email_text" className only returns one element (the one we want)
        const email = event.currentTarget.getElementsByClassName("email_text")[0].innerText;
        navigator.clipboard.writeText(email);

        setTimeout(() => {
            this.setState({
                showCopiedToClipboard: false
            });
        }, 2000);

        this.setState({
            showCopiedToClipboard: true
        });
    }

    render() {
        return (
            <div className="full_size_div_email" onClick={this.props.toggleClose} style={{height: "100%", width: "100%"}}>
                <div className="email_div" onClick={(e) => e.stopPropagation()}>
                    <strong className="close_email_button" onClick={this.props.toggleClose}>Close</strong>
                    <h1>Email</h1>
                    <div className="email_text_div" onClick={this.handleCopyClick}>
                        <p className="email_text">dylankerler@gmail.com</p>
                        <p className="copy_email_text">Copy</p>
                    </div>
                    <p className="email_sub_text">Send me an email and I will get back to you within a few hours</p>
                    {this.state.showCopiedToClipboard ? <CopiedToClipboard/> : null}
                </div>
            </div>
        )
    }
}