import React from 'react';
import "../../styles/select_form.css";

export default class FormSelect extends React.PureComponent {

    render() {
        return (
            <div id="formSelect">
                <select className="form-control" name="">
                    <option value="">Sélectionner...</option>
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                </select>
            </div>
        );
    }

}