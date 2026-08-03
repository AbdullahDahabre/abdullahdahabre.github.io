import React from 'react';
import { Project, ProjectCategory } from '../types';

/**
 * Single source of truth for every project on the site, in display order.
 *
 * `featured: true` promotes a project to the grid on the home page; the archive
 * page at /projects renders this list in full. Both read the array in order, so
 * the home grid is always a prefix-consistent subset of the archive: reorder
 * here and both pages follow.
 */
export const projects: Project[] = [
  {
    slug: 'lavabella',
    category: 'production',
    title: 'LavaBella: AI Skincare Companion (iOS)',
    period: 'May 2026 – Present',
    featured: true,
    description:
      'Built an iOS skincare companion that turns a selfie into a 0-100 skin score across six metrics, powered by a custom computer-vision pipeline (MediaPipe + OpenCV) on a serverless Modal GPU that keeps face photos out of every third-party AI. The system comprises an Expo/React Native app (vision-camera, Skia), a FastAPI backend, and Arq workers on Upstash Redis, backed by Supabase Postgres/pgvector with row-level security on 37 tables, self-hosted on a Cloudflare-fronted Hetzner VPS and shipped to the App Store via EAS. It integrates Claude Sonnet 4.6 for a streaming coach with 7 tools and Haiku 4.5 for routine generation, with prompt caching, per-turn and daily token caps, and a deterministic validator on every generated routine. Production hardening covers a Cloudflare-only origin with mTLS, column-scoped database grants, a TOTP-gated admin dashboard with an append-only audit log, an iOS privacy manifest, and in-app account deletion.',
    tags: [
      'iOS',
      'Expo',
      'React Native',
      'Computer Vision',
      'MediaPipe',
      'OpenCV',
      'Modal GPU',
      'FastAPI',
      'Claude Sonnet 4.6',
      'Haiku 4.5',
      'Supabase',
      'pgvector',
      'Redis',
      'Cloudflare',
      'Hetzner',
    ],
    metrics: 'Shipped to the App Store',
    demoLink: 'https://lavabella.com',
    image: '/projects/lavabella.png',
  },
  {
    slug: 'keytext',
    category: 'production',
    title: 'KeyText: AI Writing & Snippet Assistant',
    period: 'Apr 2026 – May 2026',
    featured: true,
    description:
      'Built a Chrome extension and full-stack SaaS for AI-assisted writing that expands reusable snippets with dynamic {{variables}} and rewrites, replies to, and generates text inline across Gmail, LinkedIn, Reddit, and other rich-text editors to speed up everyday communication. The system comprises a Manifest V3 extension (vanilla JS), a Node HTTP API, and a Next.js 15 admin dashboard, all backed by Supabase (PostgreSQL) with Stripe subscriptions and shipped via CI/CD to a self-managed VPS behind nginx. It integrates OpenAI GPT-4o-mini for streaming rewrite/reply/generation with production safeguards, Supabase JWT auth, per-user rate limiting and concurrency guards, and atomic SQL monthly/daily quota enforcement across Free/Pro/Team tiers.',
    tags: [
      'Chrome Extension',
      'Manifest V3',
      'Node.js',
      'Next.js 15',
      'Supabase',
      'PostgreSQL',
      'Stripe',
      'GPT-4o-mini',
      'nginx',
      'CI/CD',
    ],
    demoLink: 'https://keytext.app',
    image: '/projects/project_keytext.webp',
  },
  {
    slug: 'haqiqa',
    category: 'production',
    title: 'Haqiqa: Agentic Fake News Detector',
    period: 'Dec 2025 – Feb 2026',
    featured: true,
    description:
      'Built and deployed a multi-agent LangGraph fact-checking pipeline that covers claim extraction, web search, evidence ranking, verification, and verdict generation, leveraging GPT-4o-mini and Serper with language-aware normalization including Arabic support, to produce cited True/False/Unclear outputs. Additionally, I developed a full-stack platform using FastAPI and Next.js 15 (TypeScript/Tailwind), incorporating JWT and Google OAuth for authentication, along with features like analysis history and a Telegram bot. The platform is backed by Supabase (PostgreSQL) and hosted on Render/Vercel. I also implemented production safeguards, including per-user rate limiting through atomic SQL, throttling, admin controls, and performance tracking with LangSmith, which is shared across both web and Telegram clients for enhanced observability and control.',
    tags: [
      'LangGraph',
      'LangSmith',
      'GPT-4o-mini',
      'Serper',
      'FastAPI',
      'Next.js 15',
      'Google OAuth',
      'JWT',
      'PostgreSQL',
      'Render',
      'Vercel',
      'Telegram Bot',
    ],
    demoLink: 'https://haqiqaa.vercel.app',
    extraLinks: [{ label: 'Telegram Bot', href: 'https://t.me/HaqiqaNewsBot', icon: 'telegram' }],
    image: '/projects/haqiqa.webp',
  },
  {
    slug: 'ai-job-resume-coach',
    category: 'production',
    title: 'AI Job & Resume Coach',
    period: 'Jul 2025',
    featured: true,
    description:
      'Delivered an AI-powered career platform that analyzes resumes, generates tailored cover letters, provides interview Q&A, and recommends job search links. Built with FastAPI, Python, React, and Vite, and deployed on Vercel and Render. Leveraged Groq Llama-3 for PDF resume parsing, professional feedback scoring, and seamless API integration to help users strengthen job applications and interview readiness.',
    tags: ['Groq Llama-3', 'FastAPI', 'React', 'Vite'],
    link: 'https://github.com/AbdullahDahabre/AI-Job---Resume-Coach',
    demoLink: 'https://ai-job-resume-coach.vercel.app',
    image: '/projects/project_jobcoach.webp',
  },
  {
    slug: 't2d-prediction-system',
    category: 'applied-ml',
    title: 'T2D Prediction System (Data Fusion)',
    period: 'Feb 2025 – Jun 2025',
    association: 'Bahcesehir University',
    featured: true,
    description: (
      <>
        Built an AI-driven T2D risk prediction system combining clinical and genetic data using a custom TensorFlow/Keras
        fusion model (95% train, 92% validation accuracy). Designed preprocessing pipelines for diverse populations
        (African American, Bangladeshi, Iraqi) and validated with cross validation. Developed a FastAPI + React
        architecture with secure login, patient dashboards, and real-time predictions with model confidence and
        contributing factor analysis. Integrated a fine-tuned GPT-3.5-turbo via OpenAI API to assist clinicians with
        result interpretation. Predictions were compared with{' '}
        <a
          href="https://diabetes.org"
          target="_blank"
          rel="noreferrer"
          className="text-neonCyan hover:underline"
        >
          American Diabetes Association
        </a>{' '}
        guidelines to ensure reliability and interpretability. Deployed on Vercel and Render for scalability.
      </>
    ),
    tags: ['TensorFlow', 'Keras', 'Data Fusion', 'FastAPI', 'React', 'OpenAI API'],
    metrics: '95% Train Accuracy · 92% Validation Accuracy',
    link: 'https://github.com/AbdullahDahabre/T2D-Prediction-System--Data-Fusion-for-Enhanced-Decision-Making',
    demoLink: 'https://diabtrack.vercel.app',
    image: '/projects/project_t2d.webp',
  },
  {
    slug: 'brain-tumor-detection',
    category: 'applied-ml',
    title: 'Brain Tumor Detection',
    period: 'May 2025',
    association: 'Bahcesehir University',
    featured: true,
    description:
      'Worked jointly with a teammate to develop deep learning models for brain tumor detection from MRI scans using a dataset of 253 images. Applied transfer learning with pretrained architectures: VGG16, VGG19, InceptionV3, ResNet50, EfficientNetB0, and MobileNetV2. Preprocessed and augmented the data, trained and validated models, and evaluated performance with classification metrics. The InceptionV3 model achieved the best results with 94% test accuracy and an F1-score of 0.94. Combined open-source code with custom improvements for a reproducible, educational implementation, documented in a detailed report resembling a research paper.',
    tags: ['Deep Learning', 'Transfer Learning', 'InceptionV3', 'Medical Imaging', 'Keras'],
    metrics: '94% Test Accuracy · F1 0.94',
    link: 'https://github.com/AbdullahDahabre/Brain-Tumor-Detection',
    image: '/projects/project_tumor.webp',
  },
  {
    slug: 'laptop-price-mlops',
    category: 'applied-ml',
    title: 'Laptop Price Prediction: End-to-End MLOps Pipeline',
    period: 'Jun 2025',
    association: 'Bahcesehir University',
    description:
      'Built a complete MLOps pipeline to predict laptop prices using regression models. Automated data ingestion, preprocessing, training, tuning (with Hyperopt), and deployment with MLflow. Integrated a Streamlit UI for live predictions and served the best Ridge Regression model via REST API. Achieved R² = 1.0, MAE = 145.37, and RMSE = 178.74. Logged SHAP plots highlighting Storage Capacity as the most influential feature and tracked all metrics for production-ready workflows.',
    tags: ['MLOps', 'MLflow', 'Hyperopt', 'SHAP', 'Streamlit', 'REST API', 'Scikit-learn'],
    metrics: 'Ridge Regression · MAE 145.37 · RMSE 178.74',
    link: 'https://github.com/AbdullahDahabre/LaptopPricePrediction-MLOps',
    image: '/projects/project_mlops.webp',
  },
  {
    slug: 'house-prices-regression',
    category: 'foundations',
    title: 'House Prices: Advanced Regression Techniques',
    period: 'Sep 2023',
    description:
      'Developed a machine learning model to predict house prices using regression algorithms including Linear Regression, Decision Tree, Random Forest, and SVM. Preprocessed a dataset of 1,460 entries with over 80 features, performed EDA, and engineered key variables. Achieved best results with Random Forest, reaching an R² score of 0.88. Applied cross-validation to ensure performance consistency.',
    tags: ['Regression', 'Random Forest', 'SVM', 'EDA', 'Feature Engineering', 'Scikit-learn'],
    metrics: 'R² = 0.88 (Random Forest)',
    link: 'https://github.com/AbdullahDahabre/House-Prices-Advanced-Regression-Techniques',
    extraLinks: [
      {
        label: 'Kaggle Notebook',
        href: 'https://www.kaggle.com/code/abdullahdahabre23/house-prices-advanced-regression-techniques',
        icon: 'kaggle',
      },
    ],
    image: '/projects/house_prices.png',
  },
  {
    slug: 'customer-personality-analysis',
    category: 'foundations',
    title: 'Customer Personality Analysis',
    period: 'Jul 2024',
    description:
      'Conducted customer personality analysis using K-means and Hierarchical Agglomerative Clustering. Preprocessed data, handled missing values, and engineered features to enhance model accuracy. Applied PCA for dimensionality reduction and visualized clusters using boxplots and histograms. Evaluated clustering results to identify key customer segments, aiding in targeted marketing strategies.',
    tags: ['Clustering', 'K-Means', 'Hierarchical Clustering', 'PCA', 'Feature Engineering', 'EDA'],
    link: 'https://github.com/AbdullahDahabre/Customer-Personality-Analysis',
    extraLinks: [
      {
        label: 'Kaggle Notebook',
        href: 'https://www.kaggle.com/code/abdullahdahabre23/customer-segmentation-pca',
        icon: 'kaggle',
      },
    ],
    image: '/projects/personality_customer_analysis.png',
  },
  {
    slug: 'titanic-survival',
    category: 'foundations',
    title: 'Titanic: Machine Learning from Disaster',
    period: 'Nov 2023',
    description:
      'Developed a predictive model for the Titanic survival dataset using Logistic Regression, Decision Tree, and Random Forest classifiers. Preprocessed data for 891 passengers, engineered features, and handled missing values. Achieved best performance with Random Forest (accuracy: 0.83, precision: 0.82, recall: 0.74). Used Grid Search to tune hyperparameters (max_depth=10, n_estimators=150) and validated results with cross-validation (mean accuracy: 0.84, std: 0.04).',
    tags: ['Random Forest', 'Logistic Regression', 'Decision Tree', 'Grid Search', 'Scikit-learn'],
    metrics: '0.83 Accuracy (Random Forest)',
    link: 'https://github.com/AbdullahDahabre/Titanic--Machine-Learning-from-Disaster',
    extraLinks: [
      {
        label: 'Kaggle Notebook',
        href: 'https://www.kaggle.com/code/abdullahdahabre23/titanic-machine-learning-from-disaster',
        icon: 'kaggle',
      },
    ],
    image: '/projects/project_titanic.webp',
  },
  {
    slug: 'red-wine-quality',
    category: 'foundations',
    title: 'Red Wine Quality: EDA & Classification',
    period: 'Sep 2023',
    description:
      'Developed a machine learning model to predict the quality of Portuguese red wine using 1,599 samples and 12 features. Conducted data preprocessing, feature scaling, and handled class imbalance with SMOTE. Trained Decision Tree and Random Forest classifiers, achieving up to 86% accuracy and AUC of 0.87 with Random Forest. Validated performance using 10-fold cross-validation (mean accuracy: 0.89) and analyzed results via ROC curves and feature importance.',
    tags: ['Classification', 'Random Forest', 'SMOTE', 'ROC/AUC', 'EDA', 'Scikit-learn'],
    metrics: '86% Accuracy · AUC 0.87',
    link: 'https://github.com/AbdullahDahabre/Red-Wine-Quality-EDA-Classification',
    extraLinks: [
      {
        label: 'Kaggle Notebook',
        href: 'https://www.kaggle.com/code/abdullahdahabre23/red-wine-quality-eda-classification-90',
        icon: 'kaggle',
      },
    ],
    image: '/projects/red_wine.jpg',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

/** Archive sections, in the order they appear on /projects. */
const CATEGORIES: { id: ProjectCategory; label: string; blurb: string }[] = [
  {
    id: 'production',
    label: 'Production AI Systems',
    blurb: 'Products with real users, running on infrastructure I built and maintain.',
  },
  {
    id: 'applied-ml',
    label: 'Applied ML & Deep Learning',
    blurb: 'University and research work where the model is the deliverable, from training through deployment.',
  },
  {
    id: 'foundations',
    label: 'ML Foundations & Kaggle',
    blurb: 'Earlier self-directed work on classic datasets, where I picked up the fundamentals.',
  },
];

/** Projects bucketed into their section, keeping the order declared above. */
export const projectSections = CATEGORIES.map((category) => ({
  ...category,
  items: projects.filter((project) => project.category === category.id),
})).filter((section) => section.items.length > 0);

/** Span covered by the archive, derived from the `period` strings above. */
export const projectYearRange = ((): { first: number; last: number } => {
  const years = projects.flatMap((project) => (project.period.match(/\d{4}/g) ?? []).map(Number));
  return { first: Math.min(...years), last: Math.max(...years) };
})();
