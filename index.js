/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppLovinMAX, { Configuration } from "react-native-applovin-max";


AppLovinMAX.initialize("UuTVGNTgGIoO6QEsfKJKZfGO4_cf_J5bq4bwWQ1ITOlT9I-NNqFvpWrkP2TTh6eIdSFlbV8mMtr2GGH2aEn3lH").then((conf: Configuration) => {
    AppLovinMAX.showMediationDebugger();
    // SDK is initialized, start loading ads
  }).catch(error => {
    // Failed to initialize SDK
  });
// AppLovinMAX.setCreativeDebuggerEnabled(true);


AppRegistry.registerComponent(appName, () => App);
