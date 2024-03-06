import { View, Text } from "react-native";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";
import { Button } from "../Button";
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from "@/theme";

type SelectedProps = {
  readonly quantity: number;
  readonly onClear: () => void;
  readonly onSearch: () => void;
}

export function Selected({quantity, onClear, onSearch}: SelectedProps) {
  return(
    <Animated.View 
      style={styles.container} 
      entering={SlideInDown.duration(500)} 
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>
          {quantity} ingredientes selecionados
        </Text>
        <MaterialIcons color={theme.colors.gray_400} name='close' size={24} onPress={onClear} />
      </View>

      <Button title="Encontrar" onPress={onSearch}/>
    </Animated.View>
  )
}