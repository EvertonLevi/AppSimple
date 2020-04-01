import React, { useState } from 'react'
import {
  Text,
  FlatList, StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  View, TextInput,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


const { width, height } = Dimensions.get('window')
export default function BuscarProdutos() {

  const [text, setText] = useState('')
  const [produtcSearch, setProdutcSearch] = useState('')
  const products = [
    {
      "id": 1,
      "productName": "Desinfetante",
      "description": "description Name",
      "cover": require('../assets/products/1.png'),
      "pricing": 100.15
    },
    {
      "id": 2,
      "productName": "Sabão",
      "description": "description Name",
      "cover": require('../assets/products/2.png'),
      "pricing": 100.15
    },
    {
      "id": 3,
      "productName": "Shampoo",
      "description": "description Name",
      "cover": require('../assets/products/3.png'),
      "pricing": 100.15
    },
    {
      "id": 4,
      "productName": "Sabonete",
      "description": "description Name",
      "cover": require('../assets/products/4.png'),
      "pricing": 100.15
    },
    {
      "id": 5,
      "productName": "Creme",
      "description": "description Name",
      "cover": require('../assets/products/5.png'),
      "pricing": 100.15
    },
    {
      "id": 6,
      "productName": "Óleo",
      "description": "description Name",
      "cover": require('../assets/products/6.png'),
      "pricing": 150.50
    }
  ]


  function filterSearch(text) {
    const dataSearch = products.filter(function (item) {
      const itemData = item.productName.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      products: products.cloneWithRows(dataSearch),
      text: text
    })
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={styles.textInput}
        placeholder="Busque seu produto preferido..."
        onChangeText={(text) => { filterSearch(text) }}
        value={text}
      >

      </TextInput>

      <Text>Buscar Produtos</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({


  textInput: {
    backgroundColor: '#a8a8a8',
    width: width,
    height: 50,
    marginTop: 0,
    paddingHorizontal: 24
  }
})