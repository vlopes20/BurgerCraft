import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.titleHeader}>Burger Craft</Text>
                <Text style={styles.descriptionHeader}>Sabor artenasal de verdade</Text>
            </View>
                    
            <View style={styles.avatarPlaceholder}>
                <Ionicons name='person' size={20} color={"#e65100"}></Ionicons>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 54,
    paddingHorizontal: 24,
    paddingBottom: 20
  },
  titleHeader: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1e1e1e',
    marginBottom: 2,
    fontFamily: 'Outfit'
  },
  descriptionHeader: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6c757d',
    fontFamily: 'Inter'
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center"
  }
});