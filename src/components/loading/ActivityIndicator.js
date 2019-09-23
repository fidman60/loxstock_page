import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default class ActivityIndicator extends React.PureComponent {

    render() {
        return (
            <div style={styles.loadingSection}>
                <div>
                    <HashLoader
                        sizeUnit={"px"}
                        size={100}
                        color={'#123abc'}
                    />
                </div>
            </div>
        );
    }

}

const styles = {
    loadingSection: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
};