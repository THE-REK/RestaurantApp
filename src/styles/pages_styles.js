import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

const detail_item = StyleSheet.create({
  logo: {
    height: deviceSize.height / 4,
    borderRadius: 8,
  },
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    margin: 5,
    marginVertical: 10,
    borderRadius: 10,
    padding: 8,
  },
  title1: {
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold',
  },
  title2: {
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
  },
  button: {
    color: 'red',
    marginTop: 5,
  },
});
export {detail_item};
