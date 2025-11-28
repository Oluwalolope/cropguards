# FINDR – MVP Documentation

Findr is a smart product and service discovery platform that helps users find what they want quickly and connects them to sellers or service providers around them. With AI-powered search, users can type natural phrases like:

- “I want to buy fresh fish”
- “I need someone to fix my television”
- “I want to order a new pair of shoes”

Findr processes the request, classifies it into relevant categories, and presents users with matching sellers and service providers.

This MVP focuses on proving the core functionality, usability, and user experience of the platform.

---

## Table of Contents
1. Features  
2. Tech Stack  
3. Installation & Setup   
4. Running the App  
5. AI Search Flow  
6. User Flow  
7. API Endpoints  
8. Future Improvements  
9. Project Intent & background

---

## 1. Features

### User Features
- 🔍 **AI-powered search**  
  Users can search using natural language instead of strict keywords.
- 📍 **Location-aware results**  
  Search results consider the user’s location where available.
- 📦 **Product & service browsing**  
  Users can discover sellers offering what they need.
- 👤 **User Dashboard**  
  Users can see their current Cart. Their order history and proceed to checkout.
- 📱 **Mobile-friendly design**

### Seller Features
- 🛍 **Seller Dashboard**  
  Sellers can add and manage products or services.
- 📊 **Basic analytics**  
  Shows product inventory, Orders, Revenue Generated, Growth Analytics.

---

## 2. Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS  
- Radix UI (Component Library)
- Lucide React (Icon Library)
- Framer Motion (Animation Library)
- Fetch for API communication

### Backend
Hosted on a seperate private repository
- Django
- REST API 
- Authentication with Role-based JWT

### AI Processing
- LLM-based classification  
- Category detection logic

### Database
- PostgreSQL

---

## 3. Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/your-username/findr.git
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

## 5. AI Search Flow
1. User enters a natural language search phrase.

2. The request is sent to the AI classification logic.

- The AI determines:

- The user's intent

- Product or service category

3. The system fetches matching sellers from local data or a database.

4. Results are displayed to the user.

---

## 6. User Flow
### User Journey
```bash
Home → Enter Search → AI Processing → Result Page → View Seller → Contact / Save Item

```
### Seller Journey
```bash
Register / Login → Dashboard → Add Items → Await discovery in search results


```

### If No Results

The system may suggest:

- Nearest related categories

- Similar sellers

- Alternative options

---
## 7. API Endpoints (example)
### POST 
Processes user search query

#### Request Body
```bash
{
  "query": "I want to buy fresh catfish",
  "location": "Lagos"
}
```
#### Response
```bash
{
  "category": "Seafood",
  "results": [
    {
      "business": "Ocean Fresh",
      "location": "Lekki"
    }
  ]
}
```

### POST

Used for managing seller listings

#### Sample Request
```bash
{
  "seller_id": 12,
  "name": "Canon DSLR Camera Service",
  "category": "Electronics Repair",
  "location": "Yaba"
}

```

---

## 8. Future Improvements

- 📱 Mobile app version

- 🔥 Real-time chat between buyers & sellers

- ⭐ Reviews & Ratings

- 💳 Online payment integration

- 🧠 Improved AI intent classification

- 🌍 Geo-map-based search

- 🏬 Seller storefront pages

- 📈 Analytics dashboard

- 🧾 Order tracking

## 9. Project Intent & Background

Findr was developed as an MVP submission for the **NITHUB Nationwide Hackathon**.  
The project aims to solve a major problem faced by small businesses and customers:

- Many small and medium enterprises (SMEs) struggle to be discovered online.
- Customers often have difficulty finding reliable sellers or service providers quickly.
- Search platforms today rely on strict keywords rather than natural language.

Findr introduces an **AI-powered natural language search system** that allows users to search the way they speak in real life and immediately discover relevant products and services around them.

---

## Team Members & Roles

| Team Member | Role |
|------------|------|
| **Amarachi Chibuike** | Team Lead & UI/UX Designer |
| **Oluwalolope Adeleye** | Frontend Developer & Technical Lead |
| **Lotachukwu Ezeonye** | Business Strategist |
| **Peace Udotong** | Backend Developer |
| **Daniella Ezeigbo** | Backend Developer |

Each member contributed to building a functioning MVP that demonstrates the core features, user experience, and technical feasibility of Findr.

---