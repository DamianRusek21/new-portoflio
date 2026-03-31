export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
   {
    name: "Google Data Analytics Professional Certificate",
    image: "/certifications/google-data-analytics.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/M619LCHVFDWX",
    issuedBy: "Google",
    issuedDate: "December 2025",
  },
];
