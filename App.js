import React from 'react'
import { View, StyleSheet} from 'react-native'
import FormVisa from './components/FormVisa'


const App = () => {
  return (
    <View style={styles.container}>
      <FormVisa />
      
    </View>
       
  );
      
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
