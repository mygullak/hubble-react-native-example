##  Hubble integration for React Native
Example React Native app that integrates with Hubble SDK. Hubble is written in flutter and this example shows how to integrate flutter based SDK in React Native app.

[![npm version](https://badge.fury.io/js/hubble-react-native-sdk.svg)](https://badge.fury.io/js/hubble-react-native-sdk)

---

### iOS

> `Note`:  iOS binaries are shipped as **release*** in latest tag of npm package. if you need debug version of framework, please install npm package with @debug tag. (SDK won't work on release mode in iOS simulator)

```
npm install
npm install hubble-react-native-sdk

cd ios
pod install

```

When updating hubble-react-native-sdk
```
cd ios
pod install
pod update HubbleFrameworks_Release --no-repo-update
```

Once installed

Your pods project should detect hubble-react-native-sdk and install it.

But hubble requires **few more steps** to get it working for your iOS project.

import helper ruby file that's shipped with sdk in your `ios/Podfile`

```ruby

# add this line
require_relative '../node_modules/hubble-react-native-sdk/hubble_ios_frameworks/hubble_import_helper'

# ...

target 'myapp' do
   # add this line
   install_hubble_modules!()

   post_install do |installer|
      # ....

      # add this line
      hubble_post_install(installer)
   end
end

```

Once done 

run
```
pod install
pod update HubbleFrameworks_Release --no-repo-update
```



After this **open your iOS project in xcode** code link/copy libraries

<image src="docs/linking.png">

Make sure copy settings are correct in your build settings.

<image src="docs/framework_copy.png">

--------------

### Android
to run
```
npm i 
npm run android

```

integrating in your react native app

1.  install `hubble-react-native-sdk` through npm



2. Add the following to your `android/settings.gradle` file:

```gradle
// ...
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    repositories {
        google()
        mavenCentral()
        // Add the new repositories starting on the next line...
        maven {
            url '../node_modules/hubble-react-android-binaries/android_libs/repo'
            // This is relative to the location of the build.gradle file
            // if using a relative path.
        }
        maven {
            url 'https://storage.googleapis.com/download.flutter.io'
        }
    }
}
```
This let's your project pickup dependencies from local maven repo.


3. Remove `repositories` section from `android/build.gradle` file (if it is present).



Example react component
   
   ```javascript
/// ...
import { launchHubble, setupHubble } from 'hubble-react-native-sdk';

setupHubble({
  authToken: '4444444444',
  appVersion: 'appVersion',
  appBuildNumber: 'appBuildNumber',
  appPackageName: 'appPackageName',
  clientId: 'niyo',
  clientSecret: 'clientSecret',
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

```
---

Ran into issues? [File an issue](https://github.com/mygullak/hubble-react-native-example/issues/new) and be available to answer questions. 

Active issues:
 - [ ] Events are not sent back to react native end atm  
