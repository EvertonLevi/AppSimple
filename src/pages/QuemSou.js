import React, { useState } from 'react'
import {
 Text,
 PixelRatio, ScrollView,
 StyleSheet,
 TouchableOpacity,
 Image, Alert,
 View
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default function QuemSou() {

 const [imgSource, setImgSource] = useState(null)

 const options = {
  quality: 1.0,
  maxWidth: 500,
  maxHeight: 500,
  storageOptions: {
   skipBackup: true,
  }
 }

 function selectPhotoTapped() {
  const options = {
   quality: 1.0,
   maxWidth: 500,
   maxHeight: 500,
   storageOptions: {
    skipBackup: true,
   }
  }
 }

 ImagePicker.showImagePicker(options, response => {
  if (response.didCancel) {
   Alert.alert('Used cancelled photo picker')
  } else if (response.error) {
   Alert.alert('ImagePicker error: ', response.error)
  } else if (response.customButton) {
   Alert.alert('User tapped custom button: ', response.customButton)
  } else {
   let source = { uri: response.uri }
   setImgSource(source)
  }
 })


 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <ScrollView>
    <TouchableOpacity
     onPress={selectPhotoTapped()}
    >
     <View
      style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
      {imgSource === null ? (
       <Text>Selecione a foto</Text>
      ) : (
        <Image style={styles.avatar} source={imgSource} />
       )}
     </View>
    </TouchableOpacity>


    <Text>Minhas fotos!</Text>
    {/* mostrar todas as fotos upadas */}
   </ScrollView>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
 },
 avatarContainer: {
  borderColor: '#9B9B9B',
  borderWidth: 1 / PixelRatio.get(),
  justifyContent: 'center',
  alignItems: 'center',
 },
 avatar: {
  borderRadius: 75,
  width: 150,
  height: 150,
 },
});