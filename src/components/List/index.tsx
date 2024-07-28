import { View } from "react-native";
import { Header } from "./Header";
import { styles } from "./styles";

export function List() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}