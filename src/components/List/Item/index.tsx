import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../../screens/Home";
import { styles } from "./styles";

type Props = {
    item: Task;
    toggleTaskCheck: (taskId: string) => void;
    isChecked?: boolean;
}

export function Item({ item, toggleTaskCheck, isChecked = false}: Props){
    function handleToggleTaskCheck(){
        toggleTaskCheck(item.id)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleToggleTaskCheck} activeOpacity={0.6}>
            <View style={styles.content}>
                {item.isChecked ? (
                    <View style={{ ...styles.checkbox, ...styles.checked}}>
                        <Feather name="check" color="#F2F2F2" size={12} />
                    </View>
                ) : (
                    <View style={{ ...styles.checkbox, ...styles.unchecked }} />
                )}

                <Text style={item.isChecked ? {...styles.text, ...styles.textChecked} : {...styles.text, ...styles.textUnchecked}}>
                    {item.text}
                </Text>
            </View>

            <TouchableOpacity style={styles.trashButton} activeOpacity={0.6}>
                <Feather name="trash-2" size={16} color="#808080" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}