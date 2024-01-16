import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const handlePress = () => {
    setClicked(true);
  };
  const text = clicked ? 'Pause' : 'START';

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Pomodoro</Text>
      <View style={styles.button}>
        <Pressable onPress={handlePress}>
          <Text style={styles.text}>{text}</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    fontSize: 25,
    position: 'absolute',
    top: 10,
    left: 135,
  },
  button: {
    width: 100,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    top: 300,
    left: 145,
  },
  text: {
    fontSize: 20,
  },
});

export default App;
