import React from "react"
import '../style/checkbox-list.css'

export default class CheckboxList extends React.Component {

    handelSet = (object, selectedIndex, expresion) => {
        let { selectoption } = this.props
        var selectedList = selectoption || []
        if (selectedIndex === -1) {
            selectedList.push(object)
        }
        else {
            if (expresion) {
                selectedList.splice(selectedIndex, 1)
            }
            else {
                selectedList[selectedIndex] = object
            }
        }
        if (typeof this.props.handelchange === "function") {
            this.props.handelchange(selectedList, object, expresion)
        }

    }
    render() {
        let { options,
            selectoption,
            optionlabel,
            optionvalue,
            controlboxClass,
            containerClass
        } = this.props
        let checkboxList = options || []
        let selectedList = selectoption || []
        let selectedListLength = selectedList.length
        let key = optionvalue || "value"
        let label = optionlabel || "label"
        return React.createElement('div', { className: `container-box ${containerClass ? containerClass : ""}` },
            checkboxList.map((e, i) => {
                var index = -1
                for (var ind = 0; ind < selectedListLength; ind++) {
                    if (e[key] === selectedList[ind][key]) {
                        index = ind;
                        break;
                    }
                }
                return React.createElement('div',
                    { key: e.value + i, className: `control-box ${controlboxClass ? controlboxClass : ""}`, onClick: () => this.handelSet(e, index, index !== -1) },
                    React.createElement('input', { className: "checkbox-contoller", type: "checkbox", checked: index !== -1, readOnly: true }),
                    React.createElement('div', { className: "set-over-div" }),
                    React.createElement('div', { className: "checkbox-label" }, e[label])
                )
            }
            )
        )
    }
}