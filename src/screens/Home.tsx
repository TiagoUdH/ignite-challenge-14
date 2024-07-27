import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <View style={styles.formContainer}>
                    <Button>
                        <Feather
                            name="plus-circle"
                            size={16}
                            color="#FFFFFF"
                        />
                    </Button>
                </View>
            </View>
        </View>
    )
}