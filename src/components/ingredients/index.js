import { View, Text, StyleSheet } from 'react-native';

export function Ingredients ({data}) {
  return (
    <View style={styles.container}>
      <Text>{data.name}</Text>
      <Text>{data.amount}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 14
  }
})
