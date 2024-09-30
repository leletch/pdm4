import { StyleSheet } from "react-native";

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
      fontSize: 30, 
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
      fontSize: 15,
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