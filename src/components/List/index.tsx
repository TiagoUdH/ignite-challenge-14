import { FlatList, View } from "react-native";
import { Task } from "../../screens/Home";
import { Empty } from "./Empty";
import { Header } from "./Header";
import { Item } from "./Item";
import { styles } from "./styles";

type Props = {
    data: Task[],
    toggleTaskCheck: (taskId: string) => void,
    removeTask: (taskId: string) => void,
}

export function List({ data, toggleTaskCheck, removeTask }: Props) {
    return (
        <View style={styles.container}>
            <Header data={data} />

            <FlatList 
                data={data}
                ListEmptyComponent={<Empty />}
                renderItem={({ item }) => (
                    <Item
                        item={item}
                        toggleTaskCheck={toggleTaskCheck}
                        removeTask={removeTask}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 24 }}
            />
        </View>
    )
}