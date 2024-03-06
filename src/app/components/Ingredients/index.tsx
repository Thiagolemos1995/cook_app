import {  ScrollView } from 'react-native'
import { styles } from './styles'
import { Ingredient } from '../Ingredient'

export interface IngredientsProps {
  readonly selectedIngredients: string[];
  readonly handleSetSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Ingredients({selectedIngredients, handleSetSelected}: IngredientsProps) {
  function handleToggleSelected(value: string) {
    if(selectedIngredients.includes(value)) {
      return handleSetSelected((state) => state.filter((item) => item !== value))
    }

    handleSetSelected((state) => [...state, value])
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {
        Array.from({ length: 100}).map((item, index) => (
          <Ingredient 
            key={index} 
            name='Maça' 
            image='' 
            selected={selectedIngredients.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))} />
        ))
      }
    </ScrollView>
  )
}
