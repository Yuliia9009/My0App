import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎄 Welcome to Winter App 🎅</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
      },
      title: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
      },
    })
    
    export default Header