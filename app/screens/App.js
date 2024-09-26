import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './SignUpScreen'; 
import MainScreen from './MainScreen';


const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/fundo.png')} style={styles.background}>
      {/* Seção de boas-vindas no canto esquerdo */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text}>Back!</Text>
      </View>

      {/* Seção de login na parte inferior */}
      <View style={styles.loginContainer}>
        {/* Campo de Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        {/* Campo de Senha */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true} 
        />

        {/* Botão de Logar */}
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('Login')}
         >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Texto "ou" entre os botões */}
        <Text style={styles.orText}>or</Text>

        {/* Botão de Cadastro */}
        <TouchableOpacity 
          style={styles.transparentButton}
          onPress={() => navigation.navigate('SignUp')} 
        >
          <Text style={styles.transparentButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
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
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 18,
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
});