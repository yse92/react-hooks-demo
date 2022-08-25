import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
  },
  headers: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  descriptionHeader: {
    textAlign: 'center',
    fontSize: 20
  },
  descriptionText: {
    alignSelf: 'center',
  },
  itemText: {
    marginBottom: 20
  }
})

export {styles}
