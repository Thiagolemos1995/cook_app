import { ScrollView } from "react-native"

import { services } from "@/services"

import { styles } from "./styles"
import { Ingredient, type IngredientProps } from "@/components/Ingredient"

interface Props {
  readonly ingredients: IngredientProps[]
}

export function SelectedIngredients({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
        />
      ))}
    </ScrollView>
  )
}
