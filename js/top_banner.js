import React from "react";

export default class TopBanner extends React.Component {
    render() {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <svg style={{height: "100%", width: "100%"}} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon id="top_banner_polygon" points="0 0 100 0 100 100 0 100" fill="red" />
                </svg>
            </div>
        )
    }
}
