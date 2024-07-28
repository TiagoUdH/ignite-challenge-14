import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    description: string,
    value: number,
    isFinished?: boolean,
}

export function Counter({ description, value, isFinished = false }: Props) {
    return (
        <View style={styles.container}>
            <Text style={isFinished ? { ...styles.text, ...styles.textFinished } : { ...styles.text, ...styles.textCreated }}>{description}</Text>

            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{value}</Text>
            </View>
        </View>
    )
}