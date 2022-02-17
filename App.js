import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native"; 
import Tabs from "./navigations/tabs";

const Stack=createNativeStackNavigator();

const App= () =>{
  return (
    <NavigationContainer>
        <Stack.Navigator
           screenOptions={{
             headerShown : false
           }}
        >
            <Stack.Screen name="Home" component={Tabs} />

        </Stack.Navigator>
    </NavigationContainer>
  )


}

export default App;