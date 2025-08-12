"""
Enhanced Molecular Descriptors for QSAR/QSPR/QSTR Modeling
Comprehensive 2D and 3D molecular descriptor calculations
"""

import numpy as np
import pandas as pd
from typing import Dict, List, Optional, Tuple, Union
from rdkit import Chem
from rdkit.Chem import Descriptors, rdMolDescriptors, AllChem, rdMolDescriptors
from rdkit.Chem.rdMolDescriptors import GetWHIM, GetGETAWAY, Get3DMoRSE
import warnings

warnings.filterwarnings('ignore')

class EnhancedDescriptors:
    """Enhanced molecular descriptor calculator for QSAR/QSPR/QSTR modeling"""
    
    def __init__(self):
        self.descriptor_names = {
            '2d': self._get_2d_descriptor_names(),
            '3d': self._get_3d_descriptor_names(),
            'fingerprint': self._get_fingerprint_names(),
            'fragment': self._get_fragment_names(),
            'estate': self._get_estate_names()
        }
    
    def _get_2d_descriptor_names(self) -> List[str]:
        """Get 2D molecular descriptor names"""
        return [
            'MolWt', 'LogP', 'NumHDonors', 'NumHAcceptors', 'TPSA',
            'NumRotatableBonds', 'NumAromaticRings', 'NumSaturatedRings',
            'FractionCsp3', 'HeavyAtomCount', 'RingCount', 'AromaticRings',
            'SaturatedRings', 'AliphaticRings', 'NumRadicalElectrons',
            'NumValenceElectrons', 'MaxPartialCharge', 'MinPartialCharge',
            'MaxEStateIndex', 'MinEStateIndex', 'MaxAbsEStateIndex',
            'MinAbsEStateIndex', 'qed', 'MolMR', 'LabuteASA'
        ]
    
    def _get_3d_descriptor_names(self) -> List[str]:
        """Get 3D molecular descriptor names"""
        return [
            'PlaneOfBestFit', 'PBF', 'PMI1', 'PMI2', 'PMI3',
            'PMI1_norm', 'PMI2_norm', 'PMI3_norm', 'WHIM1', 'WHIM2',
            'WHIM3', 'WHIM4', 'WHIM5', 'WHIM6', 'WHIM7',
            'GETAWAY1', 'GETAWAY2', 'GETAWAY3', 'GETAWAY4', 'GETAWAY5',
            '3DMoRSE1', '3DMoRSE2', '3DMoRSE3', '3DMoRSE4', '3DMoRSE5'
        ]
    
    def _get_fingerprint_names(self) -> List[str]:
        """Get molecular fingerprint names"""
        return [
            'Morgan_FP', 'AtomPair_FP', 'Torsion_FP', 'MACCS_FP',
            'RDKit_FP', 'Pattern_FP', 'Morgan2_FP', 'Morgan3_FP'
        ]
    
    def _get_fragment_names(self) -> List[str]:
        """Get fragment-based descriptor names"""
        return [
            'fr_Al_COO', 'fr_Al_OH', 'fr_Ar_COO', 'fr_Ar_OH',
            'fr_benzene', 'fr_ether', 'fr_ester', 'fr_halogen',
            'fr_ketone', 'fr_ketone_Topliss', 'fr_lactone', 'fr_methoxy',
            'fr_morpholine', 'fr_nitro', 'fr_nitro_arom', 'fr_nitro_arom_nonortho',
            'fr_nitroso', 'fr_oxazole', 'fr_oxime', 'fr_para_hydroxylation',
            'fr_phenol', 'fr_phenol_noOrthoHbond', 'fr_phos_acid', 'fr_phos_ester',
            'fr_piperdine', 'fr_piperzine', 'fr_priamide', 'fr_prisulfonamd',
            'fr_pyridine', 'fr_quatN', 'fr_sulfide', 'fr_sulfonamd',
            'fr_sulfone', 'fr_term_acetylene', 'fr_tetrazole', 'fr_thiazole',
            'fr_thiocyan', 'fr_thiophene', 'fr_unbrch_alkane', 'fr_urea'
        ]
    
    def _get_estate_names(self) -> List[str]:
        """Get E-state descriptor names"""
        return [
            'EState_VSA1', 'EState_VSA2', 'EState_VSA3', 'EState_VSA4',
            'EState_VSA5', 'EState_VSA6', 'EState_VSA7', 'EState_VSA8',
            'EState_VSA9', 'EState_VSA10', 'EState_VSA11'
        ]
    
    def calculate_descriptors(self, smiles: str, include_3d: bool = True) -> Dict[str, float]:
        """Calculate comprehensive molecular descriptors"""
        try:
            mol = Chem.MolFromSmiles(smiles)
            if mol is None:
                raise ValueError(f"Invalid SMILES: {smiles}")
            
            descriptors = {}
            
            # 2D descriptors
            descriptors.update(self._calculate_2d_descriptors(mol))
            
            # 3D descriptors (if requested and possible)
            if include_3d:
                try:
                    descriptors.update(self._calculate_3d_descriptors(mol))
                except Exception as e:
                    print(f"Warning: Could not calculate 3D descriptors: {e}")
            
            # Fingerprints
            descriptors.update(self._calculate_fingerprints(mol))
            
            # Fragment descriptors
            descriptors.update(self._calculate_fragment_descriptors(mol))
            
            # E-state descriptors
            descriptors.update(self._calculate_estate_descriptors(mol))
            
            return descriptors
            
        except Exception as e:
            raise ValueError(f"Error calculating descriptors: {e}")
    
    def _calculate_2d_descriptors(self, mol: Chem.Mol) -> Dict[str, float]:
        """Calculate 2D molecular descriptors"""
        descriptors = {}
        
        # Basic descriptors
        descriptors['MolWt'] = Descriptors.MolWt(mol)
        descriptors['LogP'] = Descriptors.MolLogP(mol)
        descriptors['NumHDonors'] = Descriptors.NumHDonors(mol)
        descriptors['NumHAcceptors'] = Descriptors.NumHAcceptors(mol)
        descriptors['TPSA'] = Descriptors.TPSA(mol)
        descriptors['NumRotatableBonds'] = Descriptors.NumRotatableBonds(mol)
        descriptors['NumAromaticRings'] = Descriptors.NumAromaticRings(mol)
        descriptors['NumSaturatedRings'] = Descriptors.NumSaturatedRings(mol)
        descriptors['FractionCsp3'] = Descriptors.FractionCsp3(mol)
        descriptors['HeavyAtomCount'] = Descriptors.HeavyAtomCount(mol)
        descriptors['RingCount'] = Descriptors.RingCount(mol)
        descriptors['AromaticRings'] = Descriptors.NumAromaticRings(mol)
        descriptors['SaturatedRings'] = Descriptors.NumSaturatedRings(mol)
        descriptors['AliphaticRings'] = Descriptors.NumAliphaticRings(mol)
        descriptors['NumRadicalElectrons'] = Descriptors.NumRadicalElectrons(mol)
        descriptors['NumValenceElectrons'] = Descriptors.NumValenceElectrons(mol)
        
        # Charge descriptors
        descriptors['MaxPartialCharge'] = Descriptors.MaxPartialCharge(mol)
        descriptors['MinPartialCharge'] = Descriptors.MinPartialCharge(mol)
        
        # E-state descriptors
        descriptors['MaxEStateIndex'] = Descriptors.MaxEStateIndex(mol)
        descriptors['MinEStateIndex'] = Descriptors.MinEStateIndex(mol)
        descriptors['MaxAbsEStateIndex'] = Descriptors.MaxAbsEStateIndex(mol)
        descriptors['MinAbsEStateIndex'] = Descriptors.MinAbsEStateIndex(mol)
        
        # Advanced descriptors
        descriptors['qed'] = Descriptors.qed(mol)
        descriptors['MolMR'] = Descriptors.MolMR(mol)
        descriptors['LabuteASA'] = Descriptors.LabuteASA(mol)
        
        return descriptors
    
    def _calculate_3d_descriptors(self, mol: Chem.Mol) -> Dict[str, float]:
        """Calculate 3D molecular descriptors"""
        descriptors = {}
        
        # Generate 3D conformer
        mol_3d = self._generate_3d_conformers(mol)
        if mol_3d is None:
            return descriptors
        
        # Plane of Best Fit and PMI
        try:
            descriptors.update(self._calculate_pmi_descriptors(mol_3d))
        except:
            pass
        
        # WHIM descriptors
        try:
            whim = GetWHIM(mol_3d)
            for i, val in enumerate(whim, 1):
                descriptors[f'WHIM{i}'] = float(val)
        except:
            pass
        
        # GETAWAY descriptors
        try:
            getaway = GetGETAWAY(mol_3d)
            for i, val in enumerate(getaway, 1):
                descriptors[f'GETAWAY{i}'] = float(val)
        except:
            pass
        
        # 3D-MoRSE descriptors
        try:
            morse = Get3DMoRSE(mol_3d)
            for i, val in enumerate(morse, 1):
                descriptors[f'3DMoRSE{i}'] = float(val)
        except:
            pass
        
        return descriptors
    
    def _generate_3d_conformers(self, mol: Chem.Mol, num_confs: int = 1) -> Optional[Chem.Mol]:
        """Generate 3D conformers for a molecule"""
        try:
            # Add hydrogens
            mol_h = Chem.AddHs(mol)
            
            # Generate conformers using ETKDG
            AllChem.EmbedMultipleConfs(mol_h, numConfs=num_confs, randomSeed=42)
            
            # Optimize conformers
            for conf_id in range(mol_h.GetNumConfs()):
                try:
                    AllChem.MMFFOptimizeMolecule(mol_h, confId=conf_id)
                except:
                    try:
                        AllChem.UFFOptimizeMolecule(mol_h, confId=conf_id)
                    except:
                        pass
            
            return mol_h
        except:
            return None
    
    def _calculate_pmi_descriptors(self, mol: Chem.Mol) -> Dict[str, float]:
        """Calculate Principal Moments of Inertia descriptors"""
        descriptors = {}
        
        try:
            # Get 3D coordinates
            conf = mol.GetConformer()
            coords = []
            for atom in mol.GetAtoms():
                pos = conf.GetAtomPosition(atom.GetIdx())
                coords.append([pos.x, pos.y, pos.z])
            
            coords = np.array(coords)
            
            # Calculate PMI
            pmi1, pmi2, pmi3 = self._calculate_principal_moments(coords)
            
            # Store PMI values
            descriptors['PMI1'] = pmi1
            descriptors['PMI2'] = pmi2
            descriptors['PMI3'] = pmi3
            
            # Normalized PMI values
            total_pmi = pmi1 + pmi2 + pmi3
            if total_pmi > 0:
                descriptors['PMI1_norm'] = pmi1 / total_pmi
                descriptors['PMI2_norm'] = pmi2 / total_pmi
                descriptors['PMI3_norm'] = pmi3 / total_pmi
            
            # Plane of Best Fit
            descriptors['PlaneOfBestFit'] = self._calculate_plane_of_best_fit(coords)
            descriptors['PBF'] = descriptors['PlaneOfBestFit']
            
        except Exception as e:
            print(f"Warning: Could not calculate PMI descriptors: {e}")
        
        return descriptors
    
    def _calculate_principal_moments(self, coords: np.ndarray) -> Tuple[float, float, float]:
        """Calculate principal moments of inertia"""
        # Center coordinates
        centered = coords - np.mean(coords, axis=0)
        
        # Calculate inertia tensor
        inertia = np.zeros((3, 3))
        for coord in centered:
            x, y, z = coord
            inertia[0, 0] += y**2 + z**2
            inertia[1, 1] += x**2 + z**2
            inertia[2, 2] += x**2 + y**2
            inertia[0, 1] = inertia[1, 0] -= x * y
            inertia[0, 2] = inertia[2, 0] -= x * z
            inertia[1, 2] = inertia[2, 1] -= y * z
        
        # Get eigenvalues (principal moments)
        eigenvals = np.linalg.eigvals(inertia)
        eigenvals = np.sort(eigenvals)[::-1]  # Sort in descending order
        
        return float(eigenvals[0]), float(eigenvals[1]), float(eigenvals[2])
    
    def _calculate_plane_of_best_fit(self, coords: np.ndarray) -> float:
        """Calculate plane of best fit descriptor"""
        try:
            # Center coordinates
            centered = coords - np.mean(coords, axis=0)
            
            # SVD to find best fit plane
            U, S, Vt = np.linalg.svd(centered)
            
            # Normal vector to best fit plane
            normal = Vt[2, :]
            
            # Calculate average distance to plane
            distances = np.abs(np.dot(centered, normal))
            avg_distance = np.mean(distances)
            
            return float(avg_distance)
        except:
            return 0.0
    
    def _calculate_fingerprints(self, mol: Chem.Mol) -> Dict[str, float]:
        """Calculate molecular fingerprints"""
        descriptors = {}
        
        try:
            # Morgan fingerprints
            morgan_fp = rdMolDescriptors.GetMorganFingerprintAsBitVect(mol, 2)
            descriptors['Morgan_FP'] = float(morgan_fp.GetNumOnBits())
            
            # Atom pair fingerprints
            atompair_fp = rdMolDescriptors.GetAtomPairFingerprintAsBitVect(mol)
            descriptors['AtomPair_FP'] = float(atompair_fp.GetNumOnBits())
            
            # Torsion fingerprints
            torsion_fp = rdMolDescriptors.GetTopologicalTorsionFingerprintAsBitVect(mol)
            descriptors['Torsion_FP'] = float(torsion_fp.GetNumOnBits())
            
            # MACCS keys
            maccs_fp = rdMolDescriptors.GetMACCSKeysFingerprint(mol)
            descriptors['MACCS_FP'] = float(maccs_fp.GetNumOnBits())
            
            # RDKit fingerprints
            rdkit_fp = Chem.RDKFingerprint(mol)
            descriptors['RDKit_FP'] = float(rdkit_fp.GetNumOnBits())
            
            # Pattern fingerprints
            pattern_fp = Chem.PatternFingerprint(mol)
            descriptors['Pattern_FP'] = float(pattern_fp.GetNumOnBits())
            
            # Higher order Morgan fingerprints
            morgan2_fp = rdMolDescriptors.GetMorganFingerprintAsBitVect(mol, 3)
            descriptors['Morgan2_FP'] = float(morgan2_fp.GetNumOnBits())
            morgan3_fp = rdMolDescriptors.GetMorganFingerprintAsBitVect(mol, 4)
            descriptors['Morgan3_FP'] = float(morgan3_fp.GetNumOnBits())
            
        except Exception as e:
            print(f"Warning: Could not calculate fingerprints: {e}")
        
        return descriptors
    
    def _calculate_fragment_descriptors(self, mol: Chem.Mol) -> Dict[str, float]:
        """Calculate fragment-based descriptors"""
        descriptors = {}
        
        try:
            # Get fragment descriptors
            frag_descriptors = Descriptors._descList
            
            for desc_name, desc_func in frag_descriptors:
                if desc_name.startswith('fr_'):
                    try:
                        value = desc_func(mol)
                        descriptors[desc_name] = float(value)
                    except:
                        descriptors[desc_name] = 0.0
                        
        except Exception as e:
            print(f"Warning: Could not calculate fragment descriptors: {e}")
        
        return descriptors
    
    def _calculate_estate_descriptors(self, mol: Chem.Mol) -> Dict[str, float]:
        """Calculate E-state descriptors"""
        descriptors = {}
        
        try:
            # EState VSA descriptors
            estate_vsa = rdMolDescriptors.EState_VSA_(mol)
            for i, val in enumerate(estate_vsa, 1):
                descriptors[f'EState_VSA{i}'] = float(val)
                
        except Exception as e:
            print(f"Warning: Could not calculate E-state descriptors: {e}")
        
        return descriptors
    
    def get_descriptor_info(self) -> Dict[str, Dict[str, str]]:
        """Get information about all available descriptors"""
        info = {
            '2D Descriptors': {
                'MolWt': 'Molecular weight',
                'LogP': 'Octanol-water partition coefficient',
                'TPSA': 'Topological polar surface area',
                'NumHDonors': 'Number of hydrogen bond donors',
                'NumHAcceptors': 'Number of hydrogen bond acceptors',
                'NumRotatableBonds': 'Number of rotatable bonds',
                'FractionCsp3': 'Fraction of sp3 hybridized carbons',
                'qed': 'Quantitative estimate of drug-likeness'
            },
            '3D Descriptors': {
                'PMI1': 'Principal moment of inertia 1',
                'PMI2': 'Principal moment of inertia 2',
                'PMI3': 'Principal moment of inertia 3',
                'WHIM': 'Weighted Holistic Invariant Molecular descriptors',
                'GETAWAY': 'Geometry, Topology, and Atom-Weights Assembly descriptors',
                '3DMoRSE': '3D-MoRSE (3D Molecule Representation of Structures)'
            },
            'Fingerprints': {
                'Morgan_FP': 'Morgan circular fingerprint (radius 2)',
                'AtomPair_FP': 'Atom pair fingerprint',
                'Torsion_FP': 'Topological torsion fingerprint',
                'MACCS_FP': 'MACCS structural keys'
            },
            'Fragment Descriptors': {
                'fr_benzene': 'Number of benzene rings',
                'fr_halogen': 'Number of halogen atoms',
                'fr_ketone': 'Number of ketone groups',
                'fr_ether': 'Number of ether groups'
            }
        }
        return info

# Convenience function
def calculate_molecular_descriptors(smiles: str, include_3d: bool = True) -> Dict[str, float]:
    """Calculate molecular descriptors for a SMILES string"""
    calculator = EnhancedDescriptors()
    return calculator.calculate_descriptors(smiles, include_3d)

def get_descriptor_information() -> Dict[str, Dict[str, str]]:
    """Get information about available descriptors"""
    calculator = EnhancedDescriptors()
    return calculator.get_descriptor_info() 