/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  NativeModules,
  StyleSheet,
  View
} from 'react-native';

import { openHubble } from 'hubble-react-native-sdk';


function App(): React.JSX.Element {
  console.log(NativeModules.HubbleFlutterUI);

  return (
    <View style={styles.container}>
      <Button
        title="Open Flutter"
        onPress={() => openHubble(
          {
            authToken: '4444444444',
            appVersion: 'appVersion',
            appBuildNumber: 'appBuildNumber',
            appPackageName: 'appPackageName',
            clientId: '',
            clientSecret: 'clientSecret',
          }
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});


export default App;
