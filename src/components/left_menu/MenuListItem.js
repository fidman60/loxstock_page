import React from "react";
import PropTypes from 'prop-types';

export default class MenuListItem extends React.Component {

    render() {
        const {icon, isActive, label} = this.props;
        return (
            <div className="leftMenuListItem">
                <div>
                    <div className="listItemIconContainer">
                        <img src={`/assets/icons/${icon}`} alt="icon"/>
                    </div>
                    <div className="listItemLabel" style={{color: isActive ? "#df3449":""}}>
                        {label}
                    </div>
                </div>
            </div>
        );
    }

}

MenuListItem.propTypes = {
    icon: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    label: PropTypes.string.isRequired
};

MenuListItem.defaultProps = {
    isActive: false,
};