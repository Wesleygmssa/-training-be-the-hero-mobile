import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
    conttainer:{
        flex: 1,
        paddingHorizontal:24,
        paddingTop: 20,

    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    incident:{
        marginBottom: 15,
        backgroundColor: "#fff",
        marginBottom: 16,
        padding:16,
        marginTop: 48,
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
    contactBox:{
        marginBottom: 15,
        backgroundColor: "#fff",
        marginBottom: 16,
        padding:16,
    },
    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription:{
        fontSize: 15,
        color:'#737380',
        marginTop: 16,
    },

    actions:{
        marginTop:16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action:{
      
        backgroundColor: '#e02041',
        borderRadius:8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    }
})