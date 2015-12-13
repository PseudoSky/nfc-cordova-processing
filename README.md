# Bake MeHoff

I added a conditional statement that will make it ignore if your phone / computer dont have NFC. So we can just get the UI working with the browser.

We need to find or write a light sensor plugin

*[Cordova Plugins](https://cordova.apache.org/plugins/)

*[Processing Javascript Tutorial](http://processingjs.org/articles/p5QuickStart.html)

## To Install

You need node, cordova, bower(optional)

```
	npm install -g cordova
	npm install -g bower
```

I think that might be it


## To run
You might need to install more stuff before this (don't feak out if you do)
```
	cordova run
```

Should output something like this

>
	Running command: <%working_directory%>/platforms/android/cordova/run
	Running command: <%working_directory%>/platforms/browser/cordova/run
	Static file server running on port 8000 (i.e. http://localhost:8000)
	CTRL + C to shut down
	Static file server running @ http://localhost:8000/index.html
	CTRL + C to shut down
	Executing command: open -n -a "Google Chrome" --args --user-data-dir=/tmp/temp_chrome_user_data_dir_for_cordova http://localhost:8000/index.html
	gzip
	200 /index.html (<%working_directory%>/platforms/browser/www/index.html)
	gzip
	200 /css/index.css (<%working_directory%>/platforms/browser/www/css/index.css)
	gzip
	200 /cordova.js (<%working_directory%>/platforms/browser/www/cordova.js)
	gzip
	200 /img/logo.png (<%working_directory%>/platforms/browser/www/img/logo.png)
	gzip
	200 /js/index.js (<%working_directory%>/platforms/browser/www/js/index.js)
	gzip
	200 /cordova_plugins.js (<%working_directory%>/platforms/browser/www/cordova_plugins.js)
	gzip
	200 /js/lib/processing.js (<%working_directory%>/platforms/browser/www/js/lib/processing.js)
	gzip
	200 /js/src/bake.pde (<%working_directory%>/platforms/browser/www/js/src/bake.pde)
	ANDROID_HOME=<%android_sdk_directory%>/android-sdk
	JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home
	WARNING : No target specified, deploying to device 'ee9aba5b'.
	Running: <%working_directory%>/platforms/android/gradlew cdvBuildDebug -b <%working_directory%>/platforms/android/build.gradle -PcdvBuildArch=arm -Dorg.gradle.daemon=true
	:preBuild
	:compileDebugNdk UP-TO-DATE
	:preDebugBuild
	:checkDebugManifest
	:CordovaLib:compileLint
	:CordovaLib:copyDebugLint UP-TO-DATE
	:CordovaLib:mergeDebugProguardFiles UP-TO-DATE
	:CordovaLib:preBuild
	:CordovaLib:preDebugBuild
	:CordovaLib:checkDebugManifest
	:CordovaLib:prepareDebugDependencies
	:CordovaLib:compileDebugAidl UP-TO-DATE
	:CordovaLib:compileDebugRenderscript UP-TO-DATE
	:CordovaLib:generateDebugBuildConfig UP-TO-DATE
	:CordovaLib:generateDebugAssets UP-TO-DATE
	:CordovaLib:mergeDebugAssets UP-TO-DATE
	:CordovaLib:generateDebugResValues UP-TO-DATE
	:CordovaLib:generateDebugResources UP-TO-DATE
	:CordovaLib:packageDebugResources UP-TO-DATE
	:CordovaLib:processDebugManifest UP-TO-DATE
	:CordovaLib:processDebugResources UP-TO-DATE
	:CordovaLib:generateDebugSources UP-TO-DATE
	:CordovaLib:compileDebugJava UP-TO-DATE
	:CordovaLib:processDebugJavaRes UP-TO-DATE
	:CordovaLib:packageDebugJar UP-TO-DATE
	:CordovaLib:compileDebugNdk UP-TO-DATE
	:CordovaLib:packageDebugJniLibs UP-TO-DATE
	:CordovaLib:packageDebugLocalJar UP-TO-DATE
	:CordovaLib:packageDebugRenderscript UP-TO-DATE
	:CordovaLib:bundleDebug UP-TO-DATE
	:prepareAndroidCordovaLibUnspecifiedDebugLibrary UP-TO-DATE
	:prepareDebugDependencies
	:compileDebugAidl UP-TO-DATE
	:compileDebugRenderscript UP-TO-DATE
	:generateDebugBuildConfig UP-TO-DATE
	:generateDebugAssets UP-TO-DATE
	:mergeDebugAssets
	:generateDebugResValues UP-TO-DATE
	:generateDebugResources UP-TO-DATE
	:mergeDebugResources UP-TO-DATE
	:processDebugManifest UP-TO-DATE
	:processDebugResources
	:generateDebugSources
	:compileDebugJava UP-TO-DATE
	:preDexDebug UP-TO-DATE
	:dexDebug UP-TO-DATE
	:processDebugJavaRes UP-TO-DATE
	:validateDebugSigning
	:packageDebug
	:zipalignDebug
	:assembleDebug
	:cdvBuildDebug

	BUILD SUCCESSFUL


