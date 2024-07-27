import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    children: ReactNode
}

export function Button({ children }: Props){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6}>
            {children}
        </TouchableOpacity>
    )
}