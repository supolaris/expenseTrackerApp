import { StyleSheet, Text, View } from 'react-native';
import { NativeStack } from './src/components/navigation/nativeStack/nativeStack';

export default function App() {
  return (

      <NativeStack />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
