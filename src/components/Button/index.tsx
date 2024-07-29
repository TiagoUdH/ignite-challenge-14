import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    onPress: () => void,
    children: ReactNode,
}

export function Button({ children, onPress }: Props){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}