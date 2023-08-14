import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { ImageViewer } from './components/ImageViewer'
import { Button } from './components/Button'

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label={'Choose a photo'}
          onClick={() => alert('You pressed a button 1')}
        />
        <Button
          label={'Use this photo'}
          onClick={() => alert('You pressed a button 2')}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
})