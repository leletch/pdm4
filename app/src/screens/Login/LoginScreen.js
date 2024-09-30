import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "./styles"
import auth from "@react-native-firebase/auth"
import React, {useState} from 'react'




export default function LoginScreen({ navigation }) {
  const [initializing, setInitializing] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function signIn(){
    auth()
    .signInWithEmailAndPassword(email,password)
  }

    return (
      <ImageBackground source={require('./assets/fundo.png')} style={styles.background}>
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.text}>Welcome</Text>
          <Text style={styles.text}>Back!</Text>
        </View>
  
   
        <View style={styles.loginContainer}>
        
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={setPassword}
          />
  
         
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={true} // Oculta o texto (modo senha)
            value={password}
            onChangeText={setPassword}
          />
  
        
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Main')} // Navega para a tela "Main"
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
  
        
          <Text style={styles.orText}>or</Text>
  
          <TouchableOpacity 
            style={styles.transparentButton}
            onPress={() => navigation.navigate('SignUp')} // Navega para a tela de cadastro
          >
            <Text style={styles.transparentButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
  
        <StatusBar style="auto" />
      </ImageBackground>
    );
  }