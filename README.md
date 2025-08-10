# QSAR Suite - Quantitative Structure-Activity Relationship Modeling Tool

A comprehensive suite for QSAR (Quantitative Structure-Activity Relationship), QSPR (Quantitative Structure-Property Relationship), and QSTR (Quantitative Structure-Toxicity Relationship) modeling with molecular descriptors, machine learning models, and a user-friendly interface.

## 🚀 Features

### Core Functionality
- **Molecular Descriptor Calculation**: 200+ molecular descriptors using RDKit
- **Machine Learning Models**: Support for regression and classification tasks
- **Data Preprocessing**: Advanced data validation, outlier detection, and feature engineering
- **Model Training & Evaluation**: Comprehensive model performance metrics
- **Prediction Pipeline**: Easy-to-use prediction interface

### Molecular Descriptors
- **Constitutional**: Molecular weight, atom counts, bond counts
- **Topological**: Graph-based descriptors, connectivity indices
- **Geometrical**: Shape and spatial descriptors (2D and 3D)
- **Electronic**: Electronic state descriptors, partial charges
- **Lipinski**: Drug-likeness rule descriptors
- **Crippen**: LogP and molar refractivity
- **EState**: Electronic state descriptors
- **Morgan**: Molecular fingerprints
- **Atom Pairs**: Atom pair and torsion descriptors

### Machine Learning Models
- **Regression Models**: Linear Regression, Random Forest Regression
- **Classification Models**: Logistic Regression, Random Forest Classification
- **Model Persistence**: Save and load trained models
- **Performance Metrics**: R², RMSE, MAE, Accuracy, Precision, Recall, F1-Score
- **Cross-validation**: Built-in cross-validation support

## 🏗️ Architecture

The project consists of three main components:

### 1. Backend (FastAPI)
- **API Endpoints**: RESTful API for all QSAR operations
- **Core Modules**: Molecular descriptors, model training, data handling
- **Data Validation**: Comprehensive input validation and error handling

### 2. CLI (Command Line Interface)
- **Batch Processing**: Process multiple datasets efficiently
- **Data Preprocessing**: Outlier removal, data splitting, validation
- **Model Operations**: Train, evaluate, and predict with command-line tools

### 3. Frontend (React + TypeScript)
- **Modern UI**: Clean, responsive interface with Tailwind CSS
- **Interactive Components**: Data upload, model training, predictions
- **Real-time Updates**: Live model performance monitoring

## 📦 Installation

### Prerequisites
- Python 3.8+
- Node.js 16+ (for frontend)
- RDKit (will be installed via pip)

### Backend Installation
```bash
cd backend
pip install -r requirements.txt
```

### CLI Installation
```bash
cd cli
pip install -r requirements.txt
```

### Frontend Installation
```bash
cd frontend
npm install
```

## 🚀 Quick Start

### 1. Start the Backend API
```bash
cd backend
uvicorn api.main:app --reload --host 0.0.0.0 --port 8000
```

### 2. Start the Frontend
```bash
cd frontend
npm run dev
```

### 3. Use the CLI
```bash
cd cli
python -m qsar_cli.main --help
```

## 📖 Usage Examples

### Calculate Molecular Descriptors
```bash
# Calculate all descriptors
python -m qsar_cli.main calculate-descriptors input.csv output_descriptors.csv

# Calculate specific descriptor types
python -m qsar_cli.main calculate-descriptors input.csv output.csv \
    --descriptor-types constitutional topological lipinski
```

### Train a QSAR Model
```bash
# Train a Random Forest regression model
python -m qsar_cli.main train-model input.csv model.pkl activity \
    --model-type random_forest_regression --test-size 0.2
```

### Make Predictions
```bash
# Use trained model for predictions
python -m qsar_cli.main predict model.pkl new_data.csv predictions.csv
```

### Preprocess Data
```bash
# Remove outliers and filter data
python -m qsar_cli.main preprocess-data input.csv cleaned.csv activity \
    --remove-outliers --outlier-method iqr --filter-target-range \
    --min-target 0.0 --max-target 10.0
```

### Split Dataset
```bash
# Split into train/validation/test sets
python -m qsar_cli.main split-dataset input.csv output_dir/ activity \
    --test-size 0.2 --validation-size 0.1
```

### Batch Processing
```bash
# Process multiple datasets
python -m qsar_cli.main batch-process input_dir/ output_dir/ \
    --pattern "*.csv" --target-column activity
```

## 🔧 API Endpoints

### Molecular Descriptors
- `POST /descriptors/calculate` - Calculate descriptors for SMILES strings
- `GET /descriptors/info` - Get information about available descriptors
- `POST /descriptors/validate` - Validate SMILES strings

### Model Training
- `POST /models/train` - Train a new QSAR model
- `GET /models/list` - List available models
- `GET /models/{model_id}` - Get model information

### Predictions
- `POST /models/{model_id}/predict` - Make predictions
- `POST /models/{model_id}/predict-proba` - Get prediction probabilities

### Data Management
- `POST /data/upload` - Upload dataset
- `POST /data/preprocess` - Preprocess dataset
- `GET /data/info` - Get dataset information

## 🧪 Development

### Project Structure
```
qsar-qspr-qstr-calculator/
├── backend/                 # FastAPI backend
│   ├── api/                # API endpoints
│   ├── qsar_core/          # Core QSAR functionality
│   └── requirements.txt    # Python dependencies
├── cli/                    # Command-line interface
│   ├── qsar_cli/          # CLI implementation
│   └── requirements.txt    # CLI dependencies
├── frontend/               # React frontend
│   ├── src/                # Source code
│   ├── package.json        # Node.js dependencies
│   └── tailwind.config.js  # Tailwind configuration
└── Makefile                # Build automation
```

### Building the Project
```bash
# Install all dependencies
make install

# Run tests
make test

# Build frontend
make build-frontend

# Start development environment
make dev

# Build production version
make build
```

### Code Quality
```bash
# Format code
make format

# Lint code
make lint

# Type checking
make type-check
```

## 📊 Example Workflow

1. **Data Preparation**
   - Upload CSV with SMILES and target values
   - Validate molecular structures
   - Preprocess data (remove outliers, handle missing values)

2. **Feature Engineering**
   - Calculate molecular descriptors
   - Select relevant features
   - Normalize descriptor values

3. **Model Training**
   - Split data into train/validation/test sets
   - Train machine learning model
   - Evaluate performance metrics

4. **Model Deployment**
   - Save trained model
   - Make predictions on new compounds
   - Monitor model performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **RDKit**: Molecular informatics toolkit
- **scikit-learn**: Machine learning library
- **FastAPI**: Modern web framework
- **React**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework

## 📞 Support

For questions, issues, or contributions:
- Open an issue on GitHub
- Check the documentation
- Review example notebooks

## 🔮 Roadmap

- [ ] Support for more molecular descriptors
- [ ] Deep learning models (neural networks)
- [ ] 3D conformer generation
- [ ] Model interpretability tools
- [ ] Cloud deployment options
- [ ] Integration with external databases
- [ ] Automated hyperparameter tuning
- [ ] Ensemble methods
- [ ] Model versioning and tracking 