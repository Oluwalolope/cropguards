import {
  Droplets,
  Wind,
  TrendingUp,
  AlertCircle,
  Calendar,
  Sprout,
  User,
  Bell,
  Settings,
  LogOut,
  MapPin,
  Zap,
  X,
  Menu,
  Space,
} from "lucide-react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { redirect, useNavigate } from "react-router";
import fetchLocation from "../util/fetchLocation";
import getWeatherData from "../util/getWeatherData";
import type { CurrentForecast, DailyForecast } from "../util/transformWeatherData";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useAuth from "../hooks/useAuth";

type weatherData = {
  currentForecast: CurrentForecast;
  dailyForecast: DailyForecast[];
}

const FarmerDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<weatherData>();

  const handleClick = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };
  
  const navigate = useNavigate();
  const { user, setAuthStatus } = useAuth();

  const handleLogout = () => {
    setAuthStatus(false);
    navigate('/');
  }

  useEffect(() => {
    const farmerLocation = `${user.state}, Nigeria`;
    const searchURL = `https://geocoding-api.open-meteo.com/v1/search?name=${farmerLocation}&count=5&language=en&format=json`;

    const fetchWeather = async () => {
      const location = await fetchLocation(searchURL);

      const weatherData = await getWeatherData(
        location!.latitude,
        location!.longitude
      );

      
      setWeatherData(weatherData)
    }

    fetchWeather();
  }, [user.state])


  let TodayWeatherIcon = Space;
  
  if (weatherData) {
    TodayWeatherIcon = weatherData.currentForecast.forecast;
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-row items-center justify-between min-h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3BAA64] rounded-xl flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl text-gray-900">CropGuards</h1>
                <p className="text-xs text-gray-500">Farmer Dashboard</p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <button title="notifications" className="relative p-2 text-gray-600 hover:text-[#3BAA64] transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button title="settings" className="p-2 text-gray-600 hover:text-[#3BAA64] transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div title="user" className="w-10 h-10 bg-[#3BAA64]/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-[#3BAA64]" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm text-gray-900">{user.first_name}</p>
                  <p className="text-xs text-gray-500">{user.state}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          {/* Mobile Menu Button */}
          <button className="sm:hidden p-2" onClick={handleClick}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
          </div>


          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bg-white shadow-sm rounded-md mx-auto w-[70%] min-h-16 flex flex-col gap-10 top-20 right-6 lg:hidden z-50"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col gap-6 pt-2">
                    <button className="inline-flex items-center justify-between">
                      <span>Notifications</span>
                      <div className="relative p-2 text-gray-600 hover:text-[#3BAA64] transition-colors">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                      </div>
                    </button>

                    <button className="p-2 text-gray-600 hover:text-[#3BAA64] transition-colors inline-flex items-center justify-between">
                      <span>Settings</span>
                      <Settings className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#3BAA64]/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-[#3BAA64]" />
                      </div>
                      <div className="block">
                        <p className="text-sm text-gray-900">
                          {user.first_name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user.state}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="p-2 text-red-500 inline-flex items-center justify-between"
                      title="Logout"
                    >
                      <span>Logout</span>
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl text-gray-900 mb-2">
            Good Morning, {user.username}
          </h2>
          <p className="text-gray-600">
            Here&apos;s what&apos;s happening with your farm today
          </p>
        </div>

        {/* Weather Alert Banner */}
        <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl p-6 mb-8 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl mb-2">Weather Alert</h3>
              <p className="text-white/90 mb-4">
                Light rain expected in the next 3 days. Good time to plant maize
                and beans. Soil moisture will be optimal.
              </p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-full hover:bg-white/90 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Weather Today */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            {weatherData && <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">{weatherData?.currentForecast.day}</h3>
              {weatherData && <TodayWeatherIcon
                className={`w-8 h-8 ${weatherData.currentForecast.color}`}
              />}
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl text-gray-900">
                {weatherData?.currentForecast.apparentTemperature}°C
              </span>
              <span className="text-gray-500 capitalize">
                {weatherData?.currentForecast.weatherCondition}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Droplets className="w-4 h-4" />
                <span>{weatherData?.currentForecast.humidity}%</span>
              </div>
              <div className="flex items-center gap-1">
                <Wind className="w-4 h-4" />
                <span>{weatherData?.currentForecast.windSpeed} km/h</span>
              </div>
            </div>
            </>
            }
            {!weatherData && <Skeleton count={5} />}
          </div>

          {/* Soil Moisture */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Soil Moisture</h3>
              <Droplets className="w-8 h-8 text-blue-500" />
            </div>
            <div className="mb-2">
              <span className="text-4xl text-gray-900">72%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
              <span className="text-sm text-green-600">Good</span>
            </div>
          </div>

          {/* Farm Size */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Farm Size</h3>
              <MapPin className="w-8 h-8 text-purple-500" />
            </div>
            <div className="mb-2">
              <span className="text-4xl text-gray-900">
                {user.farm_size}
              </span>
              <span className="text-gray-600 ml-2">ha</span>
            </div>
            <p className="text-sm text-gray-500 capitalize">{user.state} State</p>
          </div>

          {/* Active Crops */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Active Crops</h3>
              <Sprout className="w-8 h-8 text-green-500" />
            </div>
            <div className="mb-2">
              <span className="text-4xl text-gray-900">3</span>
            </div>
            <p className="text-sm text-gray-500">Maize, Cassava, Beans</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Recommendations */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#3BAA64]/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#3BAA64]" />
                </div>
                <h3 className="text-xl text-gray-900">AI Recommendations</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center shrink-0 text-white">
                    1
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">
                      Perfect Planting Window
                    </h4>
                    <p className="text-sm text-gray-600">
                      The next 3 days are ideal for planting maize. Soil
                      temperature and moisture levels are optimal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0 text-white">
                    2
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">
                      Fertilizer Application
                    </h4>
                    <p className="text-sm text-gray-600">
                      Apply NPK fertilizer to your cassava field this week for
                      maximum yield.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shrink-0 text-white">
                    3
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Pest Watch</h4>
                    <p className="text-sm text-gray-600">
                      Monitor your beans for aphids. Current weather conditions
                      favor pest activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7-Day Weather Forecast */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl text-gray-900 mb-6">
                7-Day Weather Forecast
              </h3>
              {weatherData && <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
                {weatherData.dailyForecast.map((day: DailyForecast, index: number) => {
                  const Icon = day.forecast;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-3 text-center"
                    >
                      <p className="text-xs text-gray-600 mb-2">{day.day}</p>
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${day.color}`} />
                      <p className="text-sm text-gray-900">{day.temp}</p>
                    </div>
                  );
                })}
              </div>}
              {!weatherData && <Skeleton count={5} />}
            </div>
          </div>

          {/* Right Column - Quick Actions & Calendar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-4 bg-[#3BAA64]/5 hover:bg-[#3BAA64]/10 rounded-xl transition-colors text-left">
                  <Sprout className="w-6 h-6 text-[#3BAA64]" />
                  <div>
                    <p className="text-gray-900">Add New Crop</p>
                    <p className="text-xs text-gray-500">Get recommendations</p>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-gray-900">View Calendar</p>
                    <p className="text-xs text-gray-500">Planting schedule</p>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors text-left">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="text-gray-900">Detect Disease</p>
                    <p className="text-xs text-gray-500">Upload photo</p>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-gray-900">Market Prices</p>
                    <p className="text-xs text-gray-500">Check trends</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-xl text-gray-900 mb-4">Upcoming Tasks</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="text-gray-900">Apply fertilizer to Field A</p>
                    <p className="text-xs text-gray-500">Due: Tomorrow</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="text-gray-900">Check irrigation system</p>
                    <p className="text-xs text-gray-500">Due: Dec 2</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="text-gray-900">Harvest beans</p>
                    <p className="text-xs text-gray-500">Due: Dec 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;

// eslint-disable-next-line react-refresh/only-export-components
export const loader = () => {
  let isAuthenticated = false;

  if (localStorage.getItem('isAuthenticated')) {
    isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')!);
  }
  
  if (isAuthenticated) {
    return
  } else {
    return redirect('/login')
  }
};
