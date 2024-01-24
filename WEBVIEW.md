

```javascript
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import WebView from 'react-native-webview';



const HubbleWebview = () => {
  // Interpolate and construct following inject for webview
  const injectedJavaScriptBeforeContentLoaded = `
      window.hubbleParams = function() {
        return  JSON.stringify(
          {  
            authToken: 'yourToken',
            appVersion: 'appVersion',
            appBuildNumber: 'appBuildNumber',
            appPackageName: 'appPackageName',
            clientId: 'testclient',
            clientSecret: 'clientSecret',
            env: "prod"
          }
        );
      }
  `;

  // Add safe areas if needed
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
```
