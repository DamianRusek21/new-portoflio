export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Bachelor of Science - BS, Computer Science (Data Science focus)",
  school: "Kean University",
  location: "Union, New Jersey, United States",
  startDate: "September 2023",
  endDate: "Present",
  gpa: "3.7/4.0",
  honors: [
    { name: "Phi Kappa Phi Honor Society" },
    { name: "Dean's List: Spring - Fall 2025" },
    { name: "Upsilon Pi Epsilon (UPE) - International Honor Society for Computing"},
  ],
  activities: [
    { name: "President of Mathematics Chapter" },
    { name: "President of Association for Computing Machinery Chapter" },
    { name: "Undergraduate Research Opportunity Program (URGO)" },
  ],
};
