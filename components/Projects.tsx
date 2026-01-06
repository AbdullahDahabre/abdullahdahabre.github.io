import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import Modal from './ui/Modal';

const projects: Project[] = [
  {
    title: "T2D Prediction System (Data Fusion)",
    description: (
      <>
        Built an AI-driven T2D risk prediction system combining clinical and genetic data using a custom TensorFlow/Keras fusion model (95% train, 92% validation accuracy). Designed preprocessing pipelines for diverse populations and validated with cross validation. Developed a FastAPI + React architecture with secure login, patient dashboards, and real-time predictions. Integrated a fine-tuned GPT-3.5-turbo via OpenAI API to assist clinicians with result interpretation. Predictions were compared with <a href="https://diabetes.org" target="_blank" rel="noreferrer" className="text-neonCyan hover:underline">American Diabetes Association</a> guidelines to ensure reliability and interpretability. Deployed on Vercel and Render for scalability.
      </>
    ),
    tags: ["TensorFlow", "Keras", "FastAPI", "React", "OpenAI API"],
    metrics: "95% Train Accuracy",
    link: "https://github.com/AbdullahDahabre/T2D-Prediction-System--Data-Fusion-for-Enhanced-Decision-Making",
    demoLink: "https://diabtrack.vercel.app",
    image: "/project_t2d.webp"
  },
  {
    title: "AI Job & Resume Coach",
    description: "Career platform leveraging Groq Llama-3 for PDF resume parsing, scoring, and cover letter generation. Helps users strengthen applications with AI-driven insights.",
    tags: ["Groq Llama-3", "FastAPI", "React", "Vite"],
    link: "https://github.com/AbdullahDahabre/AI-Job---Resume-Coach",
    demoLink: "https://ai-job-resume-coach.vercel.app",
    image: "/project_jobcoach.webp"
  },
  {
    title: "Brain Tumor Detection",
    description: "Worked jointly with a teammate to develop deep learning models for brain tumor detection from MRI scans using a dataset of 253 images. Applied transfer learning with pretrained architectures—VGG16, VGG19, InceptionV3, ResNet50, EfficientNetB0, and MobileNetV2. Preprocessed and augmented the data, trained and validated models, and evaluated performance with classification metrics. The InceptionV3 model achieved the best results with 94% test accuracy and an F1-score of 0.94. Combined open-source code with custom improvements for a reproducible, educational implementation, documented in a detailed report resembling a research paper.",
    tags: ["Deep Learning", "Transfer Learning", "InceptionV3", "Medical Imaging"],
    metrics: "94% Test Accuracy",
    link: "https://github.com/AbdullahDahabre/Brain-Tumor-Detection",
    demoLink: "https://github.com/AbdullahDahabre",
    image: "/project_tumor.webp"
  },
  {
    title: "Laptop Price Prediction (MLOps - MLflow)",
    description: "Built a complete MLOps pipeline to predict laptop prices using regression models. Automated data ingestion, preprocessing, training, tuning (with Hyperopt), and deployment with MLflow. Integrated a Streamlit UI for live predictions and served the best model (Ridge Regression) via REST API. Achieved R² ≈ 1.0, MAE = 145.37, and RMSE = 178.74. Logged SHAP plots highlighting Storage Capacity as the most influential feature and tracked all metrics for production-ready workflows.",
    tags: ["MLOps", "MLflow", "Streamlit", "Hyperopt", "SHAP"],
    metrics: "R² ≈ 1.0",
    link: "https://github.com/AbdullahDahabre/LaptopPricePrediction-MLOps",
    demoLink: "https://github.com/AbdullahDahabre",
    image: "/project_mlops.webp"
  },
  {
    title: "Titanic Survival Prediction",
    description: "Developed a predictive model for the Titanic survival dataset using Logistic Regression, Decision Tree, and Random Forest classifiers. Preprocessed data for 891 passengers, engineered features, and resolved data inconsistencies. Achieved best performance with Random Forest (accuracy: 0.83, precision: 0.82, recall: 0.74). Used Grid Search to tune hyperparameters (max_depth=10, n_estimators=150) and validated results with cross validation (mean accuracy: 0.84, std: 0.04).",
    tags: ["Scikit-learn", "Random Forest", "Grid Search", "Feature Engineering"],
    metrics: "83% Accuracy",
    link: "https://github.com/AbdullahDahabre/Titanic--Machine-Learning-from-Disaster",
    demoLink: "https://github.com/AbdullahDahabre",
    image: "/project_titanic.webp"
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        <div className="space-y-6">
          {selectedProject?.image && (
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto object-cover rounded-xl border border-white/10" />
          )}

          <div className="text-gray-300 leading-relaxed text-lg">
            {selectedProject?.description}
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedProject?.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-neonCyan border border-neonCyan/20">
                #{tag}
              </span>
            ))}
          </div>

          {selectedProject?.metrics && (
            <div className="p-4 bg-neonPurple/10 border border-neonPurple/30 rounded-lg">
              <span className="text-neonPurple font-bold font-mono">{selectedProject.metrics}</span>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <a
              href={selectedProject?.demoLink || selectedProject?.link || "#"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-neonCyan/10 text-neonCyan rounded-lg hover:bg-neonCyan/20 transition-colors font-mono font-bold"
            >
              <ExternalLink size={18} /> View Project
            </a>
            <a
              href={selectedProject?.link || "https://github.com/AbdullahDahabre"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-mono font-bold"
            >
              <Github size={18} /> Source Code
            </a>
          </div>
        </div>
      </Modal>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <span className="text-neonCyan font-mono text-xl">03.</span>
        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
        <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4 hidden md:block"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/50"
            onClick={() => setSelectedProject(project)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-midnight">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/600x400/101010/06b6d4?text=${encodeURIComponent(project.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              {/* Title Container - auto height to fit full text */}
              <div className="min-h-[3.5rem] flex items-end mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                <div className="flex items-center text-neonCyan font-mono text-sm gap-2">
                  Read More <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* View More Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: projects.length * 0.1 }}
          className="flex items-center justify-center h-[300px]"
        >
          <a href="https://github.com/AbdullahDahabre" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-4 text-gray-400 hover:text-neonCyan transition-colors">
            <div className="p-4 rounded-full border-2 border-gray-700 group-hover:border-neonCyan transition-colors">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="font-mono text-sm">View Full Archive</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;