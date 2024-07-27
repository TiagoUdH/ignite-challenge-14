import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <View style={styles.formContainer}>
                    <Input />

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