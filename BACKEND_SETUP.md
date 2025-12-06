# FinControl - Backend Setup Guide <!--Setup do backend--> 

## Overview
This project integrates a Python FastAPI backend with AI agents for intelligent financial categorization and analysis.

## Prerequisites
- Python 3.8+
- pip package manager
- FastAPI and Uvicorn

## Installation & Setup

### 1. Install Python Dependencies
Navigate to the project root and install the backend dependencies:

\`\`\`bash
cd backend
pip install -r requirements.txt
\`\`\`

### 2. Start the Python FastAPI Backend
Run the FastAPI server:

\`\`\`bash
cd backend
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
\`\`\`

The backend will be available at: **http://localhost:8000**

### 3. Verify Backend is Running
Check the health endpoint:

\`\`\`bash
curl http://localhost:8000/health
\`\`\`

Expected response: `{"status": "healthy"}`

### 4. Start the Next.js Frontend (in another terminal)
\`\`\`bash
npm run dev
\`\`\`

The frontend will be available at: **http://localhost:3000**

## Features Enabled by Backend

### AI Categorization
- Automatic transaction categorization based on description
- Uses keyword-based ML model
- Endpoint: `POST /api/ai/categorize`

### AI Analysis
- Spending pattern analysis
- Financial insights and recommendations
- Endpoint: `POST /api/ai/analyze`

### Transaction Management
- Full CRUD operations for transactions
- Persistent JSON-based database
- Endpoints:
  - `GET /transactions` - Get all transactions
  - `POST /transactions` - Create transaction
  - `PUT /transactions/{id}` - Update transaction
  - `DELETE /transactions/{id}` - Delete transaction

## Database Location
Transactions are stored in: `backend/data.json`

## Troubleshooting

### Backend not connecting
1. Ensure Python backend is running on port 8000
2. Check `.env.local` has `PYTHON_API_URL=http://localhost:8000`
3. Check browser console for API errors

### CORS errors
Backend has CORS enabled for `http://localhost:3000` and `http://localhost:8000`

### AI categorization not working
1. Verify backend is running
2. Check that description and amount are provided
3. Review backend logs for errors

## API Documentation
Once backend is running, visit: **http://localhost:8000/docs** for interactive Swagger documentation
