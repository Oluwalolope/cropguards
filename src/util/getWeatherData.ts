import transformWeatherData from "./transformWeatherData";

const getWeatherData = async (
  latitude: string | number,
  longitude: string | number
) => {
  const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=temperature_2m,is_day,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&hourly=weather_code`;

  try {
    const weatherResponse = await fetch(weatherURL);
    const weatherResult = await weatherResponse.json();
    if (!weatherResponse.ok) {
      throw new Error("Failed to get weather data");
    }

    // context.handleChange("isValidLocation", true);

    const { currentForecast, dailyForecast } = transformWeatherData(weatherResult);
    return { currentForecast, dailyForecast }
  } catch (error) {
    console.log(error);
    // context.handleChange("isValidLocation", false);
    // context.handleChange("isServerWorking", false);
  }
};

export default getWeatherData;
