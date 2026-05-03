# 🏦 Skyline Finserv — Financial Services Website

A full-stack financial services website built for **Skyline Finserv**, a loan advisory company. This project is built from scratch with a custom Navy & Gold design theme.

---

## 🎯 About The Project

Skyline Finserv provides the following financial services to customers:

- 🏠 Home Loan
- 🏢 Loan Against Property
- 💼 Business Loan
- 👤 Personal Loan
- 🔄 Working Capital
- 📊 Financial Guidance

This website serves as the company's digital presence — showcasing services, building trust, and capturing leads from potential customers via a contact form.

---

## ✨ Features

- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Animated Hero section with floating loan cards
- ✅ Interactive Services tab panel
- ✅ Scroll-triggered animated number counters in Stats section
- ✅ Lead capture contact form with backend API
- ✅ Leads saved to PostgreSQL database
- ✅ Fixed navbar with scroll effect
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Newsletter subscription in footer
- ✅ Gold & Navy premium financial brand theme

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **CSS3** | Custom styling (no UI library) |
| **Google Fonts** | Playfair Display + DM Sans typography |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | REST API framework |
| **Sequelize** | ORM for PostgreSQL |
| **PostgreSQL** | Relational database |
| **pgAdmin** | Database management GUI |
| **dotenv** | Environment variable management |
| **cors** | Cross-origin resource sharing |
| **nodemon** | Auto-restart during development |

### Tools & Others
| Tool | Purpose |
|---|---|
| **VS Code** | Code editor |
| **Git & GitHub** | Version control |
| **Concurrently** | Run frontend + backend together |
| **pgAdmin 4** | PostgreSQL GUI client |

---

## 📁 Project Structure

```
skyline-client/
│
├── client/                          # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Fixed navigation bar
│   │   │   ├── Navbar.css
│   │   │   ├── Hero.jsx             # Hero section with animated cards
│   │   │   ├── Hero.css
│   │   │   ├── About.jsx            # About company section
│   │   │   ├── About.css
│   │   │   ├── Services.jsx         # Tab-based services section
│   │   │   ├── Services.css
│   │   │   ├── Stats.jsx            # Animated number counters
│   │   │   ├── Stats.css
│   │   │   ├── WhyChooseUs.jsx      # Why choose us + process steps
│   │   │   ├── WhyChooseUs.css
│   │   │   ├── Contact.jsx          # Lead capture form
│   │   │   ├── Contact.css
│   │   │   ├── Footer.jsx           # Footer with links
│   │   │   └── Footer.css
│   │   ├── pages/
│   │   │   └── Home.jsx             # Main page (assembles all components)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css                # Global CSS variables & styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                          # Express Backend
│   ├── config/
│   │   └── db.js                    # Sequelize PostgreSQL connection
│   ├── controllers/
│   │   └── lead.controller.js       # Lead CRUD logic
│   ├── models/
│   │   └── lead.model.js            # Lead Sequelize model
│   ├── routes/
│   │   └── lead.routes.js           # API routes
│   ├── server.js                    # Express app entry point
│   └── package.json
│
├── .env                             # Environment variables (not committed)
├── .gitignore
├── package.json                     # Root package with concurrently scripts
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/download/) + pgAdmin
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skyline-client.git
cd skyline-client
```

---

### 2. Setup Environment Variables

Create a `.env` file in the root `skyline-client/` folder:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=skyline_finserv
DB_USER=postgres
DB_PASS=your_postgres_password
CLIENT_URL=http://localhost:5173
```

---

### 3. Create Database in pgAdmin

1. Open **pgAdmin**
2. Right click **Databases** → **Create** → **Database**
3. Name it: `skyline_finserv` → Save

---

### 4. Install Dependencies

```bash
# Install root dependencies
npm install

# Install both client + server dependencies
npm run install:all
```

---

### 5. Run the Project

```bash
npm run dev
```

This starts both frontend and backend simultaneously:

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/leads` | Submit a new lead from contact form |
| `GET` | `/api/leads` | Get all leads (admin) |
| `PATCH` | `/api/leads/:id` | Update lead status |
| `GET` | `/api/health` | Health check |

### Lead Schema

```json
{
  "name": "John Doe",
  "phone": "+91 98765 43210",
  "email": "john@example.com",
  "loanType": "Home Loan",
  "amount": "₹25 Lakhs",
  "message": "Looking for a home loan in Ahmedabad",
  "status": "new"
}
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#0a1628` | Primary background |
| `--gold` | `#c9a84c` | Accent color |
| `--off-white` | `#f8f6f1` | Section backgrounds |
| Font Heading | Playfair Display | All headings |
| Font Body | DM Sans | Body text |

---

## 📦 Available Scripts

From the root `skyline-client/` folder:

```bash
npm install          # Install root concurrently package
npm run install:all  # Install client + server packages
npm run dev          # Run frontend + backend together
npm run dev:client   # Run only frontend
npm run dev:server   # Run only backend
```

---

## 🗃️ Database

- **Database:** PostgreSQL
- **ORM:** Sequelize
- **GUI Tool:** pgAdmin 4
- Tables are **auto-created** on first server start using `sequelize.sync()`

---

## 🚀 Deployment Guide

### Frontend → Vercel
```bash
cd client
npm run build
# Upload dist/ folder to Vercel
```

### Backend → Render
1. Push code to GitHub
2. Create new Web Service on Render
3. Set root directory to `server/`
4. Add environment variables in Render dashboard
5. Set start command: `node server.js`

---

## 🙋‍♂️ Author

**Vishwajitsinh Rathod**
- GitHub: [@your-username](https://github.com/your-username)
- Location: Ahmedabad, Gujarat, India

---

## 📄 License

This project is for educational and business demonstration purposes.

---

## 🙏 Acknowledgements
- Fonts by [Google Fonts](https://fonts.google.com/)
- Built with ❤️ in Ahmedabad, Gujarat