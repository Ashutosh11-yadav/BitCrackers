import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions , Platform} from 'react-native';
import CustomButton from './assets/Components/Custombuttons/CustomButton'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!!</Text>
        <CustomButton title="Press me" onPress={()=> alert("Pressed!")}></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width:"70%",
    height:"40%",
    backgroundColor:'skyblue',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    ...Platform.select({
      ios:{
        color:'purple',
        fontSize:50,
        fontStyle:'normal'
      },
      android:{
        color:'red',
        fontSize:60,
        fontStyle:'italic'

      }

    }),
      fontSize:25
  }
});
