import { type Profile, ProfileSchema } from "@/lib/schemas/profile";

/** Canonical profile content used across metadata and UI copy. */
export const PROFILE: Profile = ProfileSchema.parse({
  name: "Damian Rusek",

  heroTagline:
    "Aspiring Data Analyst | Computer Science Student | Python, SQL, Tableau",

  shortTitle: "Aspiring Data Analyst",

  summary:
    "Computer Science student at Kean University with a Data Science focus. Experienced in Python, SQL, Tableau, and machine learning, building end-to-end analytics projects that turn data into actionable insights.",

  aboutLead:
    "Computer Science student focused on data analytics, machine learning, and data-driven problem solving.",

  aboutBody:
    "I’m a Computer Science student at Kean University with a focus in Data Science. I build end-to-end data projects using Python, SQL, Tableau, and Excel, turning raw data into clear, actionable insights. My work includes predictive modeling, exploratory data analysis, and dashboard development to support decision-making. I’m currently seeking data analyst or data science internship opportunities where I can apply my skills and continue growing.",

  websiteSummary:
    "Personal portfolio of Damian Rusek, a Computer Science student focused on data analytics, machine learning, and data visualization using Python, SQL, and Tableau.",

  keywords: [
    "Data Analyst",
    "Data Science Student",
    "Python",
    "SQL",
    "Tableau",
    "Machine Learning",
    "Data Analysis",
    "Data Visualization",
    "Pandas",
    "Scikit-learn",
    "ETL",
    "Feature Engineering",
    "Exploratory Data Analysis",
    "Dashboarding",
    "Excel",
    "Git",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "MySQL",
    "PostgreSQL",
  ],
});