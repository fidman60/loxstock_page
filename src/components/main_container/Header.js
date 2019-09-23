import React from "react";
import SearchInput from "../form/SearchInput";
import "../../styles/header.css";
import FormSelect from "../form/FormSelect";
import Img from 'react-image';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/core';

const override = css`
    display: block;
    margin: auto;
    border-color: red;
`;

export default class Header extends React.PureComponent {

    render() {
        return (
            <div id="header">
                <div style={styles.input}>
                    <FormSelect/>
                </div>
                <div style={styles.input}>
                    <SearchInput/>
                </div>
                <div>
                    <a href="#">
                        <img style={styles.icon} src="/assets/icons/marker_icon.png" alt="marker_icon"/>
                    </a>
                    <a href="#" style={styles.notificationIcon}>
                        <div style={styles.circleNotification} />
                        <img style={styles.icon} src="/assets/icons/notification_icon.png" alt="notification_icon"/>
                    </a>
                </div>
                <div style={styles.profileSection}>
                    <div style={styles.profilePictureContainer}>
                        <Img
                            src="https://a.imge.to/2019/09/21/vI0uR4.png"
                            loader={<ClipLoader
                                css={override}
                                sizeUnit={"px"}
                                size={12}
                                color={'#123abc'}
                            />}
                        />
                    </div>
                    <a className="dropdown-toggle" data-toggle="dropdown" href="" />
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Paramètres</a>
                        <a className="dropdown-item" href="#">Déconnexion</a>
                    </div>
                </div>
            </div>
        );
    }

}

const styles = {
    profilePictureContainer: {
        position: "relative",
        width: 27,
        height: 27,
        marginRight: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        marginRight: 25,
    },
    input: {
        marginRight: 40,
    },
    notificationIcon: {
        display: "inline-block",
        position: "relative"
    },
    circleNotification: {
        borderRadius: 4,
        width: 8,
        height: 8,
        backgroundColor: "red",
        position: "absolute",
        left: 13
    },
    profileSection: {
        display: "flex"
    }
};