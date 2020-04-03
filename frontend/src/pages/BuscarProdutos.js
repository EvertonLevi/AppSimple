import React, { useState } from 'react'
import {
  Text,
  FlatList, StyleSheet,
  Image, ListItem,
  Dimensions,
  TouchableOpacity,
  View, TextInput,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import products from '../service/data'

const { width, height } = Dimensions.get('window')
export default function BuscarProdutos() {

  const [data, setData] = useState([])
  const [text, setText] = useState("")

  function filterSearch(text) {
    const newData = products.filter(item => {
      const itemData = `${item.productName}`
      const textData = text
      return itemData.indexOf(textData) > -1
    })
    setData(newData)
  }

  function searchInput() {
    return (
      <TextInput
        style={styles.textInput}
        placeholder="Busque seu produto preferido..."
        onChangeText={text => filterSearch(text)}
      >
      </TextInput>
    )
  }

  return (
    <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        // extraData={}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <View style={{
            width: width
          }}>

            <TouchableOpacity style={{
              margin: 10,
              height: 170,
              backgroundColor: 'white',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              }, shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 10,
              borderRadius: 15,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: 'center'
            }}>
              <View style={{ marginLeft: 0 }}>
                <Image source={item.cover}
                  style={{
                    borderRadius: 15,
                    // borderWidth: 2, borderColor: '#000',
                    width: 170, height: 170,
                    resizeMode: "cover",
                  }} />
              </View>

              <View style={{
                marginLeft: 10, paddingVertical: 45, paddingHorizontal: 10,
                // borderWidth: 2, borderColor: '#000',
                flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 1
              }}>

                <Text style={{ fontSize: 20 }}>{item.productName}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray' }}>{item.description}</Text>

                <View style={{ flex: 2, marginVertical: 5, flexDirection: "row", alignItems: "center" }}>
                  <View>
                    <Text style={{ fontSize: 16 }}>R$ {item.pricing}<Text style={{ fontSize: 8 }}> à vista</Text></Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name="airplay" color="black" size={30} style={{ marginLeft: 15, }} />
                  </TouchableOpacity>
                </View>

              </View>

            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.productName}
        ListHeaderComponent={searchInput()}
      />
    </View>
  )
}

const styles = StyleSheet.create({


  textInput: {
    backgroundColor: '#a8a8a8',
    width: width - 48,
    height: 50,
    marginTop: 0,
    paddingHorizontal: 24,
    alignSelf: "center",
    borderRadius: 10
  }
})