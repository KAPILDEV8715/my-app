
import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  
  container: {
      
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#007BFF',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
        
      },
      navbar: {
        flexDirection: 'row', 
        justifyContent:'center',
        width: '100%',
        padding: 10,
        backgroundColor: 'skyblue', 
        borderTopWidth: 1,
        borderTopColor: 'blue',
        alignItems:'stretch',

      },
      navButton: {
        borderColor:'black',
        borderCurve:'circular',
        marginTop:5,
        paddingLeft:10,
        paddingRight:2,
        width:150,
        padding: 10,
        alignContent:'center',
        alignItems:'center',
        backgroundColor: 'skyblue', 
        borderRadius: 5,

      },
      navButtonText: {
        color: '#fff', 
        fontSize: 16,

      },
});

export default HomeStyle;
