import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { api } from "@/services/api";
import { Categories, CategoryProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

type MarketsProps = PlaceProps;

export default function Home() {
  const [categories, setCategories] = useState<CategoryProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);
  //Estado uma variavel que respeita o principio da imutabilidade, não pode ser alterada diretamente
  //Estado tem o poder de renderizar a tela

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

  useEffect(() => {
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

      <Places data={markets} />
    </View>
  );
}
