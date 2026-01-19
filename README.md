🔐 Model Breach
Adversarial Testing Arena for Large Language Models (LLMs)

Model Breach is a security challenge platform designed to evaluate the robustness of Large Language Models against adversarial attacks such as prompt injection, jailbreaks, and secret extraction.

Users compete in a controlled arena to bypass AI safeguards under deterministic, non-replayable conditions, simulating real-world AI security threats.

🚀 Key Features

Adversarial Testing Arena
Compete to exploit AI agents by bypassing security constraints using crafted prompts.

Deterministic Challenge Engine
Each challenge is generated deterministically to prevent replay attacks and solution leakage.

Multi-Service Architecture
Clear separation between frontend, backend, and AI logic for scalability and security.

Real-World Attack Simulation
Includes prompt injection, instruction override, controlled data leakage, and secret extraction scenarios.

🏗️ System Architecture
Frontend (React + TailwindCSS)
        ↓
Backend API (Node.js + TypeScript + Express)
        ↓
AI Engine (Python + FastAPI)
        ↓
PostgreSQL Database

Components
🎨 Frontend

Built with React (Vite) and TailwindCSS

Provides the interactive arena UI

Real-time interaction with AI challenges

🧠 Backend

Node.js + Express (TypeScript)

Manages users, sessions, and challenge state

Handles secure API communication with the engine

Persists results using PostgreSQL

⚙️ Engine

Python + FastAPI

Generates deterministic challenges

Manages AI behavior and security constraints

Prevents replay-based exploitation

🛠️ Tech Stack

Frontend

React

Vite

TailwindCSS

Backend

Node.js

Express

TypeScript

PostgreSQL

AI Engine

Python

FastAPI

📦 Prerequisites

Make sure you have the following installed:

Node.js (v18+)

Python (v3.10+)

PostgreSQL

⚙️ Setup & Installation
1️⃣ Engine (Python)
cd engine
python -m venv venv

# Windows
.\venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python main.py


Engine runs at:
👉 http://localhost:8000

2️⃣ Backend (Node.js)
cd backend
npm install


Create environment variables:

cp .env.example .env


Configure PostgreSQL credentials in .env, then run:

npm run migrate
npm run dev


Backend runs at:
👉 http://localhost:3000

3️⃣ Frontend (React)
cd frontend
npm install
npm run dev


Frontend runs at:
👉 http://localhost:5173

🎮 Usage

Start Engine, Backend, and Frontend

Open http://localhost:5173

Click Enter Arena

Attempt to bypass AI protections using adversarial prompts

Observe model behavior under constrained security rules

🎯 Learning Objectives

Understand real-world LLM security vulnerabilities

Explore prompt injection and jailbreak techniques

Learn how deterministic systems prevent replay attacks

Practice secure AI system design

📌 Future Improvements

Leaderboard & scoring system

Additional adversarial scenarios

Defense-side evaluation metrics

Multi-model support

📄 License

ISC License
