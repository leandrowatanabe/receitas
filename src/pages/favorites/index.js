import { View, Text, StyleSheet } from 'react-native'

export function Favorites () {
  return (
    <View style={styles.container}>
      <Text>Favorites Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow'
  }
})
