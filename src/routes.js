import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Incidents from './pages/Incidents'
import Detail from './pages/Datail'

const AppStack = createStackNavigator();

const Routes = () =>{

    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="incidents" component={Incidents}/>
                <AppStack.Screen name="detail"  component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;