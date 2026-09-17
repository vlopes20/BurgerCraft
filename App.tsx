import { StatusBar } from 'expo-status-bar';
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
          <StatusBar style="auto" />
          <Text>Burger Craft</Text>
          <Text>Sabor artenasal de verdade</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {

  }
});
