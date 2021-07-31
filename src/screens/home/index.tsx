import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { Text, ActivityIndicator } from 'react-native-paper';
import Dialog from 'react-native-dialog';
import {
  PERMISSIONS,
  request,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { Platform, View } from 'react-native';
import { Icon } from '../../components';
import { Container, Card, TextTitle, Item, ButtonRefresh } from './styles';
import WeatherService, { ILocalWeather } from '../../service/WeatherService';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [weather, setWeather] = useState<ILocalWeather>();

  const [position, setPosition] = useState<GeoPosition>();
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const getLocation = useCallback(async (): Promise<void> => {
    try {
      const resultLocation = await request(
        Platform.select({
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          default: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        }),
      );
      if (resultLocation === RESULTS.GRANTED) {
        setLoading(true);
        Geolocation.getCurrentPosition(
          positionData => {
            setPosition(positionData);
            setLoading(false);
          },
          () => {
            setLoading(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      } else {
        setShowDialog(true);
      }
    } catch (error) {
      setLoading(true);
    }
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      getLocation();
    });
    return unsubscribe;
  }, [getLocation, navigation]);

  useEffect(() => {
    if (position) getWeatherInformation(position);
  }, [position]);

  const getWeatherInformation = async (
    positionNow: GeoPosition,
  ): Promise<void> => {
    const data = await WeatherService.getWeatherByLatLng({
      latitude: positionNow?.coords.latitude,
      longitude: positionNow?.coords.longitude,
    });

    setWeather(data);
  };

  const refreshDate = (): void => {
    getLocation();
  };

  const whetherTextNow = useMemo(() => {
    return weather?.weather ? weather.weather[0].description : '';
  }, [weather?.weather]);

  return (
    <>
      <Container>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Card>
            <View>
              <Item>
                <TextTitle>Wether:</TextTitle>
                <Text>{whetherTextNow}</Text>
              </Item>
              <Item>
                <TextTitle>Temperature:</TextTitle>
                <Text> {weather?.main.temp} </Text>
              </Item>
              <Item>
                <TextTitle>Max temperature:</TextTitle>
                <Text>{weather?.main.temp_max}</Text>
              </Item>
              <Item>
                <TextTitle>Min Temperature:</TextTitle>
                <Text>{weather?.main.temp_min}</Text>
              </Item>
            </View>
            <ButtonRefresh onPress={refreshDate}>
              <Icon source="MaterialIcons" name="refresh" size={40} />
            </ButtonRefresh>
          </Card>
        )}
      </Container>

      <Dialog.Container visible={showDialog}>
        <Dialog.Title>We need your permission</Dialog.Title>
        <Dialog.Description>
          You have not granted us location permission, you need to enable
          manually in the settings.
        </Dialog.Description>
        <Dialog.Button onPress={() => setShowDialog(false)} label="Fechar" />
        <Dialog.Button onPress={openSettings} label="Abrir Ajustes" />
      </Dialog.Container>
    </>
  );
};

export default Home;
