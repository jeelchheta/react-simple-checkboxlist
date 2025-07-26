export function checkFun(optionvalue, object, key) {
    return typeof optionvalue == "function" ? optionvalue(object) : object[key];
}

export function objectValues(item) {
    return Object.values(item).map(obj => (typeof (obj) === 'object' && obj !== null ? objectValues(obj) : obj));
}

export function lowerStr(value) {
    return value?.toString()?.toLowerCase();
}

export function filter(search, constant, filterHidden, optionlabel) {
    return constant.filter((item) => {
        const value = filterHidden ? objectValues(item) : [checkFun(optionlabel, item, "label")];
        const searchSplit = search.split(' ').filter(filterItem => filterItem !== '');
        return searchSplit.filter(filterItem => lowerStr(value).indexOf(filterItem.trim()) !== -1).length === searchSplit.length;
    })
};


export function checkedList(optionObj, selectoption, optionvalue, selectedListLength) {
    let index = -1, optionvalueStr = checkFun(optionvalue, optionObj, "value")
    for (let ind = 0; ind < selectedListLength; ind++) {
        if (optionvalueStr === checkFun(optionvalue, selectoption[ind], "value")) {
            index = ind;
            break;
        }
    }
    return index 
}