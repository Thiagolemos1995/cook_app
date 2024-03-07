import { ScrollView } from 'react-native'
import { styles } from './styles'
import { Ingredient } from '../Ingredient'
import { services } from '@/services'

export interface IngredientsProps {
    readonly ingredients: IngredientResponse[]
    readonly selectedIngredients?: string[]
    readonly handleSetSelected?: React.Dispatch<React.SetStateAction<string[]>>
}

export function Ingredients({
  ingredients,
  selectedIngredients,
  handleSetSelected,
}: IngredientsProps) {
  function handleToggleSelected(value: string) {
    if (selectedIngredients && selectedIngredients.includes(value)) {
      return (
        handleSetSelected &&
                handleSetSelected((state) =>
                  state.filter((item) => item !== value)
                )
      )
    }

    handleSetSelected && handleSetSelected((state) => [...state, value])
  }
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {ingredients.map((item) => (
        <Ingredient
          key={item.id}
          name={item.name}
          image={`${services.storage.imagePath}/${item.image}`}
          selected={
            selectedIngredients &&
                        selectedIngredients.includes(String(item.id))
          }
          onPress={() => handleToggleSelected(String(item.id))}
        />
      ))}
    </ScrollView>
  )
}
