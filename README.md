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
     options={setFruits}
     selectoption={selectedfruits}
     handelchange={handelSelection} 
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
| `handelchange`    | onChange callback   e.g (selectedList, object, expresion)=>{ } | function           |                   |
| `optionlabel`     | display your own label                                         | String             | 'label'           |
| `optionvalue`     | display your own value                                         | String             | 'value'           |
| `containerClass` | class name for parent component                                | String             | 'container-box'   |
| `controlboxClass`     | class name for list item component                             | String             | 'control-box' |


## License

MIT.

Copyright (c) 2022 Jeel Chheta