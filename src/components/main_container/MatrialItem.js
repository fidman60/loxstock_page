import React from 'react';
import "../../styles/materiel_item.css";
import PropTypes from 'prop-types';

export default class MatrialItem extends React.PureComponent {

    render() {
        const {material, onClick} = this.props;

        return (
            <div onClick={onClick} className="materialItem" style={{backgroundColor: material.isActive ? "#edeef0":"white"}}>
                <span className="materialTitle">KAESER / M20</span>
                <div className="dlSection">
                    <div className="firstDlSection">
                        <dl>
                            <dt>Code équipement:</dt>
                            <dd>{material.no_serie}</dd>
                            <dt>Cat-Classe:</dt>
                            <dd>{`${material.cat}-${material.classe}`}</dd>
                            <dt>Nom d'agence:</dt>
                            <dd>{material.nom_agence ? material.nom_agence : "-"}</dd>
                            <dt>Type de parc:</dt>
                            <dd>{material.type_parc}</dd>
                        </dl>
                    </div>
                    <div className="secondDlSection">
                        <dl>
                            <dt>Description:</dt>
                            <dd>{material.description ? material.description : "-"}</dd>
                            <dt>Code propriétaire:</dt>
                            <dd>{material.code_proprietaire}</dd>
                            <dt>Code société:</dt>
                            <dd>{material.code_societe}</dd>
                        </dl>
                    </div>
                </div>
                <span className="infoItem">Sans explication</span>
            </div>
        );
    }

}

MatrialItem.propTypes = {
    material: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};