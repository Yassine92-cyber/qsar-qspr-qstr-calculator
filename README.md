# QSAR/QSPR/QSTR Calculator

CLI and web-based tool for computing RDKit molecular descriptors from SMILES, exporting results to CSV, and building quick QSAR/QSPR/QSTR models (Linear or RandomForest) with training, testing, and prediction features. Includes batch processing, descriptor set >50, and a simple React UI for dataset upload, model building, and results export.

## Features

- **Molecular Descriptor Calculation**: Compute >50 RDKit molecular descriptors from SMILES strings
- **Batch Processing**: Handle multiple molecules efficiently
- **Model Building**: Train Linear and RandomForest models for QSAR/QSPR/QSTR
- **Data Export**: Export results to CSV format
- **Web Interface**: Simple React UI for dataset upload and model building
- **CLI Interface**: Command-line tools for batch processing

## Installation

```bash
# Clone the repository
git clone https://github.com/Yassine92-cyber/qsar-qspr-qstr-calculator.git
cd qsar-qspr-qstr-calculator

# Install dependencies
pip install -r requirements.txt

# For web interface
npm install
```

## Usage

### CLI Mode
```bash
python main.py --smiles "CCO" --output results.csv
python main.py --batch input.csv --output results.csv
```

### Web Interface
```bash
npm start
# Open http://localhost:3000
```

## Project Structure

```
qsar-qspr-qstr-calculator/
├── src/                    # Source code
│   ├── descriptors/        # Molecular descriptor calculations
│   ├── models/            # QSAR/QSPR/QSTR model implementations
│   └── utils/             # Utility functions
├── web/                   # React web interface
├── tests/                 # Test files
├── requirements.txt        # Python dependencies
├── package.json           # Node.js dependencies
└── README.md             # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details 