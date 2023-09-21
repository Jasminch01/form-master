import { useState } from "react"

const useInput = (defaultValue= null) => {
    const [value, setValue] = useState(defaultValue);

    // const changeHandle = (e)=> {
    //     setValue(e.target.value)
    // }
    const onChange = (e)=> {
        setValue(e.target.value)
    }
    // return [value, changeHandle]
    return {
        value,
        onChange
    }
}

export default useInput