import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native-web';

const MyComponent = () => {
  const [text, setText] = React.useState('');

  return (
    <View>
    <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon name="eye" />}
    />
    </View>
  );
};

export default MyComponent;