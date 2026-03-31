import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";
import Database from "lucide-react/dist/esm/icons/database";
import LineChart from "lucide-react/dist/esm/icons/line-chart";
import Award from "lucide-react/dist/esm/icons/award";
import Brain from "lucide-react/dist/esm/icons/brain";
import Building2 from "lucide-react/dist/esm/icons/building-2";
import Cloud from "lucide-react/dist/esm/icons/cloud";
import Code from "lucide-react/dist/esm/icons/code";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experiences, previousExperiences } from "@/data/experience";
import { hobbies } from "@/data/hobbies";
import { skillCategories } from "@/data/skills";

/** Renders the AboutDetail component.
 * @remarks No parameters.
 * @returns The JSX element for the rendered about detail section.
 */
export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/headshot-2024.jpg"
                alt="Damian Rusek"
                fill
                sizes="192px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-balance text-4xl font-bold md:text-5xl mb-4">Damian Rusek</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Aspiring Data Analyst | Data Science Student
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" aria-hidden="true" /> Python
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Database className="w-3 h-3 mr-2" aria-hidden="true" /> SQL
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <BarChart3 className="w-3 h-3 mr-2" aria-hidden="true" /> Tableau
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" aria-hidden="true" /> Machine Learning
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <LineChart className="w-3 h-3 mr-2" aria-hidden="true" /> Data Analysis
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-balance text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Data-focused Computer Science student at Kean University with a strong foundation in analytics, machine
                learning, and data visualization. I build end-to-end data projects using Python, SQL, Tableau, and Excel,
                turning raw datasets into clear, actionable insights.
              </p>
              <p>
                My work includes developing predictive models, performing exploratory data analysis, and creating
                dashboards to support data-driven decision-making. I’ve worked with real-world datasets, applying
                feature engineering, statistical analysis, and machine learning to uncover meaningful patterns and trends.
              </p>
              <p>
                I’m currently seeking data analyst or data science internship opportunities where I can apply my skills,
                 continue learning, and contribute to solving real business problems.
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-balance text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" aria-hidden="true" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} aria-hidden="true" />
                  <h3 className="text-balance text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className={`${category.color}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-balance text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" aria-hidden="true" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={`${exp.title}-${exp.startDate}`}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-balance text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                      {exp.isRemote ? " (Remote)" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  {exp.achievements.map((achievement) => (
                    <li key={`${exp.title}-${achievement.text}`} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={`${exp.title}-${skill.name}`}
                        variant="outline"
                        className="bg-primary/5"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}

            <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10">
              <h3 className="text-balance text-xl font-semibold mb-4">Previous Experience</h3>
              <div className="space-y-4">
                {previousExperiences.map((exp) => (
                  <div key={`${exp.title}-${exp.startDate}`}>
                    <div className="flex justify-between mb-2">
                      <p className="font-medium">{exp.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {exp.startDate} - {exp.endDate}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-balance text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-primary" aria-hidden="true" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="relative transition-transform duration-200 ease-out hover:scale-[1.02]"
              >
                <Card className="p-6 backdrop-blur-xl bg-card/50 border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col gap-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="text-balance font-semibold mb-1">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuedBy}</p>
                        <p className="text-sm text-muted-foreground">Issued: {cert.issuedDate}</p>
                      </div>
                    </a>

                    {cert.earlyAdopterBadge && (
                      <>
                        <div className="border-t border-primary/10 my-2" />
                        <a
                          href={cert.earlyAdopterBadge.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          <Image
                            src={cert.earlyAdopterBadge.image}
                            alt={cert.earlyAdopterBadge.name}
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                          <div>
                            <Badge variant="outline" className="bg-primary/5 mb-1">
                              Early Adopter
                            </Badge>
                            <p className="text-xs text-muted-foreground">
                              {cert.earlyAdopterBadge.name}
                            </p>
                          </div>
                        </a>
                      </>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-balance text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" aria-hidden="true" />
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-balance font-semibold text-lg">{education.degree}</h3>
                    <p className="text-muted-foreground">{education.school}</p>
                  </div>
                  <div className="text-right mt-1 md:mt-0">
                    <p className="text-sm text-muted-foreground">
                      {education.startDate} - {education.endDate}
                    </p>
                    <p className="text-sm font-medium text-primary">GPA: {education.gpa}</p>
                  </div>
                </div>
                <div className="mt-3">
                  {education.honors.map((honor, index) => (
                    <Badge
                      key={honor.name}
                      variant="outline"
                      className={`bg-primary/5 mb-2 ${index > 0 ? "ml-2" : ""}`}
                    >
                      {honor.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-balance text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby) => (
                <div key={hobby.name} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">{hobby.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
