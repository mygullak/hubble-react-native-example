##  Hubble integration for React Native on webview

for example usage refer [App.tsx](App.tsx)


[![npm version](https://badge.fury.io/js/hubble-react-native-sdk.svg)](https://badge.fury.io/js/hubble-react-native-sdk)

---

### iOS

Add following query schemes in your `Info.plist` file.
```xml
	<key>LSApplicationQueriesSchemes</key>
	<array>
		<string>phonepe</string>
		<string>paytm</string>
		<string>paytmmp</string>
		<string>tez</string>
		<string>credpay</string>
		<string>upi</string>
		<string>BHIM</string>
		<string>ppesim</string>
	</array>
```


### Android

Add following lines in your `AndroidManifest.xml` file.
```xml
    <queries>
        <package android:name="com.phonepe.app" />
        <package android:name="net.one97.paytm" />
        <package android:name="com.google.android.apps.nbu.paisa.user" />
        <package android:name="in.org.npci.upiapp" />
        <package android:name="in.amazon.mShop.android.shopping" />
        <package android:name="com.dreamplug.androidapp" />
    </queries>
```
