import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonPlus() {
    return (
        <TouchableOpacity
            style={styles.plusButton}
            >
            <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    plusButton: {
    backgroundColor: '#e65100',
    width: 36,
    height: 36,
    borderRadius: 18
  },
  plusButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: '400'
  }
})