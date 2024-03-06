import { useEffect, useState } from "react";
import { router } from "expo-router";

import { View, Text, Alert } from "react-native";
import { Ingredients } from "@/components/Ingredients";
import { Selected } from "@/components/Selected";

import { services } from '@/services'
import { styles } from './styles'

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo ?", [
      {text: "Não", style: 'cancel'},
      {text: 'Sim', onPress: () => setSelected([])}
    ])
  }

  function handleSearch() {
    router.navigate("/recipes")
  }

  useEffect(() => {
    void services.ingredients.findAll().then(setIngredients)
  }, [])

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
        ingredients={ingredients}
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