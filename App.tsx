import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import BurgerCard from './components/BurgerCard';
import ButtonPlus from './components/ButtonPlus';
import ButtonCustom from './components/ButtonCustom';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import {
  Outfit_700Bold,
  Outfit_800ExtraBold,
} from '@expo-google-fonts/outfit';

export default function App() {
  
  const [nameUser, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const [fontsLoaded] = useFonts({
  Inter: Inter_400Regular,
  InterMedium: Inter_500Medium,
  InterSemiBold: Inter_600SemiBold,
  InterBold: Inter_700Bold,

  OutfitBold: Outfit_700Bold,
  OutfitExtraBold: Outfit_800ExtraBold,
});


  if (!fontsLoaded) {
  return null;
}

  const handleOrder = () => {
    if (nameUser.trim() == '') {
      setMessage('Por favor, informe seu nome!');
    } else {
      setMessage(`Olá, ${nameUser}! Pedido recebido`);
    }
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}
    >
      <ScrollView>
        <Header />

        <View style={styles.sectionContent}>
          
          <View style={styles.contentText}>
            <Text style={styles.sectionTitle}>Bateu a fome?</Text>
            <Text style={styles.sectionSubTitle}>Escolha seu lanche artenasal de hoje</Text>
          </View>

          <View style={styles.mainCard}>
            <Image source={require('./assets/hero-image.png')} style={styles.image}></Image>
            
            <View style={styles.descriptionCard}>
              <View style={styles.backgroundPopular}>
                <Text style={styles.popular}>DESTAQUE DA CASA</Text>
              </View>
              <Text style={styles.name}>Smash Duplo Cheddar</Text>
              <Text style={styles.description}>Dois blends de 100g, queijo derretido e molho especial</Text>
            </View>

            <View style={styles.actionCard}>
              <Text style={styles.price}>R$ 34,90</Text>
              <ButtonPlus />
            </View>

          </View>

            <Text style={styles.menuTitle}>Nossos Burgers</Text>

            <View style={styles.menuContent}>
              <BurgerCard 
                image={require('./assets/ClassicBurger.png')}
                name='Classic Burger'
                description='Pão brioche, blend 160g e queijo prato'
                price='26,00'
              />

              <BurgerCard 
                image={require('./assets/BaconCrispy.png')}
                name='Bacon Crispy'
                description='Blend 160g com fatias crocantes de bacon'
                price='32,00'
              />

              <BurgerCard 
                image={require('./assets/ChickenCrunchy.png')}
                name='Chicken Crunchy'
                description='Frango empanado com maionese da casa'
                price='28,50'
              />

              <BurgerCard 
                image={require('./assets/VeggieGrill.png')}
                name='Veggie Grill'
                description='Hambúrguer de grão de bico e cogumelos'
                price='29,90'
              />

              <View style={styles.orderContent}>
                <Text style={styles.orderTitle}>Como podemos te chamar?</Text>
                <Text style={styles.orderSubTitle}>Insira seus dados para agilizar sua retirada ou entrega</Text>
                <TextInput 
                  style={styles.input}
                  placeholder='Digite seu nome...'
                  value={nameUser}
                  onChangeText={setName}
                  >
                </TextInput>

                <ButtonCustom title='Fazer meu pedido' onPress={handleOrder} />

                {message !== '' && (
                  <View style={styles.backgroundMessage}>
                    <Ionicons
                      name="checkmark-circle"
                      size={20}
                      color="#2e7d32"
                    />

                    <Text style={styles.messageText}>
                      {message}
                    </Text>
                  </View>
                )}
              </View>
            </View>

            <Footer />

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
  sectionContent: {
    paddingHorizontal: 24
  },
  contentText: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 32,
    fontFamily: 'OutfitExtraBold',
    color: '#1e1e1e',
    marginBottom: 8
  },
  sectionSubTitle: {
    fontSize: 15,
    fontFamily: 'Inter',
    color: '#6c757d',
    marginBottom: 12
  },
  mainCard: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 0,
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginBottom: 16,
  },
  descriptionCard: {
    paddingHorizontal: 20,
    marginBottom: 16
  },
  backgroundPopular: {
    padding: 5,
    backgroundColor: '#fff3e0',
    borderRadius: 12,
    width: 130,
    height: 'auto',
    marginBottom: 8
  },
  popular: {
    fontSize: 11,
    fontFamily: 'InterBold',
    color: '#e65100',
    textAlign: 'center'
  },
  name: {
    fontSize: 22,
    fontFamily: 'OutfitExtraBold',
    color: '#1e1e1e'
  },
  description: {
    fontSize: 13,
    fontFamily: 'Inter',
    color: '#6c757d',
    marginTop: 8,
  },
  actionCard: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  price: {
    fontSize: 24,
    fontFamily: 'OutfitExtraBold',
    color: '#e65100'
  },
  menuContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32
  },
  menuTitle: {
    fontSize: 20,
    fontFamily: 'OutfitExtraBold',
    color: '#1e1e1e',
    marginTop: 16,
  },
  orderContent: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 24,
    padding: 20,
    marginTop: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  orderTitle: {
    fontSize: 18,
    fontFamily: 'OutfitExtraBold',
    color: '#1e1e1e',
    marginBottom: 6
  },
  orderSubTitle: {
    fontSize: 12,
    fontFamily: 'Inter',
    color: '#6c757d',
    marginBottom: 16
  },
  input: {
    width: '100%',
    backgroundColor: '#e9ecef',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: 'InterMedium',
  },
  backgroundMessage: {
    width: '100%',
    height: 44,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    gap: 8,
  },
  messageText: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#2e7d32',
  },
});
