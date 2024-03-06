import { View, Text } from "react-native";

import { styles } from './styles'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolhas os produtos</Text>
      <Text style={styles.subtitle}>Descubra receitas baseadas nos produtos que você escolheu</Text>
    </View>
  )
}