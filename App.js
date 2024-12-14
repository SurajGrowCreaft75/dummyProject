import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
// import { AppLovinMax } from 'react-native-applovin-max';



const App = () => {
    useEffect(()=>{
        // AppLovinMax.initialize('UuTVGNTgGIoO6QEsfKJKZfGO4_cf_J5bq4bwWQ1ITOlT9I-NNqFvpWrkP2TTh6eIdSFlbV8mMtr2GGH2aEn3lH');
    })

   
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, backgroundColor:"red"}}>
      <Text>App</Text>
      </View>
    </SafeAreaView>
  )
}

export default App