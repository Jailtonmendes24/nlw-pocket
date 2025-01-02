import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { api } from "@/services/api";
import { Categories, CategoryProps } from "@/components/categories";

export default function Home() {
  const [categories, setCategories] = useState<CategoryProps>([]);
  const [category, setCategory] = useState("");
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

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
    </View>
  );
}
