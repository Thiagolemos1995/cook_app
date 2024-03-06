import { Pressable, type PressableProps, Text, Image } from 'react-native'
import { styles } from './styles'

export type IngredientProps = PressableProps & {
  name: string;
  image: string;
  selected?: boolean;
}

export function Ingredient({name, image, selected = false, ...rest}: IngredientProps) {
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>
        {name}
      </Text>
    </Pressable>
  )
}
