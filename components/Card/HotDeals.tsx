import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Style'

const HotDeals = () => {
  return (
   <View style={styles.deal}>
    <View style={styles.dealImage}></View>
    <Text style={styles.dealText}>Item #1 Name
    Goes Here</Text>
    <Text style={styles.dealCost}>$19.99</Text>
   </View>
  )
}

export default HotDeals
