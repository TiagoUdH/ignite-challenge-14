import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { List } from "../components/List";
import { styles } from "./styles";

export type Task = {
    id: string,
    text: string,
    isChecked: boolean,
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTaskText, setNewTaskText] = useState('')

    function addTask() {
        if(!newTaskText){
            return
        }

        const newTask = {
            id: new Date().toISOString(),
            text: newTaskText,
            isChecked: false,
        }

        setTasks(oldTasks => [...oldTasks, newTask])
    }

    function toggleTaskCheck(taskId: string){
        setTasks(oldTasks => oldTasks.map(task => {
            if(task.id === taskId){
                return {
                    ...task,
                    isChecked: !task.isChecked
                }
            }

            return task
        }))
    }

    function removeTask(taskId: string){
        setTasks(oldTasks => oldTasks.filter(task => task.id !== taskId))
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <View style={styles.formContainer}>
                    <Input
                        value={newTaskText}
                        onChangeText={setNewTaskText}
                    />

                    <Button
                        onPress={addTask}
                    >
                        <Feather
                            name="plus-circle"
                            size={16}
                            color="#FFFFFF"
                        />
                    </Button>
                </View>

                <List
                    data={tasks}
                    toggleTaskCheck={toggleTaskCheck}
                    removeTask={removeTask}
                />
            </View>
        </View>
    )
}