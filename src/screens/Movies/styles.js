import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  listContainer: {
    flex: 1,
    marginTop: 18,
  },
  imageContainer: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 0,
    height: 90,
    paddingVertical: 8,
  },
  imageStyle: {
    borderRadius: 12,
    flex: 1,
  },
  textContainer: {
    flex: 3,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 17,
    paddingRight: 16,
    fontWeight: 'bold',
    elevation: 5,
  },
  bodyText: {
    fontSize: 14,
    paddingRight: 16,
    fontWeight: 'bold',
    elevation: 5,
  },
});

export default styles;
