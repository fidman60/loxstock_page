import React from "react";
import "../../styles/search_input.css";

export default class SearchInput extends React.PureComponent {

    render() {
        return (
            <div id="searchInput">
                <div className="form-group has-search">
                    <i className="material-icons form-control-feedback">search</i>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
            </div>
        );
    }

}