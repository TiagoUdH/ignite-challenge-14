import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#FFF' }}>ToDo</Text>
        </View>
    )
}