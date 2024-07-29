import { FlatList, View } from "react-native";
import { Task } from "../../screens/Home";
import { Empty } from "./Empty";
import { Header } from "./Header";
import { Item } from "./Item";
import { styles } from "./styles";

type Props = {
    data: Task[],
    toggleTaskCheck: (taskId: string) => void,
}

export function List({ data, toggleTaskCheck }: Props) {
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
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 24 }}
            />
        </View>
    )
}