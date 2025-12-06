# Deployment Guide

## Local Development

### Terminal 1: Frontend
\`\`\`bash
npm run dev
# Runs on http://localhost:3000
\`\`\`

### Terminal 2: Backend
\`\`\`bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
# Runs on http://localhost:8000
\`\`\`

## Production Deployment

### Option 1: Vercel (Frontend) + Railway (Backend)

#### Frontend on Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   \`\`\`
   PYTHON_API_URL=https://your-backend.railway.app
   \`\`\`
4. Deploy

#### Backend on Railway
1. Create Railway project
2. Connect GitHub repo
3. Set Python version: 3.8+
4. Set start command:
   \`\`\`
   python -m uvicorn backend.main:app --host 0.0.0.0 --port $PORT
   \`\`\`
5. Deploy

### Option 2: Docker (Both)

\`\`\`dockerfile
# Dockerfile for backend
FROM python:3.8-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install -r requirements.txt
COPY backend/ .
CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

## Data Persistence

- Frontend uses Next.js API routes with JSON storage
- Backend uses JSON file database at \`backend/data.json\`
- For production, migrate to PostgreSQL or MongoDB

## Monitoring

- Check backend health: \`GET /health\`
- View API docs: \`/docs\`
- Monitor database size: \`backend/data.json\`
