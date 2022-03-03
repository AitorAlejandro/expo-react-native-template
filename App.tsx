import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {styles} from './App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
