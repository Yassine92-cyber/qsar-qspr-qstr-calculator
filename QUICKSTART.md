# QSAR Suite - Quick Start Guide

## Prerequisites

- Python 3.8+ with pip
- Node.js 18+ with npm
- RDKit (for molecular calculations)

## Quick Start

### Option 1: Use the startup scripts (Recommended)

**Windows:**
```bash
# Double-click or run:
start_services.bat

# Or PowerShell:
.\start_services.ps1
```

**Manual startup:**
```bash
# Terminal 1 - Start Backend
cd backend
python -m uvicorn api.main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2 - Start Frontend  
cd frontend
npm run dev
```

## Access Points

- **Frontend Application**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

## Features

- **Molecular Descriptors**: Calculate 200+ molecular descriptors
- **QSAR Modeling**: Train machine learning models
- **Predictions**: Make predictions using trained models
- **File Upload**: Process CSV and SMI files
- **SMILES Validation**: Validate molecular structures

## API Endpoints

- `POST /descriptors/calculate` - Calculate molecular descriptors
- `POST /models/train` - Train QSAR models
- `POST /models/predict` - Make predictions
- `POST /upload/file` - Upload and process files
- `GET /models` - List trained models

## Troubleshooting

### Import Errors
If you get "ModuleNotFoundError: No module named 'api'":
- Make sure you're running from the `backend` directory
- Or install the package: `pip install -e .` from the backend directory

### Port Already in Use
If ports 8000 or 3000 are busy:
- Kill existing processes: `netstat -ano | findstr :8000`
- Or change ports in the startup commands

### Frontend Build Issues
If the frontend won't start:
- Run `npm install` in the frontend directory
- Check Node.js version: `node --version`

## Development

The project structure:
```
qsar-qspr-qstr-calculator/
├── backend/           # FastAPI backend
│   ├── api/          # API endpoints
│   ├── qsar_core/    # Core QSAR functionality
│   └── utils/        # Utility functions
├── frontend/          # React frontend
│   └── src/          # Source code
└── data/              # Sample data files
```

## Support

For issues or questions, check the API documentation at http://localhost:8000/docs 