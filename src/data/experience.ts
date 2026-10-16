export interface Role {
  period: string;
  start: string;
  end: string | null;
  short: string;
  role: string;
  company: string;
  outcomes: string[];
}

export const roles: Role[] = [
  {
    period: 'Apr 2025 – Present',
    start: '2025-04',
    end: null,
    short: 'DS7',
    role: 'Applications Developer & Database Engineer',
    company: 'DS7 Limited',
    outcomes: [
      'Build and maintain applications on well-structured, scalable databases.',
      'Develop features and services that connect SQL data access to business logic.',
      'Build universes in SAP Information Design Tool to power BusinessObjects reports.',
      'Write and tune SQL for extraction, analysis, and reporting.',
      'Produce Power BI and Excel reports and validate data quality across systems.',
    ],
  },
  {
    period: 'Apr 2025 – Present',
    start: '2025-04',
    end: null,
    short: 'Family Fountain',
    role: 'Back Office Support',
    company: 'Family Fountain Assets and Securities Limited',
    outcomes: [
      'Support day-to-day operational and administrative processes.',
      'Keep records accurate and reconcile data so account information stays consistent.',
      'Prepare and validate operational reports for internal review.',
    ],
  },
  {
    period: 'Nov 2023 – Sep 2024',
    start: '2023-11',
    end: '2024-09',
    short: 'UECSL',
    role: 'Monitoring and Evaluation Trainee',
    company: 'Universal Engineering and Consultancy Services Limited',
    outcomes: [
      'Analyzed fuel consumption, delivery schedules, and stock levels.',
      'Monitored reporting workflows for accuracy and compliance.',
      'Supported corrective action on stock discrepancies and day-to-day IT issues.',
    ],
  },
  {
    period: 'Oct 2022 – Dec 2022',
    start: '2022-10',
    end: '2022-12',
    short: 'Npontu',
    role: 'Information Systems and Security Intern',
    company: 'Npontu Technologies Limited',
    outcomes: [
      'Built Grafana dashboards for visibility into systems and data.',
      'Researched cloud options for scalability.',
      'Monitored systems for integrity and security issues.',
    ],
  },
  {
    period: 'Nov 2021 – Dec 2021',
    start: '2021-11',
    end: '2021-12',
    short: 'UECSL',
    role: 'IT and Automation Intern',
    company: 'Universal Engineering and Consultancy Services Limited',
    outcomes: [
      'Supported research into automation and fuel-level indicators.',
      'Configured and maintained network systems.',
    ],
  },
];

export const education = [
  {
    degree: 'MSc Big Data Analytics',
    school: 'University of Ghana',
    logo: '/asserts/legon.png',
    period: 'Oct 2025 – Oct 2026',
    start: '2025-10',
    end: '2026-10',
    short: 'MSc, Legon',
    status: 'In progress',
  },
  {
    degree: 'BSc Computer Science',
    school: 'Kwame Nkrumah University of Science and Technology',
    logo: '/asserts/knust.png',
    period: 'Sep 2019 – Nov 2023',
    start: '2019-09',
    end: '2023-11',
    short: 'BSc, KNUST',
    status: 'Completed',
  },
];

export const skills = [
  {
    group: 'Building products',
    note: 'Front end to back end, for the web.',
    tools: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'Python', 'Django', 'PHP', 'Git'],
    practices: ['REST APIs', 'Responsive design'],
  },
  {
    group: 'Databases',
    note: 'Where the data lives, and stays correct.',
    tools: ['PostgreSQL', 'MySQL', 'SQLite'],
    practices: ['SQL', 'Schema design', 'Query optimization', 'Data validation'],
  },
  {
    group: 'Data analysis and BI',
    note: 'From raw rows to decisions.',
    tools: ['Power BI', 'Excel', 'Power Query', 'SAP BusinessObjects', 'Tableau', 'Grafana'],
    practices: ['Data analysis', 'Data visualization', 'SAP Information Design Tool'],
  },
  {
    group: 'AI tools',
    note: 'Used daily to move faster.',
    tools: ['Claude', 'ChatGPT', 'GitHub Copilot', 'Cursor', 'Gemini'],
    practices: ['Prompt engineering', 'AI-assisted development'],
  },
];

export const certifications = [
  'Accenture Data Analytics and Visualization job simulation (Forage, Sep 2024)',
  'KPMG Data Analytics job simulation (Forage, Sep 2024)',
];

export const highlights = [
  'Workflow efficiency improvement from better data collection and fewer project delays.',
];
