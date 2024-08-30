import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ScoreScreen() {
  const route = useRoute();
  const { points } = route.params;  // Get the updated points passed from DashboardScreen
  const navigation = useNavigation();

  const handlePlayAgain = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Points: {points}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePlayAgain}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text:{
    textAlign:'center',
    fontSize: 24,
    marginBottom:20
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%', // Adjust the width as needed
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
