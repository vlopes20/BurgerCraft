import { StyleSheet, Text, TouchableOpacity } from "react-native"

type ButtonCustomProps = {
    title: string,
    onPress: () => void
}

export default function ButtonCustom({title, onPress}: ButtonCustomProps) {
    return (
        <TouchableOpacity style={styles.orderButton} onPress={onPress}>
            <Text style={styles.orderButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    orderButton: {
    backgroundColor: '#e65100',
    width: '100%',
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: '700'
  }
})