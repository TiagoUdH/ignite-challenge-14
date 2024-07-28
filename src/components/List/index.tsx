import { FlatList, View } from "react-native";
import { Empty } from "./Empty";
import { Header } from "./Header";
import { Item } from "./Item";
import { styles } from "./styles";

export function List() {
    return (
        <View style={styles.container}>
            <Header />

            <FlatList 
                data={["Integer urna interdum massa libero auctor neque turpis turpis semper."]}
                ListEmptyComponent={<Empty />}
                renderItem={({ item }) => (
                    <Item text={item} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 24 }}
            />
        </View>
    )
}