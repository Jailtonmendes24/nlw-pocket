import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Market() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{params.id}</Text>
    </View>
  );
}
