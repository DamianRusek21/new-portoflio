export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Programming Analyst Intern",
    company: "Webbertech Technologies LLC",
    location: "Long Hill, New Jersey, United States",
    startDate: "March 2025",
    endDate: "Present",
    isRemote: true,
    achievements: [
      {
        text:
          "Reviewed and evaluated student assignments in databases," +
          "Linux, and software fundamentals",
      },
      {
        text:
          "Identified recurring errors and patterns," +
          "summarizing findings for instructors"

      },
      {
        text: 
          "Supported data validation and quality assurance across technical projects",
      },
      {
        text:
          "Analyzed code submissions for correctness, logic, and efficiency"
      },
    ],
    skills: [
      { name: "SQL" },
      { name: "Python" },
      { name: "Data Analysis" },
      { name: "Data Validation" },
      { name: "Linux" },
      { name: "Software Fundamentals" },
    ],
  },
  {
    title: "DevOps Engineer Intern",
    company: "Webbertech Technologies LLC",
    location: "Long Hill, New Jersey, United States",
    startDate: "May 2025",
    endDate: "Mar 2026",
    isRemote: true,
    achievements: [
      {
        text:
          "Built sandbox DevOps pipelines using Docker, NGINX, and Kubernetes"
      },
      {
        text: "Developed CI/CD workflows for reproducible deployments",
      },
      {
        text: "Containerized applications using Docker for consistent environments",
      },
      {
        text: "Authored technical documentation to support deployment and collaboration",
      },
    ],
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "NGINX" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "DevOps" },
    ],
  },
  {
    title: "FC Associate I",
    company: "Amazon",
    location: "Carteret, New Jersey, United States",
    startDate: "December 2024",
    endDate: "Present",
    achievements: [
      {
        text: "Maintained high productivity and accuracy in a fast-paced warehouse environment.",
      },
      {
        text: "Investigated inventory discrepancies and supported troubleshooting to improve operational efficiency.",
      },
    ],
    skills: [
      { name: "Operations" },
      { name: "Problem Solving" },
      { name: "Process Efficiency" },
      { name: "Accuracy" },
    ],
  },
];

export const previousExperiences: Experience[] = [
  {
    title: "Barista",
    company: "Dunkin'",
    location: "New Jersey, United States",
    startDate: "October 2022",
    endDate: "February 2023",
    achievements: [],
    skills: [],
  },
];
