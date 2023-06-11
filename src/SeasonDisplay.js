import './SeasonDisplay.css';
import React from "react";
import 'semantic-ui-css/semantic.min.css'
import Spinner from './Spinner';
const seasonConfig = {
    summer: {
        text: 'lets hit the beach',
        iconeName: 'sun ',
        season: 'summer'
    },
    winter: {
        text: 'Brr, it freezing',
        iconeName: 'snowflake ',
        season: 'winter'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9)
        return lat > 0 ? 'summer' : 'winter';
    else {
        return lat > 0 ? 'winter' : 'summer';
    }

}


const SeasonDisplay = (props) => {

    const season = getSeason(props.latitude, new Date().getMonth())
    const { text, iconeName } = seasonConfig[season]
    if (props.errorMessage && !props.latitude)
        return <div>Error : {props.errorMessage}</div>

    if (!props.errorMessage && props.latitude)
        return (
            <div className={'season-display ' + season}>
                <i className={'icone-left ' + 'massive ' + iconeName + 'icon'}></i>
                <h1>latitude : {text}</h1 >
                <i className={'icone-right ' + 'massive ' + iconeName + 'icon'}></i>
            </div>)

    return <Spinner message = 'Please accept location request ❤️'/>;
}

export default SeasonDisplay;