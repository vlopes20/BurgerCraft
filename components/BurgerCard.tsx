import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type BurgerCardProps = {
    image: ImageSourcePropType,
    name: string,
    description: string,
    price: string
};

export default function BurgerCard({image, name, description, price}: BurgerCardProps) {
    return (
        <View style={styles.cardItem}>
            <Image source={image} style={styles.imageItem}></Image>
            <View style={styles.menuDescription}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
                <Text style={styles.cardPrice}>R$ {price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
  }
})