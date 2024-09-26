import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function SignUpScreen() {
  return (
    <ImageBackground source={require('./assets/fundo2.png')} style={styles.background}>
      {/* Seção de boas-vindas no canto superior esquerdo */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.text}>Create</Text>
        <Text style={styles.text}>Account</Text>
      </View>

      <View style={styles.container}>
        {/* Campo de Nome Completo */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
        />

        {/* Campo de RA */}
        <TextInput
          style={styles.input}
          placeholder="RA"
          placeholderTextColor="#aaa"
        />

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
          secureTextEntry={true} // Oculta o texto (modo senha)
        />

        {/* Campo de Confirmar Senha */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true} // Oculta o texto (modo senha)
        />

        {/* Botão de Cadastro */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  welcomeContainer: {
    paddingTop: 150,
    paddingLeft: 20, 
  },
  text: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20, 
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%', 
  },
  button: {
    backgroundColor: '#4300dd', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
