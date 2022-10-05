import React, { useState } from 'react'

export default function useInput(intiValue) {

    const [value, setValue] = useState(intiValue)
    const resetValue = () => {
        setValue('');
    }

    const binding = {
        value: value,
        onchange: e => {
            setValue(e.target.value)
        }
    }

    return [value, binding, resetValue];
}
