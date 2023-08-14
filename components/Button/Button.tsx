import { StyleSheet, Pressable, View, Text } from 'react-native'

interface Props {
  label: string
  onClick: () => void
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={styles.buttonLabel}>{label}</Text>
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
