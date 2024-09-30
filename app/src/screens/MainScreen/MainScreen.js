import React from 'react';
import { Text, View,} from 'react-native';
import styles from "./styles"
import auth from "@react-native-firebase/auth"

export default function MainScreen() {

    function signOut(){
        auth().signOut()
    }

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Tela main :)</Text>
        <Button onPress={signOut} >Sair</Button>
      </View>
    );
  }