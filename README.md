# Sunbird-AIAssistant

The Sunbird-AIAssistant mobile app is a versatile platform allowing users to seamlessly search, play, like, and share various types of content. It features chat functionality with three distinct bots—Story Bot for storytelling, Parent Assistant for parent-child engagement, and Teacher Assistant for educational support. The app also includes a 'My Pitara' feature enabling users to create personalized playlists. With a user-friendly interface and a blend of entertainment and education, the app aims to offer a holistic and interactive experience for diverse user needs.

# 💻 Tech Stack:
![TypeScript](https://img.shields.io/badge/typescript-%233772ff.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Ionic](https://img.shields.io/badge/ionic-%233772ff.svg?style=for-the-badge&logo=ionic&logoColor=white) ![Capacitor](https://img.shields.io/badge/capacitor-%230b9dff.svg?style=for-the-badge&logo=capacitor&logoColor=white) ![Cordova](https://img.shields.io/badge/Cordova-35434F?style=for-the-badge&logo=apache-cordova&logoColor=E8E8E8) ![Angular](https://img.shields.io/badge/angular-%23d6002f.svg?style=for-the-badge&logo=angular&logoColor=white) ![Android](https://img.shields.io/badge/android-%239fc037.svg?style=for-the-badge&logo=android&logoColor=white)
![Sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

## Functionalities
* Content Discovery
  * Search 
  * Filter
  * Qr Scan
  * Like
  * Share
* Language Selection 
* Bots
  * Story Bot
  * Parent Bot
  * Teacher Bot
* My Pitara
    * Recently Viewed Contents
    * Playlist   
        * Upload from Youtube 
        * Upload local files
        * Upload from Diksha
* Telemetry Sync


**Prerequisites:**
|Package| Version | Recommended  Version |
|--|--|--|
[Node](https://nodejs.org/en/) | 18+ | 18.16.1
[NPM](https://nodejs.org/en/) | 9+ | 9.5.1
[Capacitor](https://capacitorjs.com/) | 5+ | 5.5.1
[Ionic](https://ionicframework.com/docs/intro/cli) | 7 | 7.2.0
[Java(For Android)](https://www.oracle.com/in/java/technologies/downloads/) | 17+ | 17.0.5
[Gradle(For Android)](https://gradle.org/install/) | 8+ | 8.5

**Project Setup**

**1. Ionic-Android build Setup**    
    - [Install java](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)    
    - [Install Gradle](https://gradle.org/install/)    
    - [Install Android Studio](https://developer.android.com/studio/)   
    - After Android studio installation, install SDK    
    - Open Android studio and goto `settings/appearance and behavior/system settings/Android SDK`    
    - Install appropriate Android sdk platform package.    
    - Add environment variables in `~/.bashrc` or `~/.bash_profile` as follows    
        ```export ANDROID_SDK_ROOT=path_to_sdk```    
        ```export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin```    
        ```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```    
    - Reference: https://ionicframework.com/docs/installation/android    
 
    CLI Setup    
    - `npm install -g ionic`   
    - `npm install -g capacitor`  
 
**2. Project Setup**    
    - git clone the repo(https://github.com/Sunbird-AIAssistant/djp-mobile-app.git).    
    - Rename `config.properties.example` file to `config.properties` and put all the valid credentials and api endpoint.   

    - Run `./build.sh`    
    - npm i
    - npx cap add android

    <!-- for windows -->
    install git-bash https://git-scm.com/download/win and run `./build.sh`

**3. How to build apk**    
   - To check attached devices do `adb devices`    
   - `npm run ionic-build` (Make sure you have attached device)    
   - Apk location `project_folder/android/app/build/outputs/apk/apk_debug.apk`    
   
**3. How to update or add new appicon** 
    - Add the new icon.png file in assets folder in project root 
    - icon resolution should be 1024x1024
    - Run `npx @capacitor/assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222'`
    github reference - https://github.com/ionic-team/capacitor-assets

**5. How to debug apk**    

   - Open chrome and enter `chrome://inspect`    
    - Select app    
