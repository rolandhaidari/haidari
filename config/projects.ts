export const PROJECTS = [
  {
    projectName: "superset",
    project_title: "Launch data exploration & visualisation platform",
    tech_stack: [
      "Superset",
      "Terraform",
      "Gitlab",
      "Docker",
      "Flask-AppBuilder",
      "Kubernetes",
      "Keycloak",
    ],
    description:
      "Custom permission system, data sources and dashboards using Apache Superset",
    year: "2023",
    area: "Cloud",
    
    images: [
      "/images/projects/recipe-saas-demo/01.jpg",
      "/images/projects/recipe-saas-demo/02.png",
      "/images/projects/recipe-saas-demo/03.jpg",
      "/images/projects/recipe-saas-demo/04.jpg",
    ],
    tabs: [
      {
        title: "Permission system",
        value: "permission_system",
        content: [
          {
            type: "Challenge",
            description:
              "Superset offers a basic permission system that did not meet the requirements of the project. Considering the project deals with sensitive data that should be protected from unauthorized access, the challenge was to implement a custom permission system that allows for fine-grained control over data sources, dashboards, and charts.",
          },
          {
            type: "Solution",
            description:
              "Digging deep into the Flask AppBuilder framework, I extended the existing permission system to include custom roles and permissions. This allowed me to define access control rules based on user roles and groups, ensuring that only authorized users could access specific data sources and dashboards.",
          },
        ],
      },
      {
        title: "Integration with Keycloak",
        value: "keycloak",
        content: [
          {
            type: "Challenge",
            description:
              "The project required integration with an existing Keycloak server for user authentication and authorization. The challenge was to set up a secure connection between Superset and Keycloak, allowing users to log in using their Keycloak credentials and access Superset resources based on their Keycloak roles.",
          },
          {
            type: "Solution",
            description:
              "The solution was a custom role mapping service that based on the roles given by the keycloak server adjusted the permissions of the user.",
          },
        ],
      },
    ],
  },
  {
    projectName: "Azure ML Pipeline",
    project_title: "Azure ML Pipeline",
    tech_stack: [
      "Jenkins",
      "Azure",
      "Python",
      "MLflow ",
      "Terraform",
    ],
    description:
      "Updating outdated pipeline to the new versions of Jenkins, Azure ML and Terraform. Making the pipeline flexible and easy to extend for new projects. Handling different types of compute, models and metrics.",
    year: "2023",
    area: "Cloud",
    images: [
      "/images/projects/chat-app/01.webp",
      "/images/projects/chat-app/02.webp",
      "/images/projects/chat-app/03.webp",
      "/images/projects/chat-app/04.webp",
    ],
    tabs: [
      {
        title: "Environment",
        value: "environment",
        content: [
          {
            type: "Challenge",
            description:
              "Not only the commands, but also the environment was incompatible with the new versions of the tools. The challenge was to update the environment to the new versions of Jenkins, Azure ML and Terraform.",
          },
          {
            type: "Solution",
            description:
              "I created a new environment with the new versions of the tools and updated the pipeline to work with the new environment.",
          },
        ],
      },
      {
        title: "Flexibility",
        value: "flexibility",
        content: [
          {
            type: "Challenge",
            description:
              "This project required a high level of flexibility, as it is inteded to be used as a template to accelerate the development of new pipelines.",
          },
          {
            type: "Solution",
            description:
              "I used Terraform to create a flexible infrastructure that can be easily modified and extended to meet the requirements of new projects. I designed the relavant parts to be adjustable in a single configuration file.",
          },
        ],
      },
      {
        title: "Model and Metrics",
        value: "model_and_metrics",
        content: [
          {
            type: "Challenge",
            description:
              "The pipeline needed to be able to handle different types of models and metrics, and to be able to store and retrieve them from the Azure ML workspace.",
          },
          {
            type: "Solution",
            description:
              "I used MLflow to track the models and metrics, and to store them in the Azure ML workspace. I adjusted the existing model script to use mlflow and log the metrics to the Azure ML workspace.",
          },
        ],
      },
    ],
  },
  {
    projectName: "quant-self-analysis",
    project_title: "Exploratory data analysis",
    tech_stack: [
      "Altair",
      "Scikit-Learn",
      "Matplotlib",
      "Pandas",
      "Numpy",
      "Python",
      "Streamlit",
    ],
    description:
      "Interactive dashboard for exploratory analysis and visualization of +18,000 data points I collected about myself",
    year: "2023",
    area: "Full-stack",
    github: "https://github.com/dissorial/prx21_erikz",
    images: [
      "/images/projects/quant-self-analysis/01.webp",
      "/images/projects/quant-self-analysis/02.webp",
      "/images/projects/quant-self-analysis/03.webp",
      "/images/projects/quant-self-analysis/04.webp",
    ],
    tabs: [
      {
        title: "Analysis",
        value: "analysis",
        content: [
          {
            type: "Challenge",
            description:
              "Some variables were continuous, others ordinal, a few were binary, and a bunch were quasi-quantitative (time quantity). The other challenge was normalizing and transforming the dataset in a way that is suitable for visualization across many variable types.",
          },
          {
            type: "Solution",
            description:
              "I used tools such as RapidMiner, Orange and countless others I can't remember to understand how automatic preprocessing that is optimized out of the box. From this, I extracted several patterns that I applied to my own dataset.",
          },
        ],
      },
    ],
  },
  {
    projectName: "reprex-exercise-database",
    project_title: "Exercise database",
    tech_stack: ["Typescript", "React", "Tailwind"],
    description:
      "Online database with searching and filtering for exercises body part, target muscle or available equipment",
    year: "2022",
    area: "Front-end",
    github: "https://github.com/dissorial/Reprex",
    images: [
      "/images/projects/reprex-exercise-database/01.webp",
      "/images/projects/reprex-exercise-database/02.webp",
      "/images/projects/reprex-exercise-database/03.webp",
      "/images/projects/reprex-exercise-database/04.webp",
    ],
    tabs: [
      {
        title: "Optimization",
        value: "optimization",
        content: [
          {
            type: "Challenge",
            description:
              "Optimizing website performance to account for the animations that come with each exercise, and creating an intuitive user-experience that displayed results in a meaningful way.",
          },
          {
            type: "Solution",
            description:
              "Utilizing ReactFreezeFrame to dynamically convert GIFs to stationary images on subpages with a large number of exercise cards. In regard to clarity, I included information about body part, target muscle and equipment necessary on each exercise card in a concise manner.",
          },
        ],
      },
    ],
  },
  {
    projectName: "aria-music-player",
    project_title: "Aria music",
    tech_stack: ["JavaScript", "React", "Tailwind", "Redux"],
    description:
      "Fully functional music player with song details, artist pages, top charts, discover sections, and more",
    year: "2022",
    area: "Front-end",
    github: "https://github.com/dissorial/Aria",
    images: [
      "/images/projects/aria-music-player/01.webp",
      "/images/projects/aria-music-player/02.webp",
      "/images/projects/aria-music-player/03.webp",
      "/images/projects/aria-music-player/04.webp",
    ],
    tabs: [
      {
        title: "RapidAPI",
        value: "optimization",
        content: [
          {
            type: "Challenge",
            description:
              "This project utilized the ShazamCore API from RapidAPI. At some point during development, certain endpoints were added, changed or removed, which lead to several incompatibilities within the API. The challenge was thus making past and present endpoints compatible.",
          },
          {
            type: "Solution",
            description:
              "I opted for modifying the data flow in the application such that it relies more on parameters passed to the URL query upon page redirects. This allowed me to work around storing and retrieving the fetched data from Redux to identify which API endpoints to call.",
          },
        ],
      },
    ],
  },
  {
    projectName: "survey-data",
    project_title: "Survey data dashboard",
    tech_stack: ["Python", "Altair", "Pandas", "Matplotlib", "Streamlit"],
    description:
      "Encryption, access control, monitoring tools, and visualization of survey data",
    year: "2022",
    area: "Data",

    images: [
      "/images/projects/survey-data/01.webp",
      "/images/projects/survey-data/02.webp",
      "/images/projects/survey-data/03.webp",
    ],
    tabs: [
      {
        title: "Missing values",
        value: "missing_values",
        content: [
          {
            type: "Challenge",
            description:
              "The survey data contained missing values and errors (such as typos or incorrect responses) that affected the accuracy and quality of my analysis and visualization.",
          },
          {
            type: "Solution",
            description:
              "I replaced the missing values with estimated values based on other available data or simply remove incomplete records. To identify and correct incorrect data, I compared the survey data against the original survey form and used statistical tests to detect errors.",
          },
        ],
      },
      {
        title: "Inconsistent responses",
        value: "inconsistent_responses",
        content: [
          {
            type: "Challenge",
            description:
              "The survey data contained inconsistent responses, such as conflicting answers to the same question or responses that do not match the expected format. Finally, there were some extreme or unusual values that had the potential to distort the analysis.",
          },
          {
            type: "Solution",
            description:
              "I standardized the responses by converting them to a consistent format with preprocessing scripts I wrote in Jupyer Notebook, and identified outliers by comparing the values against the expected ranges and distributions.",
          },
        ],
      },
    ],
  },
  {
    projectName: "school-dashboard",
    project_title: "Interactive dashboard",
    tech_stack: ["Python", "Streamlit", "Pandas", "Altair", "Matplotlib"],
    description:
      "Synthesis, analysis and visualization of high school data about grades, assignments and more",
    year: "2022",
    area: "Data",
    images: [
      "/images/projects/school-dashboard/01.webp",
      "/images/projects/school-dashboard/02.webp",
      "/images/projects/school-dashboard/03.webp",
      "/images/projects/school-dashboard/04.webp",
      "/images/projects/school-dashboard/05.webp",
    ],
    tabs: [
      {
        title: "Sensitive data",
        value: "sensitive_data",
        content: [
          {
            type: "Challenge",
            description:
              "High school data may contain sensitive information such as student names, grades, and attendance records. One of the main challenges when dealing with sensitive data was therefore to ensure that it is only accessible to authorized users.",
          },
          {
            type: "Solution",
            description:
              "I hosted the dashboard on a secure Streamlit server that has been configured to follow best practices with built-in security features and tools to protect the data from unauthorized access.",
          },
        ],
      },
      {
        title: "Auth & encyption",
        value: "auth_and_encryption",
        content: [
          {
            type: "Challenge",
            description:
              "Another challenge was the risk of data breaches due to vulnerabilities in the system or human error. This could have lead to confidential information being leaked or compromised, potentially causing significant harm to individuals and the organization itself.",
          },
          {
            type: "Solution",
            description:
              "I used hasher modules to encrypt sensitive data. Lastly, I implemented a custom log-in system that granted various types of access depending on user privileges.",
          },
        ],
      },
    ],
  },
  {
    projectName: "night-of-chances",
    project_title: "NoC concept",
    tech_stack: ["JavaScript", "React", "Tailwind"],
    description: "Landing page concept redesign for an event website",
    year: "2023",
    area: "Web design",
    github: "https://github.com/dissorial/night_of_chances",
    images: [
      "/images/projects/night-of-chances/01.webp",
      "/images/projects/night-of-chances/02.webp",
      "/images/projects/night-of-chances/03.webp",
      "/images/projects/night-of-chances/04.webp",
      "/images/projects/night-of-chances/05.webp",
      "/images/projects/night-of-chances/06.webp",
      "/images/projects/night-of-chances/07.webp",
      "/images/projects/night-of-chances/08.webp",
    ],
    tabs: [
      {
        title: "Color scheme",
        value: "color_scheme",
        content: [
          {
            type: "Challenge",
            description:
              "Choosing a color scheme that was both visually appealing and complemented the content. I had to consider factors such as contrast, readability, and consistency.",
          },
          {
            type: "Solution",
            description:
              "I settled on a color scheme that used contrasting colors to draw attention to important information, while also maintaining readability. I used a monochromatic color palette to create a cohesive and professional look.",
          },
        ],
      },
      {
        title: "Displaying information",
        value: "displaying_information",
        content: [
          {
            type: "Challenge",
            description:
              "Efficiently displaying a large amount of information while still maintaining readability and clarity. I had to experiment with different layouts to find one that worked well for the content.",
          },
          {
            type: "Solution",
            description:
              "I settled on a grid-based design that efficiently displayed the information while also creating a balanced visual hierarchy. I used whitespace to create separation between different sections and typography to guide the user's eye.",
          },
        ],
      },
    ],
  },
  {
    projectName: "netflix-clone",
    project_title: "Lightweight Netflix clone",
    tech_stack: [
      "MongoDB",
      "Next.js",
      "Prisma",
      "React",
      "Tailwind",
      "TypeScript",
    ],
    description: "Auth, SSR and the beloved Netflix-like UI/UX",
    year: "2023",
    area: "Full-stack",
    github: "https://github.com/dissorial/netflix-clone",
    images: [
      "/images/projects/netflix-clone/01.webp",
      "/images/projects/netflix-clone/02.webp",
      "/images/projects/netflix-clone/03.webp",
      "/images/projects/netflix-clone/04.webp",
    ],
    tabs: [
      {
        title: "Back-end",
        value: "back_end",
        content: [
          {
            type: "Challenge",
            description:
              "Building a scalable and efficient back-end architecture to handle user authentication and data storage. Integrating MongoDB with Prisma to manage data and provide an intuitive API for the front-end.",
          },
          {
            type: "Solution",
            description:
              "Leveraged Prisma’s powerful features to simplify database management and reduce boilerplate code. Implemented robust error handling and validation mechanisms to ensure data consistency.",
          },
        ],
      },
    ],
  },
  {
    projectName: "roxor",
    project_title: "Roxor restaurant concept",
    tech_stack: ["Figma"],
    description: "Conceptual design for a restaurant website using Figma",
    year: "2023",
    area: "Web design",
    images: [
      "/images/projects/roxor/01.webp",
      "/images/projects/roxor/02.webp",
      "/images/projects/roxor/03.webp",
      "/images/projects/roxor/04.webp",
      "/images/projects/roxor/05.webp",
      "/images/projects/roxor/06.webp",
    ],
  },
  {
    projectName: "hotel-nivy",
    project_title: "Hotel Nivy concept",
    tech_stack: ["Figma"],
    description: "Conceptual design for a hotel website using Figma",
    year: "2023",
    area: "Web design",
    images: [
      "/images/projects/hotel-nivy/01.webp",
      "/images/projects/hotel-nivy/02.webp",
      "/images/projects/hotel-nivy/03.webp",
      "/images/projects/hotel-nivy/04.webp",
      "/images/projects/hotel-nivy/05.webp",
      "/images/projects/hotel-nivy/06.webp",
    ],
  },
  {
    projectName: "web-scraper",
    project_title: "JavaScript web scraper",
    tech_stack: ["JavaScript", "Puppeteer"],
    description:
      "Headless, utilizing Puppeteer with integrated datacenter rotating proxies and language translation",
    year: "2023",
    area: "Data",
    images: [
      "/images/projects/web-scraper/01.webp",
      "/images/projects/web-scraper/02.webp",
      "/images/projects/web-scraper/03.webp",
      "/images/projects/web-scraper/04.webp",
      "/images/projects/web-scraper/05.webp",
    ],
    tabs: [
      {
        title: "Translation",
        value: "translation",
        content: [
          {
            type: "Challenge",
            description:
              "The target website was a Polish e-shop with slow load times and a challenging navigation system.",
          },
          {
            type: "Solution",
            description:
              "I found a Node.js library for Google Translate and wrote a script to translate the scraped JSON files from Polish to Slovak.",
          },
        ],
      },
      {
        title: "CAPTCHAs and proxies",
        value: "captchas_proxies",
        content: [
          {
            type: "Challenge",
            description:
              "Avoiding CAPTCHAs and other forms of blocking due to the detection of code navigating the website was a challenge every step of the way. Finding the right type of proxy to use for the project also proved to be difficult.",
          },
          {
            type: "Solution",
            description:
              "Used the puppeteer-extra modular plugin and its extra-plugin-stealth feature to apply evasion techniques and make it more difficult for websites to detect headless puppeteer. I used datacenter proxies from webshare.io, and integrated iterative proxy rotation into the code.",
          },
        ],
      },
    ],
  },
  {
    projectName: "interactive-document-chatbot",
    project_title: "Interactive document chatbot",
    tech_stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind",
      "MongoDB",
      "Pinecone",
      "LangChain",
    ],
    description:
      "Text embeddings and vectorization for interactive document retrieval and question-answering tasks, powered by GPT",
    year: "2023",
    area: "Full-stack",
    github: "https://github.com/dissorial/doc-chatbot",
    images: [
      "/images/projects/interactive-document-chatbot/01.webp",
      "/images/projects/interactive-document-chatbot/02.webp",
      "/images/projects/interactive-document-chatbot/03.webp",
      "/images/projects/interactive-document-chatbot/04.webp",
    ],
    tabs: [
      {
        title: "File uploads",
        value: "file_uploads",
        content: [
          {
            type: "Challenge",
            description:
              "Accurately parsing and extracting content from uploaded files involved various file formats with unique parsing intricacies. Handling temporary file uploads and precise deletion post-conversion in Vercel deployment was crucial.",
          },
          {
            type: "Solution",
            description:
              "I created API routes for uploading files to a temporary directory and extracting document content using open-source or LangChain document loaders. File content was converted to vector embeddings, stored in Pinecone and MongoDB namespaces, and temporary files were deleted.",
          },
        ],
      },
      {
        title: "Multiple chat sessions",
        value: "multiple_chat_sessions",
        content: [
          {
            type: "Challenge",
            description:
              "Allowing unlimited namespaces and chat windows required careful UI design, state management, and a robust MongoDB backend for data persistence. Many components' data had to be re-fetched during relaunch or user login.",
          },
          {
            type: "Solution",
            description:
              "API routes handled chat creation, deletion, and storage in MongoDB. Each chat and namespace had unique IDs and user associations for easy retrieval upon login.",
          },
        ],
      },
      {
        title: "Data ingestion",
        value: "data_ingestion",
        content: [
          {
            type: "Challenge",
            description:
              "Ingesting extracted content, converting it into vector embeddings using OpenAI's API, and storing it in Pinecone for retrieval required a rigorous understanding of text embeddings and efficient data handling.",
          },
          {
            type: "Solution",
            description:
              "OpenAI's API converted document content into vector embeddings, while LangChain's text splitter handled preprocessing. Embeddings were efficiently stored in Pinecone for quick retrieval during chat queries.",
          },
        ],
      },
    ],
  },
]
