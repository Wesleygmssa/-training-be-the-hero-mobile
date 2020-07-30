import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:24,
        paddingTop: 20,
    
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText:{
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold:{
        fontWeight: 'bold',
        color: "red"
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: "#13131a",
        fontWeight: 'bold'
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
        marginBottom: 32,
    },

    incidentList:{
        padding: 24,
        borderRadius: 8,
       
    },

    incident:{
        marginBottom: 15,
        backgroundColor: "#fff",
        marginBottom: 16,
        padding:16,
    },
    incidentProperty:{
        fontSize: 14,
        color: "#41414d",
        fontWeight:'bold',
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    }


})