import React from "react"
import { checkedList, checkFun, filter, lowerStr } from "./utile.js"
import './style/checkbox-list.css'
import { SearchBox } from "./components/SearchBox.js";

export default class CheckboxList extends React.Component {

    constructor(props) {
        super(props)
        const { options, filterdigit } = props;
        this.state = {
            options: options,
            masterOptions: options,
            filter: '',
            filterdigit: filterdigit,
        }
    }

    componentDidUpdate(prevProps) {
        const { options, filterdigit } = this.props;
        const { filter } = this.state;

        if (prevProps.options !== options) {
            this.setState({
                options: options,
                filterdigit: filterdigit,
                masterOptions: options,
            }, () => {
                if (filter.length > filterdigit) {
                    this.handelSearch(filter);
                }
            });
        }
    }

    handleSet = (object, selectedIndex, expresion) => {
        let { selectoption, handlechange } = this.props;
        var selectedList = [...selectoption] || [];
        if (selectedIndex === -1) {
            selectedList.push(object);
        }
        else {
            if (expresion) {
                selectedList.splice(selectedIndex, 1);
            }
            else {
                selectedList[selectedIndex] = object;
            }
        }
        if (typeof handlechange === "function") {
            handlechange(selectedList, object, expresion);
        }

    }

    handelSearch(e) {
        const value = lowerStr(e.target.value);

        const { masterOptions, filterdigit } = this.state;
        const { filterhidden, optionlabel } = this.props;

        let filtered = masterOptions;
        if (value.length > filterdigit) {
            filtered = filter(value, masterOptions, filterhidden, optionlabel);
        }
        this.setState({ options: filtered, filter: value });
    }

    render() {
        const { options } = this.state;
        let {
            selectoption,
            optionlabel,
            optionvalue,
            placeholder,
            checkboxColor,
            controlboxClass,
            containerClass,
            inputsearchClass,
            filter
        } = this.props;
        let selectedListLength = selectoption.length;

        return <div className={controlboxClass}>
            {!!filter && <SearchBox
                placeholder={placeholder}
                inputsearchClass={inputsearchClass}
                onChange={(e) => this.handelSearch(e)} />}
            <div className={`container-checkbox ${containerClass ? containerClass : ""}`}>
                {options.map((e, i) => {
                    let optionvalueStr = checkFun(optionvalue, e, "value"), index = checkedList(e, selectoption, optionvalue, selectedListLength)
                    let checked = index != -1
                    return <div className="checkbox-wrapper" key={i}>
                        <input className="inp-cbx" id={`cbx-${optionvalueStr}`} type="checkbox"
                            checked={checked}
                            onChange={() => this.handleSet(e, index, checked)}
                        />
                        <label className="cbx" htmlFor={`cbx-${optionvalueStr}`}>
                            <span style={checked ? {
                                backgroundColor: checkboxColor,
                                borderColor: checkboxColor
                            } : {}}>
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            <span>{checkFun(optionlabel, e, "label")}</span>
                        </label>
                    </div>
                }
                )}
            </div>
        </div>;
    }
}

CheckboxList.defaultProps = {
    options: [],
    selectoption: [],
    filter: true,
    filterhidden: false,
    placeholder: 'Search...',
    filterdigit: 2,
    controlboxClass: "",
    containerClass: "",
    inputsearchClass: "",
    checkboxColor: "#506EEC"
};