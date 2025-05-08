# 🛍️ React Storefront - Educational Project

This is a beginner-friendly e-commerce storefront built using **React**.  
It is designed as a learning project, converting a static HTML/CSS template into a dynamic, component-based React application.  
The backend is simulated using **JSON Server**, making it ideal for front-end practice without needing a real API.

---

## 🧰 Tech Stack

- ⚛️ React (with Hooks & Functional Components)
- 🧭 React Router
- 🌀 Context API (State Management)
- 🎨 Tailwind CSS
- 🔗 Axios
- 🗂 JSON Server (Fake REST API)
- 🛠 Utility functions (`utils/` folder)

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. Clone the Repository

   ```bash
   git clone https://github.com/sEliasMesbah/simple-ecommerce-by-React.git
   cd simple-ecommerce-by-React
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Start the React App

   ```bash
   npm start
   ```

4. Start JSON Server (Fake Backend)

   ```bash
   npm install json-server
   ```
   ```bash
   npx json-server --watch db.json --port 3001
   ```

> The API will be available at: `http://localhost:3001/products`

---

## 📁 Project Structure

```bash
📦 simple-ecommerce-by-React
├── db.json               # Fake backend data (products, etc.)
├── public/
│   ├── images/           # Product images
│   ├── fonts/            # Fonts used by the template
│   └── css/              # Original template CSS
├── src/
│   ├── components/       # Reusable React components (Navbar, ProductCard, etc.)
│   ├── pages/            # Page-level components (Home, ProductDetail, etc.)
│   ├── context/          # Global state management
│   ├── utils/            # Utility/helper functions
│   └── App.jsx           # Main app component
├── template/             # Raw HTML/CSS template before conversion
└── README.md
```

---

## 📚 Documentation

Full educational documentation and setup instructions are available in the [📘 Wiki](../../wiki), including:

- Converting a static HTML template to React  
- State management using Context API  
- JSON Server configuration  
- Folder and component structure  
- Example utility functions

---

## 🎯 Learning Goals

This project will help you:

- Learn how to structure a React project
- Convert static HTML/CSS to functional React components
- Manage state globally with Context API
- Work with fake REST APIs using JSON Server
- Use modern React tools like hooks, props, and routing

---

## 🤝 Contributing

Contributions are welcome!  
If you'd like to improve this project or fix bugs, feel free to fork and open a pull request.

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines before contributing.

---

## 📬 Contact

Have questions, suggestions, or feedback?

- 📧 Email: s.elias.mesbah@gmail.com  
- 🐙 GitHub: [@sEliasMesbah](https://github.com/sEliasMesbah)

---

> This project is open-source and created to help developers learn and grow.  
> Feel free to explore, learn, and improve it! 🚀
