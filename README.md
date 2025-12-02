# CROPGUARDS – MVP Documentation
CropGuards is an intelligent agricultural advisory platform designed to help farmers make data-driven decisions with ease and confidence. By combining real-time weather insights, soil data, and sensor readings, the platform delivers personalized guidance tailored to each farm’s unique conditions. Farmers receive clear recommendations on the best crops to plant, ideal planting windows, and proactive measures to manage pest or disease risks. CropGuards empowers farmers with accurate, timely information—helping them increase productivity, reduce losses, and farm more efficiently.

---

## Table of Contents  
1. Features  
2. Tech Stack  
3. Installation & Setup  
4. Running the App  
5. Future Improvements  
6. Project Intent & Background  

---

## 1. Features

### Farmer Features  
- 🌦 **Real-time Weather Insights**  
  Provides up-to-date weather information to guide planting and farm activities.

- 🌱 **Soil & Sensor Data Integration**  
  Combines soil readings and sensor inputs to give accurate on-farm recommendations.

- 🧠 **Personalized Crop Advisory**  
  Suggests suitable crops, ideal planting periods, and preventive measures for pests or diseases.

- 📊 **Unified Farmer Dashboard**  
  One simple dashboard displaying weather updates, soil metrics, planting suggestions, alerts, and general farm insights.

- 📱 **Mobile-friendly Design**  
  Optimized for all screen sizes, ensuring farmers can access insights anywhere.

---

## 2. Tech Stack

### Frontend  
- React  
- React Router  
- Tailwind CSS  
- Lucide React (Icon Library)  
- Framer Motion (Animation Library)  
- Fetch for API communication  

### Backend *(hosted on a seperate Repository)*  
- Django  
- REST API    

### Data & Processing  
- OpenWeather Meteo API  
- Sensor data ingestion  
- Soil data interpretation logic  
- Recommendation engine  

### Database  
- PostgreSQL  


---

## 3. Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/Oluwalolope/cropguards.git
```
### Navigate into the folder
```bash
cd findr
```
### install the dependencies
```bash
npm install
```
## 4. Runnning the App

### Development Mode
```bash
npm run dev
```
### Production Build
```bash
npm run build
npm run preview
```
### The application will default to
```bash
http://localhost:5173
```
---
## 5. Future Improvements

For the MVP, CropGuards currently implements **real-time weather data** to support basic planting guidance. Due to time constraints during the hackathon, soil analysis, sensor integration, and deeper advisory features could not be fully completed. These will be added in future versions.

- 🌱 **Soil Data Integration**  
  Incorporate soil type, nutrients, and moisture readings for more accurate recommendations.

- 📡 **Sensor-Based Farm Monitoring**  
  Support IoT sensors to automatically track soil moisture, temperature, and farm conditions.

- 🧠 **Advanced Advisory Engine**  
  Provide crop-specific instructions, pest alerts, yield predictions, and planting window calculations.

- 📊 **Enhanced Farmer Dashboard**  
  Add more analytics—soil trends, seasonal patterns, and historical farm performance.

- 🚨 **Pest & Disease Detection Alerts**  
  Integrate external APIs or datasets to warn farmers early.

- 🔔 **Smart Notifications**  
  Reminders for watering, planting, fertilizer schedules, and upcoming weather risks.

- 🌍 **Offline Mode / Low-Connectivity Support**  
  Enable data caching for farmers in rural areas.

- 📱 **Mobile App Version**  
  A dedicated mobile app for faster, offline-friendly access.


---

## 6. Project Intent & Background
CropGuards was created for the Futurize Hackathon with a clear mission: to build a solution that empowers farmers through technology-driven insights. The goal was to tackle the challenges of unpredictable weather, poor soil knowledge, and late detection of crop threats by providing farmers with real-time, actionable guidance. Through this platform, our team aimed to demonstrate how data, sensors, and smart analytics can transform traditional farming into a more efficient, resilient, and sustainable practice—showing the potential of innovation to drive real impact in agriculture.

---

## Team Members & Roles

| Team Member | Role |
|------------|------|
| **Akinware Breakthrough** | Team Lead |
| **Oluwalolope Adeleye** | Frontend Developer |
| **Odoko Serena** | Product Manager |
| **Peace Udotong** | Backend Developer |
| **Makinde Ahmed** | UI & UX Designer |
| **Agobe Ferdinand** | CAD Specialist |

Each member contributed to building a functioning MVP that demonstrates the core features, user experience, and technical feasibility of CropGuards.

---