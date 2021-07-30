import axios from 'axios';
import Config from 'react-native-config';

interface IGetWeatherByLatLngDTO {
  latitude: number;
  longitude: number;
}

export interface ILocalWeather {
  coord: { lon: number; lat: number };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

class WeatherService {
  static async getWeatherByLatLng({
    latitude,
    longitude,
  }: IGetWeatherByLatLngDTO): Promise<ILocalWeather> {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Config.WEATHER_API_KEY}&units=metric`,
    );

    return data;
  }
}

export default WeatherService;
