import { Image, Text, View } from "react-native";

import ClipboardImage from "../../../assets/Clipboard.png";
import { styles } from "./styles";

export function Empty(){
    return(
        <View style={styles.container}>
            <Image source={ClipboardImage} />
            <Text style={{ ...styles.text, ...styles.title}}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}