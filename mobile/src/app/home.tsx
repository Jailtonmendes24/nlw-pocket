import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { api } from "@/services/api";
import { fontFamily, colors } from "@/styles/theme";
import { Categories, CategoryProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { router } from "expo-router";

type MarketsProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

export default function Home() {
  const [categories, setCategories] = useState<CategoryProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);


  const currentLocation = {
    latitude: -8.0053036,
    longitude: -34.9103207,
  };

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Erro ao buscar categorias");
    }
  }

  async function fetchMarkets() {
    if (!category) {
      return;
    }

    try {
      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os locais");
    }
  }

  // Pegar localização do usuário
  // async function getCurrentLocation() {
  //   try {
  //     const { granted } = await Location.requestForegroundPermissionsAsync();

  //     if (granted) {
  //       const location = await Location.getCurrentPositionAsync();
  //       console.log("🚀 ~ getCurrentLocation ~ location:", location);
  //     }
  //   } catch (error) {
  //     console.log("🚀 ~ getCurrentLocation ~ error:", error);
  //   }
  // }

  useEffect(() => {
    // getCurrentLocation();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: "#cecece" }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/location.png")}
        />

        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require("@/assets/pin.png")}
          >
            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
              <View style={{ padding: 20 }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.medium,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.gray[400],
                    fontFamily: fontFamily.regular,
                  }}
                >
                  {item.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Places data={markets} />
    </View>
  );
}
