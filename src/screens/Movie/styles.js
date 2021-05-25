import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  headerTextContainer: {
    flex: 3,
    marginLeft: 20,
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 12,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginVertical: 20,
  },
  productionCompanyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginVertical: 10,
  },
  companyTextContainer: {
    flex: 3,
    marginLeft: 12,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
  },
  posterImageStyle: {
    flex: 1,
    borderRadius: 45,
    height: 80,
    alignSelf: 'flex-end',
  },
  overviewContainer: {
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 12,
  },
  overviewHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overviewText: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default styles;
