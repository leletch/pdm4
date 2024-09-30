import { StyleSheet } from "react-native";

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
    
  });