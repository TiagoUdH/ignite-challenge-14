import { View } from "react-native";
import { Task } from "../../../screens/Home";
import { Counter } from "../../Counter";
import { styles } from "./styles";

type Props = {
    data: Task[]
}

export function Header({ data }: Props){
    const tasksCheckedAmount = data.reduce((amount, task) => {
        if(task.isChecked){
            amount += 1
        }

        return amount
    }, 0)

    return (
        <View style={styles.container}>
            <Counter
                description="Criadas"
                value={data.length}
            />

            <Counter
                description="Concluídas"
                value={tasksCheckedAmount}
                isFinished
            />
        </View>
    )
}