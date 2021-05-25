import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '../../components';

import styles from './styles';

const Movies = ({ navigation }) => {
  const { movies } = useSelector(
    (state) => state.moviesReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies.length) {
      dispatch(getMovies());
    }
  }, [movies, dispatch]);

  const colors = [
    '#e9305f',
    '#1ae9ba',
    '#7c0cff',
    '#f8810c',
    '#d311ad',
    '#1168ff',
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            const IMAGE_URL =
              'https://image.tmdb.org/t/p/w185' +
              item.poster_path;
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('Movie', {
                    id: item.id,
                    color1: `${
                      colors[index % colors.length]
                    }FF`,
                    color2: `${
                      colors[index % colors.length]
                    }4D`,
                    title: item.title,
                  })
                }
                style={{
                  marginVertical: 10,
                }}>
                <LinearGradient
                  colors={[
                    `${colors[index % colors.length]}FF`,
                    `${colors[index % colors.length]}4D`,
                  ]}
                  style={{
                    flex: 1,
                    borderRadius: 18,
                  }}>
                  <View
                    style={{
                      paddingVertical: 12,
                    }}>
                    <View style={styles.imageContainer}>
                      <Image
                        source={{
                          uri: IMAGE_URL,
                        }}
                        resizeMode="contain"
                        style={styles.imageStyle}
                      />
                      <View style={styles.textContainer}>
                        <Text style={styles.titleText}>
                          {item.title}
                        </Text>
                        <Text style={styles.bodyText}>
                          Movie
                        </Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Movies;
