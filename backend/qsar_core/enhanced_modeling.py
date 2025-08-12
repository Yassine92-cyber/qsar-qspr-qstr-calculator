"""
Enhanced QSAR/QSPR/QSTR Modeling Module
Advanced machine learning and statistical modeling for molecular properties
"""

import numpy as np
import pandas as pd
from typing import Dict, List, Optional, Tuple, Union, Any
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV, RandomizedSearchCV
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier, GradientBoostingRegressor, GradientBoostingClassifier
from sklearn.linear_model import LinearRegression, LogisticRegression, Ridge, Lasso, ElasticNet
from sklearn.svm import SVR, SVC
from sklearn.neural_network import MLPRegressor, MLPClassifier
from sklearn.metrics import mean_squared_error, r2_score, accuracy_score, classification_report, roc_auc_score
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.pipeline import Pipeline
from sklearn.feature_selection import SelectKBest, f_regression, f_classif, RFE
import joblib
import json
import os
from datetime import datetime

class EnhancedQSARModel:
    """Enhanced QSAR model with advanced features"""
    
    def __init__(self, model_type: str = 'random_forest', task_type: str = 'regression'):
        self.model_type = model_type
        self.task_type = task_type
        self.model = None
        self.scaler = StandardScaler()
        self.feature_selector = None
        self.feature_names = None
        self.training_history = {}
        self.best_params = {}
        self.cv_scores = []
        
        # Model registry
        self.model_registry = {
            'regression': {
                'random_forest': RandomForestRegressor,
                'gradient_boosting': GradientBoostingRegressor,
                'linear': LinearRegression,
                'ridge': Ridge,
                'lasso': Lasso,
                'elastic_net': ElasticNet,
                'svr': SVR,
                'neural_network': MLPRegressor
            },
            'classification': {
                'random_forest': RandomForestClassifier,
                'gradient_boosting': GradientBoostingClassifier,
                'logistic': LogisticRegression,
                'svc': SVC,
                'neural_network': MLPClassifier
            }
        }
    
    def create_model(self, **kwargs) -> Any:
        """Create a model instance with given parameters"""
        if self.task_type not in self.model_registry:
            raise ValueError(f"Invalid task type: {self.task_type}")
        
        if self.model_type not in self.model_registry[self.task_type]:
            raise ValueError(f"Invalid model type: {self.model_type} for {self.task_type}")
        
        model_class = self.model_registry[self.task_type][self.model_type]
        return model_class(**kwargs)
    
    def prepare_data(self, X: pd.DataFrame, y: pd.Series, test_size: float = 0.2, random_state: int = 42) -> Tuple:
        """Prepare data for training"""
        # Store feature names
        self.feature_names = X.columns.tolist()
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=test_size, random_state=random_state, stratify=y if self.task_type == 'classification' else None
        )
        
        # Scale features
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        return X_train_scaled, X_test_scaled, y_train, y_test
    
    def feature_selection(self, X: np.ndarray, y: np.ndarray, method: str = 'kbest', k: int = 100) -> np.ndarray:
        """Perform feature selection"""
        if method == 'kbest':
            if self.task_type == 'regression':
                self.feature_selector = SelectKBest(score_func=f_regression, k=min(k, X.shape[1]))
            else:
                self.feature_selector = SelectKBest(score_func=f_classif, k=min(k, X.shape[1]))
            
            X_selected = self.feature_selector.fit_transform(X, y)
            
            # Update feature names
            if self.feature_names and hasattr(self.feature_selector, 'get_support'):
                selected_features = self.feature_selector.get_support()
                self.feature_names = [name for i, name in enumerate(self.feature_names) if selected_features[i]]
            
            return X_selected
        
        elif method == 'rfe':
            # Recursive feature elimination
            base_model = self.create_model()
            self.feature_selector = RFE(base_model, n_features_to_select=k)
            X_selected = self.feature_selector.fit_transform(X, y)
            
            # Update feature names
            if self.feature_names and hasattr(self.feature_selector, 'get_support'):
                selected_features = self.feature_selector.get_support()
                self.feature_names = [name for i, name in enumerate(self.feature_names) if selected_features[i]]
            
            return X_selected
        
        return X
    
    def hyperparameter_tuning(self, X: np.ndarray, y: np.ndarray, method: str = 'grid', cv: int = 5) -> Dict:
        """Perform hyperparameter tuning"""
        base_model = self.create_model()
        
        if method == 'grid':
            param_grid = self._get_param_grid()
            search = GridSearchCV(base_model, param_grid, cv=cv, scoring=self._get_scoring(), n_jobs=-1)
        elif method == 'random':
            param_distributions = self._get_param_distributions()
            search = RandomizedSearchCV(base_model, param_distributions, cv=cv, scoring=self._get_scoring(), n_jobs=-1, n_iter=100)
        else:
            raise ValueError(f"Invalid tuning method: {method}")
        
        search.fit(X, y)
        self.best_params = search.best_params_
        
        return {
            'best_params': search.best_params_,
            'best_score': search.best_score_,
            'cv_results': search.cv_results_
        }
    
    def _get_param_grid(self) -> Dict:
        """Get parameter grid for hyperparameter tuning"""
        if self.model_type == 'random_forest':
            return {
                'n_estimators': [50, 100, 200],
                'max_depth': [None, 10, 20, 30],
                'min_samples_split': [2, 5, 10],
                'min_samples_leaf': [1, 2, 4]
            }
        elif self.model_type == 'gradient_boosting':
            return {
                'n_estimators': [50, 100, 200],
                'learning_rate': [0.01, 0.1, 0.2],
                'max_depth': [3, 5, 7],
                'subsample': [0.8, 0.9, 1.0]
            }
        elif self.model_type == 'linear':
            return {
                'alpha': [0.001, 0.01, 0.1, 1.0, 10.0]
            }
        elif self.model_type == 'svr':
            return {
                'C': [0.1, 1, 10, 100],
                'gamma': ['scale', 'auto', 0.001, 0.01, 0.1],
                'kernel': ['rbf', 'linear']
            }
        elif self.model_type == 'neural_network':
            return {
                'hidden_layer_sizes': [(50,), (100,), (50, 50), (100, 50)],
                'alpha': [0.0001, 0.001, 0.01],
                'learning_rate': ['constant', 'adaptive']
            }
        
        return {}
    
    def _get_param_distributions(self) -> Dict:
        """Get parameter distributions for random search"""
        if self.model_type == 'random_forest':
            return {
                'n_estimators': [50, 100, 200, 300, 500],
                'max_depth': [None, 10, 20, 30, 40, 50],
                'min_samples_split': [2, 5, 10, 15, 20],
                'min_samples_leaf': [1, 2, 4, 6, 8]
            }
        elif self.model_type == 'gradient_boosting':
            return {
                'n_estimators': [50, 100, 200, 300, 500],
                'learning_rate': [0.01, 0.05, 0.1, 0.15, 0.2],
                'max_depth': [3, 5, 7, 9, 11],
                'subsample': [0.7, 0.8, 0.9, 1.0]
            }
        
        return self._get_param_grid()
    
    def _get_scoring(self) -> str:
        """Get scoring metric for the task"""
        if self.task_type == 'regression':
            return 'neg_mean_squared_error'
        else:
            return 'accuracy'
    
    def train(self, X: np.ndarray, y: np.ndarray, feature_selection: bool = True, 
              hyperparameter_tuning: bool = True, cv: int = 5) -> Dict:
        """Train the QSAR model"""
        # Feature selection
        if feature_selection:
            X = self.feature_selection(X, y)
        
        # Hyperparameter tuning
        if hyperparameter_tuning:
            tuning_results = self.hyperparameter_tuning(X, y, cv=cv)
            self.training_history['tuning'] = tuning_results
        
        # Create and train final model
        if self.best_params:
            self.model = self.create_model(**self.best_params)
        else:
            self.model = self.create_model()
        
        # Cross-validation
        cv_scores = cross_val_score(self.model, X, y, cv=cv, scoring=self._get_scoring())
        self.cv_scores = cv_scores.tolist()
        
        # Final training
        self.model.fit(X, y)
        
        # Training history
        self.training_history['cv_scores'] = self.cv_scores
        self.training_history['feature_names'] = self.feature_names
        self.training_history['training_date'] = datetime.now().isoformat()
        
        return {
            'cv_scores': self.cv_scores,
            'cv_mean': np.mean(cv_scores),
            'cv_std': np.std(cv_scores),
            'best_params': self.best_params,
            'feature_names': self.feature_names
        }
    
    def predict(self, X: np.ndarray) -> np.ndarray:
        """Make predictions"""
        if self.model is None:
            raise ValueError("Model not trained yet")
        
        # Scale features
        X_scaled = self.scaler.transform(X)
        
        # Feature selection if applicable
        if self.feature_selector:
            X_scaled = self.feature_selector.transform(X_scaled)
        
        return self.model.predict(X_scaled)
    
    def predict_proba(self, X: np.ndarray) -> np.ndarray:
        """Make probability predictions (classification only)"""
        if self.task_type != 'classification':
            raise ValueError("Probability prediction only available for classification")
        
        if self.model is None:
            raise ValueError("Model not trained yet")
        
        # Scale features
        X_scaled = self.scaler.transform(X)
        
        # Feature selection if applicable
        if self.feature_selector:
            X_scaled = self.feature_selector.transform(X_scaled)
        
        if hasattr(self.model, 'predict_proba'):
            return self.model.predict_proba(X_scaled)
        else:
            raise ValueError("Model does not support probability prediction")
    
    def evaluate(self, X: np.ndarray, y: np.ndarray) -> Dict:
        """Evaluate model performance"""
        if self.model is None:
            raise ValueError("Model not trained yet")
        
        y_pred = self.predict(X)
        
        if self.task_type == 'regression':
            mse = mean_squared_error(y, y_pred)
            r2 = r2_score(y, y_pred)
            rmse = np.sqrt(mse)
            
            return {
                'mse': mse,
                'rmse': rmse,
                'r2': r2,
                'mae': np.mean(np.abs(y - y_pred))
            }
        else:
            accuracy = accuracy_score(y, y_pred)
            
            # Try to get ROC AUC if possible
            try:
                if hasattr(self.model, 'predict_proba'):
                    y_proba = self.predict_proba(X)
                    if y_proba.shape[1] == 2:  # Binary classification
                        auc = roc_auc_score(y, y_proba[:, 1])
                    else:  # Multi-class
                        auc = roc_auc_score(y, y_proba, multi_class='ovr')
                else:
                    auc = None
            except:
                auc = None
            
            return {
                'accuracy': accuracy,
                'auc': auc,
                'classification_report': classification_report(y, y_pred, output_dict=True)
            }
    
    def get_feature_importance(self) -> Dict[str, float]:
        """Get feature importance scores"""
        if self.model is None:
            raise ValueError("Model not trained yet")
        
        if not self.feature_names:
            return {}
        
        if hasattr(self.model, 'feature_importances_'):
            importance_dict = dict(zip(self.feature_names, self.model.feature_importances_))
            return dict(sorted(importance_dict.items(), key=lambda x: x[1], reverse=True))
        elif hasattr(self.model, 'coef_'):
            importance_dict = dict(zip(self.feature_names, np.abs(self.model.coef_)))
            return dict(sorted(importance_dict.items(), key=lambda x: x[1], reverse=True))
        else:
            return {}
    
    def save_model(self, filepath: str) -> None:
        """Save the trained model"""
        if self.model is None:
            raise ValueError("Model not trained yet")
        
        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        # Save model
        joblib.dump(self.model, filepath)
        
        # Save metadata
        metadata_file = filepath.replace('.pkl', '_metadata.json')
        metadata = {
            'model_type': self.model_type,
            'task_type': self.task_type,
            'feature_names': self.feature_names,
            'best_params': self.best_params,
            'cv_scores': self.cv_scores,
            'training_history': self.training_history,
            'scaler': self.scaler,
            'feature_selector': self.feature_selector
        }
        
        # Convert numpy arrays to lists for JSON serialization
        for key, value in metadata.items():
            if isinstance(value, np.ndarray):
                metadata[key] = value.tolist()
            elif hasattr(value, '__dict__'):
                metadata[key] = str(value)
        
        with open(metadata_file, 'w') as f:
            json.dump(metadata, f, indent=2)
    
    @classmethod
    def load_model(cls, filepath: str) -> 'EnhancedQSARModel':
        """Load a trained model"""
        # Load model
        model = joblib.load(filepath)
        
        # Load metadata
        metadata_file = filepath.replace('.pkl', '_metadata.json')
        if os.path.exists(metadata_file):
            with open(metadata_file, 'r') as f:
                metadata = json.load(f)
            
            # Create instance
            instance = cls(metadata['model_type'], metadata['task_type'])
            instance.model = model
            instance.feature_names = metadata['feature_names']
            instance.best_params = metadata['best_params']
            instance.cv_scores = metadata['cv_scores']
            instance.training_history = metadata['training_history']
            
            return instance
        
        return instance

# Convenience functions
def create_qsar_model(model_type: str = 'random_forest', task_type: str = 'regression') -> EnhancedQSARModel:
    """Create a QSAR model instance"""
    return EnhancedQSARModel(model_type, task_type)

def train_qsar_model(X: pd.DataFrame, y: pd.Series, model_type: str = 'random_forest', 
                    task_type: str = 'regression', **kwargs) -> EnhancedQSARModel:
    """Create and train a QSAR model"""
    model = EnhancedQSARModel(model_type, task_type)
    model.train(X.values, y.values, **kwargs)
    return model 