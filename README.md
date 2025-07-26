# react-simple-checkboxlist

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/jeelchheta/react-simple-checkboxlist/blob/main/LICENSE)

A bootstrap-style react component for checkbox list

This is a simple react component that takes a meta data, translates it into a checkbox list and provides selected values when user changes selection and user can change there key and value of meta modal using hook api and  can change css styles etc...


## Install

```sh
npm install react-simple-checkboxlist
```

## Usage

```javascript
import React, { useState,useEffect } from 'react'
import CheckboxList from 'react-simple-checkboxlist'

const data = [
        {value: 'apple', label: 'Apple'},
        {value: 'orange', label: 'Orange'},
        {value: 'banana', label: 'Banana'} 
    ];

const Demo = () => {

  const [fruits, setFruits] = useState([])
  const [selectedfruits, setSelectionFruits] = useState([])

  useEffect(() => {
   setFruits(data)
  }, [])

  const handelSelection = (selectedfruits) => {
        setSelectionFruits(selectedfruits)
  }

  return (
   <CheckboxList 
    options={fruits}
    selectoption={selectedfruits}
    handlechange={handelSelection}
    optionlabel={row => row.label}
    optionvalue={row => row.value}
    filterHidden={true}
   />
  )
}

ReactDOM.render(<Demo />, document.body)
```

# list of props
| Prop              | Description                                                    | Type               | Default           |
| ----------------- | -------------------------------------------------------------- | ------------------ | ----------------- |
| `options`         | options for checkbox list                                           | `[{label, value}]` | []                |
| `selectoption`    | pre-selected option                                            | `[{label, value}]` | []                |
| `handlechange`    | onChange callback   e.g (selectedList, object, expresion)=>{ } | function           |                   |
| `optionlabel`     | display your own label                                         | function             | 'label'           |
| `optionvalue`     | display your own value                                         | function             | 'value'           |
| `controlboxClass` | class name for parent component                                | String             | '-'   |
| `containerClass`     | class name for list component                             | String             | 'container-checkbox' |
| `inputsearchClass`     | class name for search input component                             | String             | 'search' |
| `checkboxColor`     | color for checkbox                             | String             | '#506EEC' |
| `filter`     | enabled to search search box                            | Bool             | 'true' |
| `filterhidden`     | enabled to search all object key or only deisplay label                            | Bool             | 'false' |
| `placeholder`     | search box place holder                            | String             | 'Search...' |
| `filterdigit`     | searching start after enter number of digits                            | Number             | 2 |


## License

MIT.

Copyright (c) 2022 Jeel Chheta