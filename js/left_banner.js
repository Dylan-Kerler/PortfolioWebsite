import React from "react";

export default class LeftBanner extends React.Component {
     render() {
         return (
             <div style={{height: "100%", width: "100%"}}>
                 <svg style={{height: "100%", width: "100%"}} viewBox={"0 0 100 100"} preserveAspectRatio={"none"}>
                     <polygon id={"left_banner_polygon"} points={"0 0 100 0 100 80 0 90"} fill={"red"}/>
                 </svg>
             </div>
         )
     }
}