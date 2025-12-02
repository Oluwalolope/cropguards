// ==== Types ====

import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun, type LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface CurrentData {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  precipitation: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
}

interface DailyData {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
}

interface HourlyData {
  time: string[];
  weather_code: number[]
  temperature_2m: number[];
}

interface WeatherApiResponse {
  current: CurrentData;
  daily: DailyData;
  hourly: HourlyData;
}

// Output types
export interface CurrentForecast {
  forecast: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  weatherCondition: string;
  color: string;
  day: string;
  apparentTemperature: number;
  windSpeed: number;
  humidity: number;
}

export interface DailyForecast {
  forecast: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  day: string;
  temp: string;
  color: string;
}


// ==== Helper: Map WMO codes → forecast ====
const getForecastFromWMO = (code: number) => {
  if (code === 0) return { forecast: Sun, color: 'text-amber-500', weatherCondition: 'sunny' };
  if ([1, 2, 3].includes(code)) return { forecast: Cloud, color: 'text-gray-500', weatherCondition: 'partly cloudy' };
  if ([45, 48].includes(code)) return { forecast: CloudFog, color: 'text-neutral-500', weatherCondition: 'foggy'};
  if (code >= 51 && code <= 57) return { forecast: CloudDrizzle, color: 'text-blue-300', weatherCondition: 'drizzling'};
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return { forecast: CloudRain, color: 'text-blue-500', weatherCondition: 'rainy'};
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return { forecast: CloudSnow, color: 'text-blue-200', weatherCondition: 'snowy'};
  if (code >= 95 && code <= 99) return { forecast: CloudLightning, color: 'text-yellow-300', weatherCondition: 'stormy'};
  return { forecast: CloudSun, color: 'text-amber-300', weatherCondition: 'cloudy' };
};

// ==== Transformer Function ====
const transformWeatherData = (data: WeatherApiResponse): {
  currentForecast: CurrentForecast;
  dailyForecast: DailyForecast[];
} => {
  // === CURRENT FORECAST ===
  const todayIndex = 0;
  const currentDate = new Date(data.current.time);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  };

  const { forecast, color, weatherCondition } = getForecastFromWMO(data.daily.weather_code[todayIndex]);

  const currentForecast: CurrentForecast = {
    forecast,
    color,
    weatherCondition,
    day: currentDate.toLocaleDateString("en-US", options),
    apparentTemperature: Math.round(data.current.apparent_temperature),
    windSpeed: Math.round(data.current.wind_speed_10m),
    humidity: Math.round(data.current.relative_humidity_2m)
  };

  // === DAILY FORECAST ===
  const dailyForecast: DailyForecast[] = data.daily.time.map((dateStr, i) => {
    const d = new Date(dateStr);
    const day = d.toLocaleDateString("en-US", { weekday: "short" });
    const { forecast, color } = getForecastFromWMO(data.daily.weather_code[i]);

    return {
        day,
        forecast,
        temp: `${Math.round(data.daily.temperature_2m_max[i])}°`,
        color
    };
  });


  return { currentForecast, dailyForecast };
}

export default transformWeatherData;