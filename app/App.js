import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './SignUpScreen'; // Importando a tela de cadastro


const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
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
        />

       
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true} // Oculta o texto (modo senha)
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

function MainScreen() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Tela main :)</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 100,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#4300dd',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#4300dd',
    fontSize: 16,
    marginVertical: 10,
  },
  transparentButton: {
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#4300dd',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  transparentButtonText: {
    color: '#4300dd',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
