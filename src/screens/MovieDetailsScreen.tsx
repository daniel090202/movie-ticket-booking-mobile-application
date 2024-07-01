import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Movie Details Screen</Text>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
