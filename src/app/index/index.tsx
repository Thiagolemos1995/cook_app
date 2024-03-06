import { View, Text, Alert } from "react-native";

import { styles } from './styles'
import { Ingredients } from "@/app/components/Ingredients";
import { Selected } from "../components/Selected";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo ?", [
      {text: "Não", style: 'cancel'},
      {text: 'Sim', onPress: () => setSelected([])}
    ])
  }

  function handleSearch() {
    router.navigate("/recipes")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>
          os produtos
        </Text>
      </Text>

      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu
      </Text>

      <Ingredients 
        selectedIngredients={selected} 
        handleSetSelected={setSelected} 
      />

      {selected.length > 0 &&
      <Selected 
        quantity={selected.length} 
        onClear={handleClearSelected} 
        onSearch={handleSearch} 
      />
      }
    </View>
  )
}