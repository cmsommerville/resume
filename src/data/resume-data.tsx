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
        "Built an actuarial ratemaking web application from scratch. Technical lead on project. Performed several development roles, including front-end, REST API, quantitative, and database developer roles. Actuarial liaison on enterprise data warehouse / actuarial data mart project. Technologies: React, Typescript, Django, Python, SQL, Azure Data Factory",
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
        "Exam-taking actuary. Migrated actuarial data out of MS Access into DB2. Overhauled reserve calculation and experience studies processes by writing as SQL stored procedures. Financial and data analysis. Technologies: SQL, DB2, MS Excel, MS Access, VBA",
    },
  ],
  technologies: [
    { skill: "SQL", link: "https://www.w3schools.com/sql/" },
    {
      skill: "MS SQL Server",
      link: "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16",
    },
    { skill: "Oracle", link: "https://www.oracle.com/database/technologies/" },
    { skill: "Postgres", link: "https://www.postgresql.org/" },
    { skill: "DB2", link: "https://www.ibm.com/products/db2/database" },
    { skill: "Databricks", link: "https://www.databricks.com" },
    { skill: "Teradata", link: "https://www.teradata.com" },
    {
      skill: "Azure Data Factory",
      link: "https://azure.microsoft.com/en-us/products/data-factory",
    },
    { skill: "Python", link: "https://www.python.org" },
    { skill: "Flask", link: "https://flask.palletsprojects.com/" },
    { skill: "Django", link: "https://www.djangoproject.com/" },
    { skill: "pandas", link: "https://pandas.pydata.org/" },
    { skill: "SQLAlchemy", link: "https://www.sqlalchemy.org/" },
    {
      skill: "DRF",
      link: "https://www.django-rest-framework.org/",
    },
    { skill: "TypeScript", link: "https://www.typescriptlang.org/" },
    {
      skill: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { skill: "React", link: "https://www.react.dev/" },
    { skill: "Next.js", link: "https://nextjs.org/" },
    { skill: "Tailwind CSS", link: "https://tailwindcss.com/" },
    {
      skill: "Ag-Grid",
      link: "https://www.ag-grid.com/react-data-grid/getting-started/",
    },
    { skill: "R", link: "https://www.r-project.org/" },
    {
      skill: "MS Excel",
      link: "https://www.microsoft.com/en-us/microsoft-365/excel",
    },
    {
      skill: "MS Access",
      link: "https://www.microsoft.com/en-us/microsoft-365/access",
    },
    {
      skill: "VBA",
      link: "https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office",
    },
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
