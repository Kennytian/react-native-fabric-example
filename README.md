# react-native-fabric-example
react native fabric example(iOS/Android)

## Android

* Edit `android/settings.gradle` to look like this:
 ```diff
  rootProject.name = 'testFabric'

  include ':app'

  + include ':react-native-fabric'
  + project(':react-native-fabric').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-fabric/android')
  ```

* Edit your `android/build.gradle` to look like this:

 ```diff
buildscript {
    repositories {
        jcenter()
+       maven { url 'https://maven.fabric.io/public' }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.0-beta3'
+       classpath 'io.fabric.tools:gradle:1.+'
    }
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            url '$rootDir/../node_modules/react-native/android'
        }
+       maven { url 'https://maven.fabric.io/public' }
    }
}
```

* Edit `android/app/build.gradle` (note: **app** folder) to look like this:

```diff
apply plugin: 'com.android.application'
+   apply plugin: 'io.fabric'

android {
...
}

dependencies {
    compile 'com.android.support:appcompat-v7:23.0.0'
    compile 'com.facebook.react:react-native:0.19.+'
+       compile project(':react-native-fabric')
    // below 3 lines is options, enable NDK crash reporting
+       compile('com.crashlytics.sdk.android:crashlytics:2.6.2@aar') {
+           transitive = true;
+       }
}
```

* Edit `android/app/src/main/AndroidManifest.xml` to look like this:

```diff
<application
        android:name=".MainApplication"
        android:allowBackup="true"
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher"
        android:theme="@style/AppTheme">
+        <meta-data android:name="io.fabric.ApiKey" android:value='YOUR KEY'/>
    <activity
            android:name=".MainActivity"
            android:label="@string/app_name"
```

* React Native 0.29+ - Edit your `MainApplication.java` (deep in `android/app/src/main/java/...`) to look like this (note **two** places to edit):

```diff
package com.testfabric;

+   import com.smixx.fabric.FabricPackage;
+   import io.fabric.sdk.android.Fabric;
+   import com.crashlytics.android.Crashlytics;

public class MainApplication extends Application implements ReactApplication {

+   @Override
+   public void onCreate() {
+       super.onCreate();
+       Fabric.with(this, new Crashlytics());
+   }

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
+           new FabricPackage(),
        new MainReactPackage()
    );
}
}
```

## iOS
TODO