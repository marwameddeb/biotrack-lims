# 🧬 BioTrack LIMS — Système de Traçabilité Biopharmaceutique

**BioTrack LIMS** (Laboratory Information Management System) est une application web légère de gestion de laboratoire et de suivi des bioprocessus. Conçue pour l'industrie biopharmaceutique, elle permet d'assurer la traçabilité des lots de production (vaccins, anticorps monoclonaux, protéines récombinantes), d'automatiser le contrôle qualité et de générer des rapports d'audit conformes aux exigences réglementaires.

---

## 📌 Présentation du Projet

Dans le secteur biopharmaceutique, la fabrication de biomédicaments requiert une rigueur absolue. **BioTrack LIMS** fait le pont entre la **biotechnologie** et le **génie logiciel** en proposant un système d'information centralisé pour :
1. Suivre les paramètres critiques des procédés de biomanufacturing (pH, température).
2. Vérifier la conformité réglementaire des lots en temps réel.
3. Conserver l'historique complet pour la traçabilité et les audits qualité.

---

## ✨ Fonctionnalités Principales

- **🔬 Module de Biologie Moléculaire (Expression Protéique) :**
  - Transcription instantanée d'une séquence d'ADN en ARNm.
  - Vérification de la validité des bases nucléotidiques (`A`, `T`, `C`, `G`).

- **📋 Enregistrement & Traçabilité des Lots :**
  - Saisie structurée des métriques : Code du lot, Nom du biomédicament, Température, pH et Étape de production (*Culture Cellulaire*, *Purification*, *Formulation*).

- **⚙️ Contrôle Qualité (CQ) Automatisé :**
  - Validation automatique selon des normes strictes de bioprocessus :
    - **Température conforme :** $36.5^\circ\text{C} \le T \le 37.5^\circ\text{C}$
    - **pH conforme :** $6.8 \le \text{pH} \le 7.4$
  - Attribution dynamique des statuts : **Conforme** (badge vert) ou **Non Conforme** (badge rouge).

- **🔍 Recherche & Filtres en Temps Réel :**
  - Recherche textuelle par code de lot ou nom de médicament.
  - Filtrage multicritère par statut de conformité (*Tous*, *Conformes*, *Non Conformes*).

- **💾 Persistance des Données :**
  - Sauvegarde automatique du registre dans le `LocalStorage` du navigateur pour conserver les données après rafraîchissement.

- **📥 Exportation du Rapport d'Audit CSV :**
  - Génération et téléchargement en un clic d'un fichier `.csv` contenant l'intégralité du registre.
  - Encodage UTF-8 (BOM) et séparateurs `;` assurant une compatibilité parfaite avec **Microsoft Excel**.

- **🌙 Interface Adaptive :**
  - Mode Sombre / Mode Clair intégré pour un confort visuel en environnement de laboratoire.

---

## 🛠️ Technologies Utilisées

* **Front-End :** HTML5, CSS3 (Variables CSS, Flexbox, Responsive Design), JavaScript Vanilla (ES6+).
* **Gestion des Données :** API Web `LocalStorage`, API Blob (`URL.createObjectURL`).
* **Gestion de Version :** Git & GitHub.

---

## 📁 Structure du Projet

```text
biotrack-lims/
│
├── index.html      # Structure HTML5 et modules applicatifs
├── style.css       # Styles, variables CSS et thème sombre/clair
├── script.js       # Logique métier, validation CQ, stockage et export CSV
├── .gitignore      # Fichiers à ignorer par Git
└── README.md       # Documentation du projet
```

## **🚀 Installation et Utilisation**
**1. Cloner le dépôt :**

```
bash
git clone https://github.com/marwameddeb/biotrack-lims.git

```
**2. Lancer l'application :**
Ouvrez simplement le fichier index.html dans n'importe quel navigateur web moderne (aucun serveur ni dépendance npm requis).
 
**3. Générer un rapport d'audit :**

- Ajoutez un ou plusieurs lots dans le formulaire d'enregistrement.

- Cliquez sur « 📥 Exporter Rapport CSV » pour télécharger le fichier de rapport directement dans votre dossier de téléchargements.

## **🎯 Valeur Ajoutée & Compétences Métier**
Ce projet met en avant plusieurs compétences clés :

- **Analyse et Modélisation de Règles Métier :** Application concrète de contraintes de qualité industrielle au sein d'une architecture logicielle.

- **Développement JavaScript Pur :** Manipulation avancée du DOM, gestion d'événements, algorithmes de filtrage et génération dynamique de fichiers.

- **Conformité & Traçabilité :** Respect des principes de suivi des données essentiels aux Bonnes Pratiques de Fabrication (BPF / GMP).

