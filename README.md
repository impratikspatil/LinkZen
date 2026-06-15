# LinkZen — Frontend

> Analytics-powered URL shortener built with React + Vite. Shorten URLs, track clicks, view analytics, generate QR codes.

🌐 **Live Demo:** [link-zen.vercel.app](https://link-zen.vercel.app)  
🔗 **Backend Repo:** [LinkZen Backend](https://github.com)

---

## Screenshots

| Home | Dashboard | Analytics |
|------|-----------|-----------|
| Hero with URL form | Stats + Recent URLs table | Browser, Device, Country charts |

---

## Features

- 🔐 JWT-based login & signup with password visibility toggle
- 🔗 Create short URLs with optional custom alias and expiry
- 📊 Analytics dashboard — clicks, browsers, devices, countries
- 📈 Per-URL analytics with click activity chart
- 🗑️ Delete URLs with confirmation modal
- ✏️ Edit expiry days for existing links
- 📷 QR code generation and sharing
- 📋 Copy short URL to clipboard
- 🚫 Protected routes — dashboard requires login
- ⏰ Expired link page with redirect handling

---

## Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router v6 | Client-side routing |
| Lucide Icons | Icon library |
| react-hot-toast | Toast notifications |
| Fetch API | HTTP requests |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── FeaturesSection.jsx
│   ├── UrlFormCard.jsx
│   ├── PrivateRoute.jsx
│   └── analytics/
│       ├── ClickChart.jsx
│       ├── BrowserChart.jsx
│       ├── DeviceChart.jsx
│       ├── CountryChart.jsx
│       ├── UrlPerformanceTable.jsx
│       ├── RecentActivityTable.jsx
│       ├── AnalyticsCards.jsx
│       ├── AnalyticsFilters.jsx
│       └── AnalyticsHeader.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   ├── AnalyticsPage.jsx
│   ├── UrlAnalyticsPage.jsx
│   ├── Architecture.jsx
│   └── ExpiredLink.jsx
├── services/
│   ├── authService.js
│   └── urlService.js
├── App.jsx
└── main.jsx
```

---

## Pages

| Route | Page | Auth Required |
|-------|------|---------------|
| `/` | Home — hero, URL form, features | No |
| `/login` | Login | No |
| `/signup` | Signup | No |
| `/dashboard` | Analytics dashboard + URL table | ✅ Yes |
| `/analytics` | Detailed analytics with charts | ✅ Yes |
| `/analytics/:shortCode` | Per-URL analytics | ✅ Yes |
| `/architecture` | System design overview | No |
| `/expired-link` | Expired link page | No |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- LinkZen backend running (see backend repo)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/linkzen-frontend.git
cd linkzen-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment

The backend base URL is set directly in the service files:

```
src/services/authService.js  → BASE_URL
src/services/urlService.js   → BASE_URL
```

Update both to point to your backend URL.

### Build for Production

```bash
npm run build
```

---

## Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

---

## Backend

This frontend connects to the LinkZen Spring Boot backend.  
See the [backend repository](#) for setup instructions.
