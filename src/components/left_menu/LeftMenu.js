import React from "react";
import "../../styles/left_menu.css";
import MenuItem from "./MenuItem";
import MenuListItem from "./MenuListItem";
import {categories, subCategories} from "../../service/data";

export default class LeftMenu extends React.Component {

    constructor(props){
        super(props);

        const stateCategories = this._initialCategories();
        const stateSubCategories = this._getSubCategories(1);

        this.state = {
            categories: stateCategories,
            subCategories: stateSubCategories,
        };
    }

    _initialCategories = () => {
        return categories.map((item, index) => {
            return {
                ...item,
                isActive: index === 0,
            }
        });
    };

    _getSubCategories = (idCategory) => {
        const subcategories = subCategories.find(item => item.category_id === idCategory);
        if (subcategories) return subcategories.items.map((item, index) => ({...item, isActive: index === 0}));
        return [];
    };

    _onClickItem = (item, e) => {
        const {categories} = this.state;
        const currentActiveItem = categories.find(item => item.isActive);
        if (item.id !== currentActiveItem.id) {
            const newCategories = categories.map(catItem => {
                if (catItem.id === currentActiveItem.id) {
                    return {
                        ...catItem,
                        isActive: false
                    }
                } else if (item.id === catItem.id){
                    return {
                        ...catItem,
                        isActive: true
                    }
                }

                return catItem;
            });

            this.setState({
                categories: newCategories,
                subCategories: this._getSubCategories(item.id),
            });
        }
    };

    render() {
        const {categories, subCategories} = this.state;

        return (
            <div id="leftMenuContainer">
                <div id="leftMenuHeader">
                    <a href="#">
                        <img src="/assets/images/logo.png" alt="logo"/>
                    </a>
                </div>
                <div id="leftMenuBody">
                    <div>
                        <div>
                            {categories.map(item => (
                                <MenuItem
                                    key={item.id}
                                    icon={item.icon}
                                    isActive={item.isActive}
                                    onClick={this._onClickItem.bind(this, item)}
                                />
                            ))}
                        </div>
                        <div>
                            <MenuItem icon="icon7.png"/>
                            <MenuItem icon="icon8.png"/>
                        </div>
                    </div>
                    <div>
                        {
                            subCategories.map(item => (
                                <MenuListItem
                                    icon={item.icon}
                                    label={item.label}
                                    isActive={item.isActive}
                                    key={item.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }

}