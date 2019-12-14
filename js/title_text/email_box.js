import React from "react";

class CopiedToClipboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: false
            };
        }, 3000);
    }

    render() {
        return (
            this.state.show ?
                    <div className="copied_to_clipboard_div">
                        <p>Copied to clipboard</p>
                    </div>
            : null
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

    handleCopyClick() {
        this.setState({
            showCopiedToClipboard: true
        });
    }

    render() {
        return (
            <div className="full_size_div_email" style={{height: "100%", width: "100%"}}>
                <div className="email_div">
                    <strong className="close_email_button" onClick={this.props.toggleClose}>Close</strong>
                    <h1>Email</h1>
                    <div className="email_text_div" onClick={this.handleCopyClick}>
                        <p className="email_text">dylankerler@gmail.com</p>
                        <p className="copy_email_text">Copy</p>
                    </div>
                    <p className="email_sub_text">Feel free to send me an email; I will get back to you within a few hours</p>
                    {this.state.showCopiedToClipboard ? <CopiedToClipboard/> : null}
                </div>
            </div>
        )
    }
}