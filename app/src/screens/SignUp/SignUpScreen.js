import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "./styles"
import auth from "@react-native-firebase/auth"
import React, {useState} from 'react'

export default function SignUpScreen() {
  
  const [name, setName] = useState("");
  const [ra, setRA] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signUp(){
      auth().createUserWithEmailAndPassword(name, ra, email, password, confirmPassword);
  }



  return (
    <ImageBackground source={require('./assets/fundo2.png')} style={styles.background}>
      {/* Seção de boas-vindas no canto superior esquerdo */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.text}>Create</Text>
        <Text style={styles.text}>Account</Text>
      </View>

      <View style={styles.container}>
       
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={name}
          action={setName}
        />

     
        <TextInput
          style={styles.input}
          placeholder="RA"
          placeholderTextColor="#aaa"
          value={ra}
          action={setRA}
        />

     
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          action={setEmail}
        />

       
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true} 
          value={password}
          action={setPassword}
        />

       
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true} 
          value={confirmPassword}
          action={setConfirmPassword}
        />

      
        <TouchableOpacity onPress={signUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
