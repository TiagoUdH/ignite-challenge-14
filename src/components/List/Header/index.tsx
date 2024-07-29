import { View } from "react-native";
import { Task } from "../../../screens/Home";
import { Counter } from "../../Counter";
import { styles } from "./styles";

type Props = {
    data: Task[]
}

export function Header({ data }: Props){
    return (
        <View style={styles.container}>
            <Counter
                description="Criadas"
                value={data.length}
            />

            <Counter
                description="Concluídas"
                value={0}
                isFinished
            />
        </View>
    )
}