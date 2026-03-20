# 🥗 Food Recipes - Full Stack Application

A modern, visually stunning recipe discovery platform built with a **React** frontend and a **Django** backend. This application allows users to discover, search, and save recipes through a beautiful, responsive, and secure interface.

## ✨ Key Features

- **🔐 Secure Authentication**: Full user signup and login system powered by a Django REST API and built-in database.
- **🖼️ Modern UI/UX**: Premium, glassmorphic design featuring smooth animations and a responsive layout.
- **🔍 Smart Recipe Discovery**: Integrated with TheMealDB API to fetch thousands of recipes.
- **💡 Fallback Search System**: If the user's specific search yields no results, the system automatically suggests popular vegetarian dishes.
- **🛡️ Protected Routes**: The main dashboard is accessible only to authenticated users, ensuring a private experience.
- **👁️ Password Toggle**: Real-time password visibility toggler on authentication forms.
- **📱 Responsive Design**: Fully optimized for mobile, tablet, and desktop views.

## 🛠️ Tech Stack

### Frontend
- **React.js**: Modular component-based architecture.
- **React Router**: For seamless navigation and client-side routing.
- **Styled Components / CSS**: For premium, modern UI styling.
- **TheMealDB API**: Powerful, open-source recipe database integration.

### Backend
- **Django**: Robust Python framework for the backend.
- **Django REST Framework (DRF)**: High-performance API endpoints.
- **SQLite / PostgreSQL**: Built-in production-ready database management.
- **CORS Headers & WhiteNoise**: Configured for secure and efficient production serving.

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- Python 3.10+

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/neerajsinghchauhan/Food-recepies.git
   cd Food-recepies
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   python -m venv venv
   .\venv\Scripts\activate  # Windows
   # source venv/bin/activate # Mac/Linux
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

3. **Frontend Setup**:
   ```bash
   cd ..
   npm install
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚢 Deployment

This project is configured for one-click deployment:
- **Frontend**: Deploy the root directory to **Netlify** or **Vercel**.
- **Backend**: Deploy the `backend` directory to **Render**, **Railway**, or **Heroku** using the provided `build.sh` script.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## 📜 License

This project is open-source under the MIT License.
