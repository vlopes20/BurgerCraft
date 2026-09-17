import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}
    >
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Burger Craft</Text>
          <Text style={styles.descriptionHeader}>Sabor artenasal de verdade</Text>
        </View>
        <View>
          <View style={styles.avatarPlaceholder}>
                <Ionicons name='person' size={20} color={"#b69d91ff"}></Ionicons>
            </View>
        </View>
      </ScrollView>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  header: {
    width: '100%',
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 32
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
  },

});
