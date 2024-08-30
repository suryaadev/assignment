import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

export default function DashboardScreen() {
  const [points, setPoints] = useState(0);
  const navigation = useNavigation();
  const user = auth.currentUser;

  const handleWin = () => {
    const newPoints = points + 100;
    setPoints(newPoints);
    navigation.navigate('Score', { points: newPoints });
  };

  const handleLose = () => {
    const newPoints = points - 50;
    setPoints(newPoints);
    navigation.navigate('Score', { points: newPoints });
  };

  const handleBet = () => {
    const betResult = Math.random() < 0.5 ? handleWin() : handleLose();
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.navigate('Login');
    });
  };

  return (
    <View style={styles.container}>
      <Text>Logged in as: {user?.email}</Text>
      <Text style={styles.points}>Points: {points}</Text>

      <TouchableOpacity style={styles.button} onPress={handleWin}>
        <Text style={styles.buttonText}>Win</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLose}>
        <Text style={styles.buttonText}>Lose</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleBet}>
        <Text style={styles.buttonText}>Bet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  points: {
    fontSize: 18,
    marginVertical: 20,
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
