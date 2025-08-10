@echo off
echo Starting QSAR Suite Services...
echo.

echo Starting Backend API on port 8000...
start "QSAR Backend" cmd /k "cd backend && python -m uvicorn api.main:app --reload --host 0.0.0.0 --port 8000"

echo Waiting 5 seconds for backend to start...
timeout /t 5 /nobreak > nul

echo Starting Frontend on port 3000...
start "QSAR Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo Services are starting up...
echo Backend API: http://localhost:8000
echo Frontend: http://localhost:3000
echo API Docs: http://localhost:8000/docs
echo.
echo Press any key to close this window...
pause > nul 