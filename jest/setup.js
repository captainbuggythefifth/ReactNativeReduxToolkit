import React from 'react';
import ReactNative from 'react-native';
/* import 'react-native-gesture-handler/jestSetup'; */
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';


/* jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper'); */

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);


// Switch Mock

/* const Switch = function(props) {
  const [value, setValue] = React.useState(props.value)

  return (
    <ReactNative.TouchableOpacity
      onPress={() => {
        props.onValueChange(!value)
        setValue(!value)
      }}
      testID={props.testID}
      value={value}>
      <ReactNative.Text>{value.toString()}</ReactNative.Text>
    </ReactNative.TouchableOpacity>
  )
}

Object.defineProperty(ReactNative, 'Switch', {
  get: function() {
    return Switch
  }
}); */
