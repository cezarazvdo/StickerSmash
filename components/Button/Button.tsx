import { StyleSheet, Pressable, View, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

interface Props {
  label: string
  onClick: () => void
  theme?: string
}

export const Button = ({ label, onClick, theme }: Props) => {
  const isPrimary = theme === 'primary'

  return (
    <View
      style={[
        styles.buttonContainer,
        isPrimary && { borderWidth: 4, borderColor: 'ffd33d', borderRadius: 18 }
      ]}
    >
      <Pressable
        style={[styles.button, isPrimary && { backgroundColor: '#fff' }]}
        onPress={onClick}
      >
        {isPrimary && (
          <FontAwesome
            name='picture-o'
            size={18}
            color='#25292e'
            style={styles.buttonIcon}
          />
        )}
        <Text style={[styles.buttonLabel, isPrimary && { color: '#25292e' }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonIcon: {
    padding: 8
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16
  }
})
