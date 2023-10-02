import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import Home from './screens/Home';
import Router from './navigation/Router';

export default function App() {
  return (
    <View style={styles.container}>
     <Home/>    
      <Router />   
      <StatusBar backgroundColor='#9cecf0' barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
    marginHorizontal:3,
  },
});
