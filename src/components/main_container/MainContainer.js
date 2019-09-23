import React from "react";
import Header from "./Header";
import "../../styles/default.css";
import MatrialItem from "./MatrialItem";
import {materials} from "../../service/data";
import FocusedMaterial from "./FocusedMaterial";
import LoadingPage from "../loading/LoadingPage";

export default class MainContainer extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
            materialsList: this._initialMaterialList(),
            isLoading: false,
            focusedMaterial: null,
            pageLoaded: false,
        }
    }

    _initialMaterialList = () => {
        return materials.map(item => ({
            ...item,
            isActive: false,
        }));
    };

    _onPageLoaded = () => {
        this.setState({
            pageLoaded: true,
        });
    };

    _onMaterialItemClick = (material, e) => {
        const {materialsList, isLoading} = this.state;

        if (isLoading) return;

        this.setState({
            isLoading: true,
        });

        const newMaterialsItems = materialsList.map(item => {
            if (item.id === material.id) return {...item, isActive: true};
            return {
                ...item,
                isActive: false
            }
        });

        setTimeout(() => {
            this.setState({
                materialsList: newMaterialsItems,
                focusedMaterial: material,
                isLoading: false,
            });
        }, 4000);
    };

    _getMaterialItem = item => (
        <MatrialItem
            material={item}
            key={item.id}
            onClick={this._onMaterialItemClick.bind(this, item)}
        />
    );

    render() {

        const {materialsList, isLoading, focusedMaterial, pageLoaded} = this.state;

        return (
            <div style={styles.main_container}>
                <Header/>
                <div style={styles.container} className="container">
                    {pageLoaded ?
                        <div className="row">
                            <div style={styles.materialItems} className="col-8">
                                {materialsList.map(this._getMaterialItem)}
                            </div>
                            <div style={styles.focusedMaterialSection} className="col">
                                <FocusedMaterial
                                    isLoading={isLoading}
                                    material={focusedMaterial}
                                />
                            </div>
                        </div>
                        :
                        <LoadingPage onPageLoaded={this._onPageLoaded}/>
                    }
                </div>
            </div>
        );
    }

}

const styles = {
    main_container: {
        marginLeft: 295,
        height: "100vh",
        flexDirection: "column"
    },
    container: {
        backgroundColor: "#f8f9fd",
        height: "100%"
    },
    materialItems: {
        padding: 10
    },
    focusedMaterialSection: {
        padding: 10
    },
};