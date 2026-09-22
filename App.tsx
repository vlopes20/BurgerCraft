import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [nameUser, setName] = useState('');
  const [message, setMessage] = useState('');

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
        <View style={styles.header}>
          <View>
            <Text style={styles.titleHeader}>Burger Craft</Text>
            <Text style={styles.descriptionHeader}>Sabor artenasal de verdade</Text>
          </View>
            
            <View style={styles.avatarPlaceholder}>
              <Ionicons name='person' size={20} color={"#b69d91ff"}></Ionicons>
            </View>
        </View>

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
              <TouchableOpacity
              style={styles.plusButton}
              >
                <Text style={styles.plusButtonText}>+</Text>
              </TouchableOpacity>
            </View>

          </View>

            <Text style={styles.menuTitle}>Nossos Burgers</Text>

            <View style={styles.menuContent}>
              <View style={styles.cardItem}>
                <Image source={require('./assets/ClassicBurger.png')} style={styles.imageItem}></Image>
                <View style={styles.menuDescription}>
                  <Text style={styles.cardTitle}>Classic Burger</Text>
                  <Text style={styles.cardDescription}>Pão brioche, blend 160g e queijo prato</Text>
                  <Text style={styles.cardPrice}>R$ 26,00</Text>
                </View>
              </View>

              <View style={styles.cardItem}>
                <Image source={require('./assets/BaconCrispy.png')} style={styles.imageItem}></Image>
                <View style={styles.menuDescription}>
                  <Text style={styles.cardTitle}>Bacon Crispy</Text>
                  <Text style={styles.cardDescription}>Blend 160g com fatias crocantes de bacon</Text>
                  <Text style={styles.cardPrice}>R$ 32,00</Text>
                </View>
              </View>

              <View style={styles.cardItem}>
                <Image source={require('./assets/ChickenCrunchy.png')} style={styles.imageItem}></Image>
                <View style={styles.menuDescription}>
                  <Text style={styles.cardTitle}>Chicken Crunchy</Text>
                  <Text style={styles.cardDescription}>Frango empanado com maionese da casa</Text>
                  <Text style={styles.cardPrice}>R$ 28,50</Text>
                </View>
              </View>

              <View style={styles.cardItem}>
                <Image source={require('./assets/VeggieGrill.png')} style={styles.imageItem}></Image>
                <View style={styles.menuDescription}>
                  <Text style={styles.cardTitle}>Veggie Grill</Text>
                  <Text style={styles.cardDescription}>Hambúrguer de grão de bico e cogumelos</Text>
                  <Text style={styles.cardPrice}>R$ 29,90</Text>
                </View>
              </View>

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
                <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
                  <Text style={styles.orderButtonText}>Fazer meu pedido</Text>
                </TouchableOpacity>
                <View style={styles.backgroundMessage}>
                  {message !== '' && <Text style={styles.messageText}>{message}</Text>}
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <Text style={styles.textFooter}>Burger Craft • Sabor artenasal de verdade</Text>
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
  },
  sectionContent: {
    paddingHorizontal: 24
  },
  contentText: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '800',
    fontFamily: 'Outfit',
    color: '#1e1e1e',
    marginBottom: 8
  },
  sectionSubTitle: {
    fontSize: 15,
    fontWeight: '400',
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
    width: 120,
    height: 'auto',
    marginBottom: 8
  },
  popular: {
    fontSize: 11,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: '#e65100',
    textAlign: 'center'
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    fontFamily: 'Outfit',
    color: '#1e1e1e'
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
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
    fontWeight: '800',
    fontFamily: 'Outfit',
    color: '#e65100'
  },
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
  },
  menuContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'Outfit',
    color: '#1e1e1e',
    marginTop: 16,
  },
  cardItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 0,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3
  },
  imageItem: {
    width: '100%',
    height: 110,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginBottom: 16
  },
  menuDescription: {
    paddingHorizontal: 16
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Outfit',
    color: '#1e1e1e',
    marginBottom: 8
  },
  cardDescription: {
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: '#6c757d',
    marginBottom: 8
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Outfit',
    color: '#e65100',
    marginBottom: 10
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
    fontWeight: '800',
    fontFamily: 'Outfit',
    color: '#1e1e1e',
    marginBottom: 6
  },
  orderSubTitle: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: '#6c757d',
    marginBottom: 16
  },
  input: {
    width: '100%',
    backgroundColor: '#e9ecef',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16
  },
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
  },
  backgroundMessage: {
    padding: 6,
    width: '100%',
    height: 'auto',
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    marginTop: 12,
  },
  messageText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2e7d32',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
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
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#6c757d',
  }
});
