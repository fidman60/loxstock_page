import React from "react";
import "../../styles/loading_page.css";
import CustomProgressBar from "./CustomProgressBar";
import PropTypes from 'prop-types';

export default class LoadingPage extends React.Component {

    render() {
        const {onPageLoaded} = this.props;

        return (
            <div id="loadingPageContainer">
                <div id="firstBar">
                    <img src="/assets/icons/add.png" alt="add_icon"/>
                </div>
                <div id="secondBar">
                    <div>
                        <div className="animated-background">
                            <div className="secondBarMenuItem">
                                <img src="/assets/icons/bar_icon1.png"/>
                            </div>
                            <div className="secondBarMenuItem">
                                <img src="/assets/icons/bar_icon2.png"/>
                            </div>
                            <div className="secondBarMenuItem">
                                <img src="/assets/icons/bar_icon3.png"/>
                            </div>
                            <div className="secondBarMenuItem lastSecondBarMenuItem">
                                <img src="/assets/icons/bar_icon3.png"/>
                            </div>
                            <div className="secondBarMenuItem lastSecondBarMenuItem">
                                <img src="/assets/icons/bar_icon4.png"/>
                            </div>
                        </div>
                        <div id="emptyBarBtn" />
                    </div>
                    <div>
                        <img src="/assets/icons/bar_icon5.png"/>
                    </div>
                </div>
                <div id="loadingPageBlocksSection">
                    <div className="loadingPageBlockItem animated-background">
                        <div className="closeBlockItem" />
                    </div>
                    <div className="loadingPageBlockItem animated-background">
                        <div className="closeBlockItem" />
                    </div>
                    <div className="loadingPageBlockItem animated-background">
                        <div className="closeBlockItem" />
                    </div>
                    <div className="loadingPageBlockItem animated-background">
                        <div className="closeBlockItem" />
                    </div>
                </div>
                <div id="loadingBox">
                    <div>
                        <div/>
                    </div>
                    <div style={{padding: 5}}>
                        <CustomProgressBar onPageLoaded={onPageLoaded}/>
                    </div>
                    <div>
                        <i className="material-icons float-right">create</i>
                        <span className="clearfix"/>
                        <textarea id="LoadingBoxTextArea" />
                    </div>
                </div>
            </div>
        );
    }

}

LoadingPage.propTypes = {
    onPageLoaded: PropTypes.func.isRequired,
};