import { FlatList, Text, View } from "react-native";
import { Empty } from "./Empty";
import { Header } from "./Header";
import { styles } from "./styles";

export function List() {
    return (
        <View style={styles.container}>
            <Header />

            <FlatList 
                data={[]}
                ListEmptyComponent={<Empty />}
                renderItem={item => <Text>A</Text>}
            />
        </View>
    )
}