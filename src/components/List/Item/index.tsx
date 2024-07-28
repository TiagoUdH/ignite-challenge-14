import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
    text: string;
    isChecked?: boolean;
}

export function Item({ text, isChecked = false}: Props){
    const [checkboxIsChecked, setCheckboxIsChecked] = useState(isChecked);

    function handleToggleChack(){
        setCheckboxIsChecked(prevState => !prevState)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleToggleChack} activeOpacity={0.6}>
            <View style={styles.content}>
                {checkboxIsChecked ? (
                    <View style={{ ...styles.checkbox, ...styles.checked}}>
                        <Feather name="check" color="#F2F2F2" size={12} />
                    </View>
                ) : (
                    <View style={{ ...styles.checkbox, ...styles.unchecked }} />
                )}

                <Text style={checkboxIsChecked ? {...styles.text, ...styles.textChecked} : {...styles.text, ...styles.textUnchecked}}>
                    {text}
                </Text>
            </View>

            <TouchableOpacity style={styles.trashButton} activeOpacity={0.6}>
                <Feather name="trash-2" size={16} color="#808080" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}