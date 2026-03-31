import Brain from "lucide-react/dist/esm/icons/brain";
import Wrench from "lucide-react/dist/esm/icons/wrench";
import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";
import Cloud from "lucide-react/dist/esm/icons/cloud";
import Code from "lucide-react/dist/esm/icons/code";
import Terminal from "lucide-react/dist/esm/icons/terminal";
import type { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Logistic Regression",
      "Random Forest",
      "Classification Models",
      "Feature Engineering",
      "Model Evaluation",
      "Scikit-learn",
    ],
  },
  {
    name: "Tools & Technologies",
    Icon: Wrench,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "Git & GitHub",
      "Docker",
      "NGINX",
      "Kubernetes",
      "CI/CD",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    name: "Programming",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "SQL",
      "Java",
      "R",
      "Pandas",
      "NumPy",
    ],
  },
  {
    name: "Data Analytics",
    Icon: BarChart3,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Dashboarding",
      "Statistical Analysis",
      "ETL Pipelines",
    ],
  },
];
