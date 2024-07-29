import { useState } from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

type Props = {
    value: string,
    onChangeText: (newTaskText: string) => void
}

export function Input({value, onChangeText}: Props){
    const [isFocused, setIsFocused] = useState(false)

    function handleFocus(){
        setIsFocused(true)
    }

    function handleBlur() {
        setIsFocused(false)
    }

    return (
        <TextInput
            value={value}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={isFocused ? {...styles.input, ...styles.inputFocus} : styles.input}
        />
    )
}