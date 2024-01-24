/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import WebView from 'react-native-webview';



const HubbleWebview = () => {
  const injectedJavaScriptBeforeContentLoaded = `
      window.hubbleParams = function() {
        return  JSON.stringify(
          {  
            authToken: '4444444444',
            appVersion: 'appVersion',
            appBuildNumber: 'appBuildNumber',
            appPackageName: 'appPackageName',
            clientId: 'niyo',
            clientSecret: 'clientSecret',
            env: "prod"
          }
        );
      }
  `;

  // Add safe areas add needed
  return <WebView
    webviewDebuggingEnabled={true} // Disable at your end
    source={{ uri: 'https://gullak-18d3b.web.app/#/' }}
    injectedJavaScriptBeforeContentLoaded={injectedJavaScriptBeforeContentLoaded}
    style={{ flex: 1 }}
  />;
}
function App(): React.JSX.Element {

  return <HubbleWebview />

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
