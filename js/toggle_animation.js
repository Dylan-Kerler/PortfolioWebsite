import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

const ToggleSwitch = withStyles({
    root: {
        width: 20,
        height: 12,
        padding: 0,
    },
    switchBase: {
        padding: 1,
        color: purple[300],
        '&$checked': {
            color: "#252528",
            transform: 'translateX(8px)',
            '& + $track': {
                opacity: 1,
                backgroundColor: "#7DFF88",
                borderColor: "#7DFF88",
            },
        },
    },
    thumb: {
        width: 10,
        height: 10,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${purple[300][500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: "#252528",
    },
    checked: {}
})(Switch);

export default class ToggleAnimations extends React.Component {
    render() {
        return (
            <div style={{height: "100%", width: "100%"}}>
                <div className={"toggle_animation_grid_container"}>
                    <span className={"toggle_animation_span"}>
                        <p className={"toggle_animation_text"}>Toggle animation</p>
                        <ToggleSwitch className={"switch"}/>
                    </span>
                </div>
            </div>
        )
    }
}