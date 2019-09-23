import React from "react"
import {ProgressBar, Step} from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "../../styles/custom_progress_bar.css";
import PropTypes from 'prop-types';

export default class CustomProgressBar extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
            percent: 0
        };
    }

    componentDidMount() {
        this._progressForward(1);
    }

    _progressForward = (step) => {
        setTimeout(() => {
            this.setState({
                percent: 100,
            });
        }, 2000);
        setTimeout(() => this.props.onPageLoaded(), 4000);
    };

    render() {
        const {percent} = this.state;

        return (
            <ProgressBar
                percent={percent}
                unfilledBackground="#f6f6f6"
                filledBackground="#8dd27b"
                height={3}
            >
                <Step transition="scale">
                    {({ accomplished }) => (
                        <div className="stepCircle"
                             style={{
                                 backgroundColor: accomplished ? "#6dbf5b":"#f6f6f6",
                                 filter: `grayscale(${accomplished ? 0 : 80}%)`
                             }}
                        >
                            <img src="/assets/icons/right_flech.png" alt="icon"/>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <div className="stepCircle"
                             style={{
                                 backgroundColor: accomplished ? "#6dbf5b":"#f6f6f6",
                                 filter: `grayscale(${accomplished ? 0 : 80}%)`
                             }}
                        >
                            <img src="/assets/icons/right_flech.png" alt="icon"/>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <div className="stepCircle"
                             style={{
                                 backgroundColor: accomplished ? "#6dbf5b":"#f6f6f6",
                                 filter: `grayscale(${accomplished ? 0 : 80}%)`
                             }}
                        >
                            <img src="/assets/icons/right_flech.png" alt="icon"/>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <div className="stepCircle"
                             style={{
                                 backgroundColor: accomplished ? "#6dbf5b":"#f6f6f6",
                                 filter: `grayscale(${accomplished ? 0 : 80}%)`
                             }}
                        >
                            <img src="/assets/icons/right_flech.png" alt="icon"/>
                        </div>
                    )}
                </Step>

            </ProgressBar>
        );
    }

}

const styles = {
    stepCircle: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width: 16,
        height: 16,
        borderRadius: 8,
    },
};

CustomProgressBar.propTypes = {
    onPageLoaded: PropTypes.func.isRequired,
};