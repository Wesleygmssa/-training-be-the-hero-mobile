import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import logoImg from '../../../src/assets/logo.png';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Incidents = () => {
    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('detail');
    }

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text> 
                </Text>
            </View> 
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>
              
              <FlatList 
              style={styles.incidentList}
              keyExtractor={incident => incident}
              showsVerticalScrollIndicator={false}
               data={[1,2,3,4,5]}
              renderItem={()=>(
                <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>lorem  ispson hets questh burkt</Text>

                <Text style={styles.incidentProperty}>VAALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120, 00</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes </Text>
                </TouchableOpacity>
            </View>
              )}
              />
            
        </View>

        
    )
}

export default Incidents;