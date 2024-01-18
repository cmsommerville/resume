import { GitHubIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chandler Sommerville",
  initials: "CS",
  location: "Charleston, SC",
  locationLink: "https://www.google.com/maps/place/Charleston,+SC/",
  about:
    "Delivering technical solutions to actuarial problems for over 15 years",
  title: "Actuarial Technologist",
  summary:
    "As an actuarial technologist, I specialize in building data solutions that work for actuaries. I've taken multiple actuarial data warehouse projects from idea through execution, and I also have experience migrating complicated, Excel-based applications to modern, database-powered web applications.",
  avatarUrl: "/headshot.jpg",
  personalWebsiteUrl: "/",
  contact: {
    email: "cmsommerville@gmail.com",
    tel: "803-931-2600",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cmsommerville",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/chansommerville",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "Bachelor's Degree in Applied Mathematics",
      link: "https://www.gatech.edu",
      start: "2003",
      end: "2007",
    },
  ],
  accomplishments: [
    {
      accomplishment: "Associate of Society of Actuaries",
      badges: ["Former"],
      year: "2014",
      description: "Stopped paying dues due to career shift to technical roles",
    },
  ],
  work: [
    {
      company: "Voya Financial",
      link: "https://www.voya.com",
      badges: ["Remote"],
      title: "Actuary Manager",
      start: "2023",
      end: null,
      description:
        "Design a data model to integrate billing, claims, compensation, policy, and other data sources into a cohesive data model, suitable for actuarial use cases. Liaise between IT and actuarial teams to execute on the data strategy. Technologies: SQL, MS SQL Server, Python",
    },
    {
      company: "American Modern Insurance Group",
      link: "https://www.amig.com",
      badges: ["Remote"],
      title: "Principal Data Engineer / Software Engineer",
      start: "2020",
      end: "2023",
      description:
        "Built an actuarial ratemaking web application from scratch. Technical lead on project. Performed several development roles, including front-end, REST API, quantitative, and database developer roles. Actuarial liaison on enterprise data warehouse / actuarial data mart project. Technologies: React, Typescript, Django, Python, SQL",
    },
    {
      company: "Aflac",
      link: "https://www.aflac.com",
      badges: ["Remote"],
      title: "Senior Actuarial Systems Consultant",
      start: "2017",
      end: "2020",
      description:
        "Built an actuarial data warehouse to support fine-grained actuarial analysis. Migrated legacy data sets from DB2. Developed ETL jobs. Trained and deployed machine learning models to enrich the data model. Technologies: SQL, R, Teradata",
    },
    {
      company: "Medical University of South Carolina",
      link: "https://www.musc.edu",
      badges: [],
      title: "Senior Quality Analytics Consultant",
      start: "2016",
      end: "2017",
      highlight: true,
      description:
        "Used data to drive evidence-based medicine practices in the hospital. Statistical analysis (OLS, GLM, LASSO) to measure efficacy. Technologies: SQL, R, SAS",
    },
    {
      company: "Aflac",
      link: "https://www.aflac.com",
      badges: [],
      title: "Actuary I - III",
      start: "2008",
      end: "2016",
      highlight: true,
      description:
        "Exam taking actuary. Overhauled reserve calculation and experience studies processes by moving them out of MS Access databases and into SQL stored procedures. Financial and data analysis. Technologies: SQL, DB2, MS Excel, MS Access, VBA",
    },
  ],
  technologies: [
    { skill: "SQL" },
    { skill: "MS SQL Server" },
    { skill: "Oracle" },
    { skill: "Postgres" },
    { skill: "DB2" },
    { skill: "Databricks" },
    { skill: "Teradata" },
    { skill: "Azure Data Factory" },
    { skill: "Python" },
    { skill: "Flask" },
    { skill: "Django" },
    { skill: "pandas" },
    { skill: "TypeScript" },
    { skill: "JavaScript" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Ag-Grid" },
    { skill: "R" },
    { skill: "MS Excel" },
    { skill: "MS Access" },
    { skill: "VBA" },
  ],
  projects: [
    {
      title: "ActuaryDB",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "API Gateway",
        "Lambda",
        "SES",
      ],
      description:
        "Consulting business website to test Next.js and deployment to AWS with simple email service",
      link: {
        label: "actuarydb.com",
        href: "https://actuarydb.com/",
      },
    },
    {
      title: "UWToolkit",
      techStack: ["Side Project", "TypeScript", "Vite", "Ag-Grid"],
      description:
        "Side project. Static web app to help spouse assign underwriter case loads. All data intentionally processed locally without a database.",
      link: {
        label: "uwtoolkit.com",
        href: "https://uwtoolkit.com/",
      },
    },
  ],
};
