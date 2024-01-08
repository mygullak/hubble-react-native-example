/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';

import { launchHubble, setupHubble } from 'hubble-react-native-sdk';

setupHubble({
  authToken: '4444444444',
  appVersion: 'appVersion',
  appBuildNumber: 'appBuildNumber',
  appPackageName: 'appPackageName',
  clientId: 'niyo',
  clientSecret: 'clientSecret',
  env: "prod"
})


function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <Button
        title="Open Flutter"
        onPress={() => launchHubble(

        ).catch(console.error)}
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
