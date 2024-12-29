import { View, Text } from "react-native";
import { s } from "./styles";
import { Step } from "../step";
import { IconQrcode, IconMapPin, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
    return (
        <View style={s.container}>
            <Step icon={IconMapPin} title="Garanta vantangens perto de você" description="Ative cupons onde extiver, em diferentes tipos de estabrlrvmrnto" />
            <Step icon={IconQrcode} title="Ative o cupom com QR Code" description="Escaneie o código no estabelecimento para usar o benefício" />
            <Step icon={IconTicket} title="Encontre estabelecimentos" description="Escaneie o código no estabelecimento para usar o benefício" />
        </View>
    )
}