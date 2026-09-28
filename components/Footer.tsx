import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  
    return (
        <View style={styles.footer}>
            <Text style={styles.textFooter}>Burger Craft • Sabor artenasal de verdade</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginBlock: 20
  },
  textFooter: {
    fontSize: 11,
    fontFamily: 'InterMedium',
    color: '#6c757d',
  }
})