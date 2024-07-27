import { useState } from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

export function Input(){
    const [isFocused, setIsFocused] = useState(false)

    function handleFocus(){
        setIsFocused(true)
    }

    function handleBlur() {
        setIsFocused(false)
    }

    return (
        <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={isFocused ? {...styles.input, ...styles.inputFocus} : styles.input}
        />
    )
}