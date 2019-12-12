import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { purple, red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
            color: purple[500],
            transform: 'translateX(7px)',
            '& + $track': {
                opacity: 1,
                backgroundColor: red[400],
                borderColor: red[200],
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
        backgroundColor: purple[300],
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