import { View } from "react-native";
import { Counter } from "../../Counter";
import { styles } from "./styles";

export function Header(){
    return (
        <View style={styles.container}>
            <Counter
                description="Criadas"
                value={0}
            />

            <Counter
                description="Concluídas"
                value={0}
                isFinished
            />
        </View>
    )
}