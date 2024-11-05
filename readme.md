<p align="center">
  
</p>

# CodeceptJS 3 ‐ Supercharged End 2 End Testing

## Boilerplate project based on [CodeceptJS](https://codecept.io/)

### General requirements

- Install a git client such as [git bash](https://git-scm.com/downloads)

Download and install

- Latest version of [Node.js](https://nodejs.org/es/download/)

### Requirements Mobile

Descargar e instalar

- Java Development Kit [(JDK)](https://www.oracle.com/java/technologies/downloads/)
  - Make sure you have the environment variable **JAVA_HOME** set to the path of the respective JDK.
- [Appium](https://appium.io/downloads/) Desktop.
- [Android Studio](https://developer.android.com/studio/index.html) and inside the app install.
  - **SDK Platform**: Android 10 or the required version.
  - **SDK tools**:
    - Android SDK Build Tools.
    - Andorid SDK Command Line Tools.
    - Android Emulator.
    - Android SDK Platform-tools.
    - Intel x86 Emulator accelerator.
  - Configure at least one emulator from **Android Virtual Device Manager**.
  - Make sure to add the following environment variables:
    - **ANDROID_HOME**: Add the directory where the Android SDK is located, for example: **C:\Users\USERNAME\AppData\Local\Android\Sdk**.
    - Then respecting the order add these environment variables:
      - **%ANDROID_HOME%**\emulator
      - **%ANDROID_HOME%**\platform-tools
      - **%ANDROID_HOME%**\tools
      - **%ANDROID_HOME%**\tools\bin
  - Starting the emulator from the command line:
    - List installed emulators:
      - emulator -list-avds
    - Iniciar el emulador:
      - emulator @emulator_name
    - As an alternative to any error it can be started with the following command: **%ANDROID_HOME%**\emulator\emulator.exe -avd <emulator_name>
- **Appium Doctor**: To validate that we have everything necessary to carry out our mobile tests, we must install and execute.

  - npm install -g appium-doctor
    - This will install the utility that will allow us to validate that everything is correctly configured.
  - appium-doctor --android
    - If we have correctly carried out all the steps above with this command, a success message and some warnings will be displayed.
    - In case of a blocking error, it will be displayed on the screen, it must be corrected and re-executed until everything is ok.

- APK to test.
  - We use for the example [the apk](https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk) provided by WebdriverIO.
  - You can run the following from the command line as an alternative:
    - curl <https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk> --output Android-NativeDemoApp-0.4.0.apk
  - For the example to work, the apk must be inside the folder **/app** in the base of our project with the name configured in the capability **app** of the file [*codecept.conf.js*](codecept.conf.js).

### Installation of the testing framework

#### **Clone the repository:**

```bash
git clone https://github.com/DiegoJOFernandes/starter-codeceptjs.git
```

#### **Install dependencies.**

```bash
npm install
```

#### **To run the test go to the root of the project and run**

```bash
npm run codeceptjs
```

#### **To create and open Allure-Report with test results**

```bash
npm run open-report
```
