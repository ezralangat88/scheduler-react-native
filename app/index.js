import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    //We are rendering native mobile components instead of html elements using JSX syntax
    //View - used to create container or "view" for other components. It holds other components. It's like <div> with added functionalities. 
    // Used to create layout structures for other components. Has other Props
    /* ActivityIndicator - used for showing a spinner or loading indicator
       TouchableOpacity - button
       Flatlist - rendering long list that need to be scrolled efficiently, has item separation
       ScrollView - like a box holding multiple components and views, providing a scrolling container for them - like overflow: scroll in html
       SafeAreaView - provides a safe zone to render your app's content without being covered by devices hardware features like notch, home indicator and status bar
      */
    return (
      <View style={styles.container}>
        <Text>Hurray!!!</Text>
        <StatusBar style="auto" />
      </View>
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
  