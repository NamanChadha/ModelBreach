# Model Breach

**Adversarial Testing Arena for LLMs**

Model Breach is a security challenge platform designed to test the robustness of AI systems against adversarial attacks. Users compete to "jailbreak" advanced AI agents in non-replayable, deterministic scenarios to extract secrets and bypass security controls.

## 🏗️ Architecture

The project consists of three main components:

- **Frontend**: A modern React application built with Vite and TailwindCSS, providing the user interface for the arena and challenges.
- **Backend**: A Node.js/Express (TypeScript) server that manages game state and communicates with the database.
- **Engine**: A Python/FastAPI service responsible for generating deterministic challenges and managing the AI logic.

## 🛠️ Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- [Python](https://www.python.org/) (v3.10+)
- [PostgreSQL](https://www.postgresql.org/)

## 🚀 Setup & Installation

### 1. Engine (Python)

The engine handles the core logic for challenge generation.

```bash
cd engine
python -m venv venv
# Windows
.\venv\Scripts\activate
# Linux/Mac
# source venv/bin/activate

pip install -r requirements.txt
python main.py
```
The engine runs on `http://localhost:8000`.

### 2. Backend (Node.js)

The backend manages the API and database connections.

```bash
cd backend
npm install

# Setup Environment Variables
cp .env.example .env
# Edit .env and configure your PostgreSQL connection details
```

Run database migrations:
```bash
npm run migrate
```

Start the backend server:
```bash
npm run dev
```
The backend runs on `http://localhost:3000`.

### 3. Frontend (React)

The frontend provides the player interface.

```bash
cd frontend
npm install
npm run dev
```
The frontend runs on `http://localhost:5173`.

## 🎮 Usage

1. Start all three services (Engine, Backend, Frontend).
2. Open your browser and navigate to `http://localhost:5173`.
3. Click "Enter Arena" to start the challenges.
4. Attempt to bypass the AI protections using prompt injection, SQL leak techniques, and more.

## 📝 License

ISC
