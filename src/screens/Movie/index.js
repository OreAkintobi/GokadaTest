import React, { useEffect } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovie } from '../../store/actions';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '../../components';

import styles from './styles';

const Movie = ({ route }) => {
  const { id, color1, color2 } = route?.params;
  const { movie } = useSelector(
    (state) => state.moviesReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [movie, dispatch]);

  return (
    <LinearGradient
      colors={[color2, color1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={{
                  uri:
                    'https://image.tmdb.org/t/p/w400' +
                    movie?.poster_path,
                }}
                style={styles.posterImageStyle}
                resizeMode="cover"
              />
              <View style={styles.headerTextContainer}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                  }}>
                  {movie?.original_title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text numberOfLines={1}
                    style={{
                      fontSize: 16,
                    }}>
                    {movie?.genres.map((genre) => `${genre?.name}, `)}
                  </Text>
                </View>
              </View>
            </View>

            <Image
              source={{
                uri:
                  'https://image.tmdb.org/t/p/w400' +
                  movie?.backdrop_path,
              }}
              resizeMode="cover"
              style={styles.imageStyle}
            />

            <View style={styles.overviewContainer}>
              <Text style={styles.overviewHeader}>
                Overview
              </Text>
              <Text style={styles.overviewText}>
                {movie?.overview}
              </Text>
            </View>
          </View>

          <View style={styles.container}>
            {movie?.production_companies
              .filter((item) => item.logo_path !== null)
              .map((company) => (
                <View
                  style={styles.productionCompanyContainer}>
                  <Image
                    source={{
                      uri:
                        'https://image.tmdb.org/t/p/w400' +
                        company?.logo_path,
                    }}
                    style={{ flex: 1 }}
                    resizeMode="contain"
                  />
                  <View style={styles.companyTextContainer}>
                    <Text>{company.name}</Text>
                    <Text>{company.origin_country}</Text>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Movie;
