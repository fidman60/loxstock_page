import React from "react";
import PropTypes from 'prop-types';

export default class MenuItem extends React.PureComponent {

    render() {
        const {icon, isActive, onClick} = this.props;
        return (
            <div
                className={`leftMenuItem ${isActive && "activeLeftMenuItem"}`}
                onClick={onClick}
            >
                <img src={`/assets/icons/${icon}`} alt="icon"/>
            </div>
        );
    }

}

MenuItem.propTypes = {
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};

MenuItem.defaultProps = {
    isActive: false,
};