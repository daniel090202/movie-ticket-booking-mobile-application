import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const UserAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>User Account Screen</Text>
    </View>
  );
};

export default UserAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
