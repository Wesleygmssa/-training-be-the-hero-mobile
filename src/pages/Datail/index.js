import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import logoImg from '../../../src/assets/logo.png';
import {useNavigation } from '@react-navigation/native';




const Detail = () => {
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    return (
        <View style={styles.conttainer}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack} size={28}><Text>Voltar</Text></TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>lorem  ispson hets questh burkt</Text>

                <Text style={styles.incidentProperty}>VAALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120, 00</Text>


            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <View style={styles.action}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                        </View>

                    </TouchableOpacity>
           
                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Detail;