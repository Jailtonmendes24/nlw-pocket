import { IconTicket } from "@tabler/icons-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./styles";

export function Place() {
    return (
        <TouchableOpacity style={s.container}>
            <Image />

            <View>
                <Text></Text>
                <Text></Text>

                <View>
                    <IconTicket></IconTicket>
                    <Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}