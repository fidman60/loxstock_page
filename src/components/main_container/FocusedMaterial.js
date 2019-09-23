import React from "react";
import "../../styles/focused_material_section.css";
import ActivityIndicator from "../loading/ActivityIndicator";
import PropTypes from 'prop-types';

const defaultMaterial = {
    id: -1,
    code_proprietaire: '-',
    code_societe: '-',
    no_serie: "-",
    cat: "-",
    classe: "-",
    description: '-',
    nom_agence: '-',
    marque: "-",
    modele: "-",
    type_parc: "-",
    commentaire_argent: '',
    explications_ra: '',
    explications_rtr: '',
};

export default class FocusedMaterial extends React.Component{

    constructor(props){
        super(props);

        let materialItem = props.material;
        if (!materialItem) materialItem = defaultMaterial;

        this.state = {
            commentaire_argent: materialItem.commentaire_argent,
            explications_ra: materialItem.explications_ra,
            explications_rtr: materialItem.explications_rtr,
        };
    }

    _onChangeCommentaireArgent = (e) => {this.setState({commentaire_argent: e.target.value})};
    _onChangeExplicationsRa = (e) => {this.setState({explications_ra: e.target.value})};
    _onChangeExplicationsRtr = (e) => {this.setState({explications_rtr: e.target.value})};

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (!nextProps.isLoading && this.props.isLoading) {
            const {material} = nextProps;
            this.setState({
                commentaire_argent: material.commentaire_argent ? material.commentaire_argent : "",
                explications_ra: material.explications_ra ? material.explications_ra : "",
                explications_rtr: material.explications_rtr ? material.explications_rtr:"",
            })
        }
    }

    render() {
        const {commentaire_argent, explications_ra, explications_rtr} = this.state;
        const {material, isLoading} = this.props;

        let materialItem = material;
        if (!materialItem) materialItem = defaultMaterial;

        return (
            <div style={styles.focusedMaterialItem}>
                {isLoading && <ActivityIndicator/>}
                <span style={styles.materialModel}>{`${materialItem.marque} / ${materialItem.modele}`}</span>
                <p style={styles.description}>Laser Eye Surgery Risks Flap Dislocation After Lasik Choosing The Right Boutique Hotel For You</p>
                <dl style={styles.dlMaterialDetails}>
                    <dt>N° de série:</dt>
                    <dd style={styles.dd}>{materialItem.no_serie}</dd>
                    <dt>Code société:</dt>
                    <dd style={styles.dd}>{materialItem.code_proprietaire}</dd>
                    <dt>Cat:</dt>
                    <dd style={styles.dd}>{materialItem.cat}</dd>
                    <dt>Classe:</dt>
                    <dd style={styles.dd}>{materialItem.classe}</dd>
                    <dt>Marque:</dt>
                    <dd style={styles.dd}>{materialItem.marque}</dd>
                    <dt>Modèle:</dt>
                    <dd style={styles.dd}>{materialItem.modele}</dd>
                    <dt>Type de parc:</dt>
                    <dd style={styles.dd}>{materialItem.type_parc}</dd>
                    <dt>Code de dépot:</dt>
                    <dd style={styles.dd}>-</dd>
                </dl>
                <dl id="profileSelectDl">
                    <dt>Profile:</dt>
                    <dd>
                        <select id="profileSelect">
                            <option>RTN</option>
                            <option>Option2</option>
                            <option>Option3</option>
                        </select>
                    </dd>
                </dl>
                <div className="editTextSection">
                    <dl>
                        <dt>Commentaire d'argent</dt>
                        <dd className="ddIcon"><i className="material-icons">create</i></dd>
                    </dl>
                    <textarea style={styles.textarea} value={commentaire_argent} onChange={this._onChangeCommentaireArgent} />
                </div>
                <div className="editTextSection">
                    <dl>
                        <dt>Explications RA</dt>
                        <dd className="ddIcon"><i className="material-icons">create</i></dd>
                    </dl>
                    <textarea style={styles.textarea} value={explications_ra} onChange={this._onChangeExplicationsRa}/>
                </div>
                <div className="editTextSection">
                    <dl>
                        <dt>Explications RTR</dt>
                        <dd className="ddIcon"><i className="material-icons">create</i></dd>
                    </dl>
                    <textarea style={styles.textarea} value={explications_rtr} onChange={this._onChangeExplicationsRtr}/>
                </div>
                <button disabled={!material ? "disabled":""} className="btn btn-success float-right">Modifier</button>
                <span className="clearfix" />
            </div>
        );
    }

}

FocusedMaterial.propTypes = {
    material: PropTypes.object,
    isLoading: PropTypes.bool,
};

FocusedMaterial.defaultProps = {
    isLoading: false,
};

const styles = {
    focusedMaterialItem: {
        backgroundColor: "#edeef0",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        position: "relative",
    },
    textarea: {
        width: "100%",
        height: 60,
        resize: "none",
        padding: 5,
        backgroundColor: "#f2f3f4",
        border: "none"
    },
    materialModel: {
        color: "#c2414b",
        fontWeight: "bold",
        fontSize: 17,
    },
    description: {
        color: "#66739a",
        fontSize: 14,
        marginTop: 15,
        marginBottom: 10
    },
    dd: {
        color: "#192446",
        fontWeight: "bold"
    },
    dlMaterialDetails: {
        marginBottom: 45,
    }
};