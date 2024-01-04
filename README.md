# Hubble integration for React Native

to run
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

But hubble requires few more steps to get it working for your iOS project.

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

After this get onto xcode and build your project.
