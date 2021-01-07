import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
const category_item = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    marginVertical: 10,
    borderRadius: 10,
    margin:10,
    flex:1
  },
  logo: {
    height: deviceSize.height / 6,
    width: deviceSize.width / 3,
    alignSelf:"center"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
  },
});

const meal_item = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    margin: 20,
    marginVertical: 10,
    borderRadius: 10,
    padding: 8,
  },
  logo: {
    height: deviceSize.height / 3,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  title_view: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
});

export {category_item, meal_item};
