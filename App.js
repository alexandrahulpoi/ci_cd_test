/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, Button, View} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

const App = () => {
  useEffect(() => {
    const checkPrevSession = async () => {
      const didCrash = await Crashes.hasCrashedInLastSession();
      if (didCrash) {
        const report = await Crashes.lastSessionCrashReport();
        console.log(report);
        alert("Sorry about that crash, we're working on a solution");
      }
    };
    checkPrevSession();
  }, []);

  return (
    <View style={styles.screen}>
      <Button
        style={styles.btn}
        title="Event"
        onPress={() => Analytics.trackEvent('some event')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 20,
  },
});

export default App;
