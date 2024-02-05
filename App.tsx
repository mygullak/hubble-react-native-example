/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import {
  BackHandler,
  Button,
  SafeAreaView
} from 'react-native';
import WebView from 'react-native-webview';

type HubbleENV = 'debug' | 'prod';
type HubbleParams = {
  authToken: string;
  appVersion: string;
  appBuildNumber: string;
  appPackageName: string;
  clientId: string;
  clientSecret: string;
  env: HubbleENV;
}



const HubbleWebview = ({ navigation }: any) => {

  const paramsStr = JSON.stringify(
    {
      authToken: 'something',
      appVersion: 'appVersion',
      appBuildNumber: 'appBuildNumber',
      appPackageName: 'appPackageName',
      clientId: 'something',
      clientSecret: 'something',
      env: 'debug'
    } as HubbleParams
  );
  const injectedJavaScriptBeforeContentLoaded = `
    window.hubbleParams = function() {
      return '${paramsStr}';
    };
  `;

  const webViewRef = useRef<WebView>(null);

  /// Route back press to webview
  const handleBackButtonPress = () => {
    try {
      webViewRef.current?.injectJavaScript("window.hubbleBackButtonPressed()")
    } catch (err) {
      console.log("[handleBackButtonPress] Error : ", err)
    }

    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress)
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonPress)
    };
  }, []);


  // Add safe areas add needed
  return <SafeAreaView style={{ flex: 1 }}>
    <WebView
      ref={webViewRef}
      webviewDebuggingEnabled={true} // Disable at your end
      cacheEnabled={false} // Disable at your end
      source={{ uri: 'https://store.myhubble.money' }}
      injectedJavaScriptBeforeContentLoaded={injectedJavaScriptBeforeContentLoaded}
      setSupportMultipleWindows={true}
      onMessage={(event) => {
        /// Listen to messages from webview

        const data = JSON.parse(event.nativeEvent.data);
        if (data.type === "closeHostView") {
          navigation.goBack();
        }
      }}
      javaScriptCanOpenWindowsAutomatically={true}
    />
  </SafeAreaView>
}


const HomeScreen = ({ navigation }: any) => {
  return (
    <Button
      title="Open webview"
      onPress={() => navigation.navigate('Hubble')}
    />
  );
}


const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Hubble" component={HubbleWebview} />
    </Stack.Navigator>
  </NavigationContainer>;
}

export default App;
