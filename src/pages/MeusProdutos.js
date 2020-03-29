import React from 'react'
import {
 Text,
 FlatList,
 ImageBackground,
 Dimensions,
 TouchableOpacity,
 View
} from 'react-native'

const { width, height } = Dimensions.get('window')
const products = [
 {
  "id": 1,
  "title": "Example of story title",
  "author": "Author Name",
  "cover": require('../assets/products/1.png'),
  "pricing": 100.15
 },
 {
  "id": 2,
  "title": "Example of story title",
  "author": "Author Name",
  "cover": require('../assets/products/2.png'),
  "pricing": 100.15
 },
 {
  "id": 3,
  "title": "Example of story title",
  "author": "Author Name",
  "cover": require('../assets/products/3.png'),
  "pricing": 100.15
 },
 {
  "id": 4,
  "title": "Example of story title",
  "author": "Author Name",
  "cover": require('../assets/products/4.png'),
  "pricing": 100.15
 },
 {
  "id": 5,
  "title": "Example of story title",
  "author": "Author Name",
  "cover": require('../assets/products/5.png'),
  "pricing": 100.15
 },
 {
  "id": 5,
  "title": "Example of story title",
  "author": "Author Name",
  "cover": require('../assets/products/6.png'),
  "pricing": 150.50
 }
]
export default function MeusProdutos() {


 return (
  <View style={{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   paddingHorizontal: 0
  }}>
   <Text>Meus Produtos!</Text>
   <FlatList
    data={products}
    onEndReachedThreshold={0.1}
    style={{}}
    keyExtractor={product => String(product.id)}
    renderItem={({ item }) => (
     <View style={{
      flex: 1,
      flexDirection: "row",
      width: width,
      justifyContent: "center",
      alignItems: 'center'
     }}>

      <TouchableOpacity style={{
       margin: 10,
       width: width - 100,
       height: 200,
       borderWidth: 2,
       borderColor: '#000',
       borderRadius: 15,
       flexDirection: "column",
       justifyContent: "center",
       alignItems: 'center'
      }}>
       <ImageBackground source={item.cover}
        style={{
         opacity: 0.6, resizeMode: "cover",
         justifyContent: "center"
        }} />
       <Text>{item.title}</Text>
       <Text>{item.author}</Text>
       {/* <Image style={{ width: 50, height: 50 }}>{item.cover}</Image> */}
       <Text>R$ {item.pricing}</Text>
      </TouchableOpacity>
     </View>
    )}
   />
  </View>
 )
}