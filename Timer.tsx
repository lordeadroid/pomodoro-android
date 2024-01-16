import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = () => {
  const [time, setTime] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time <= 0) {
        return;
      }
      setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View style={styles.timer}>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    position: 'absolute',
    top: 200,
  },
  text: {
    fontSize: 25
  },
});

export default Timer;
