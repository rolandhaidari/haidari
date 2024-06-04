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
    area: ["Cloud", "Data"],
    
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
    area: ["Cloud", "Data"],
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
    projectName: "data-intensive-sim-app",
    project_title: "Data-intensive simulation application",
    tech_stack: [
      "React",
      "Go",
      "Proto",
      "gRPC",
      "Python",
      "TypeScript",
      "shadcn",
      "golang-migrate"
    ],
    description:
      "Simulating a network of vehicles on a map, with data processing, visualization and interactive features.",
    year: "2024",
    area: ["Full-stack", "Data"],
    images: [
      "/images/projects/quant-self-analysis/01.webp",
      "/images/projects/quant-self-analysis/02.webp",
      "/images/projects/quant-self-analysis/03.webp",
      "/images/projects/quant-self-analysis/04.webp",
    ],
    tabs: [
      {
        title: "Data-intensity",
        value: "data-intensity",
        content: [
          {
            type: "Challenge",
            description:
              "The application was streaming a large amount of data from the backend to the frontend, and processing it in real-time to display the vehicles on the map. This required a high level of data intensity and processing power.",
          },
          {
            type: "Solution",
            description:
              "I optimized the data being streamed so that the client application was able to process the data without lags. Using web-workers and other techniques, I was able to offload some of the processing to the client side, and to display the data in real-time.",
          },
        ],
      },
      {
        title: "Massive repository",
        value: "massive-repository",
        content: [
          {
            type: "Challenge",
            description:
              "The existing code base was massive and complex, with multiple layers of abstraction and dependencies. This made it difficult to understand and modify the code, and to add new features or fix bugs.",
          },
          {
            type: "Solution",
            description:
              "Initially, I took a deepdive to understand dependencies and document the code and clean up dead code. I then refactored the code to make it more modular and maintainable, and to remove unnecessary dependencies and abstractions.",
          },
        ],
      },
      {
        title: "React",
        value: "react",
        content: [
          {
            type: "Challenge",
            description:
              "The frontend was developed in React and TypeScript, and had to be able to display a map with vehicles moving on it, and to interact with the user to allow them to control the simulation and view the data. However, React has been unknown to me beforehand.",
          },
          {
            type: "Solution",
            description:
              "I used AI tools such as GitHub Copilot to ease the development and accelerate the process.",
          },
        ],
      },
    ],
  },
  {
    projectName: "etl-and-middleware",
    project_title: "ETL and middleware",
    tech_stack: ["Pentaho Data Integration", "Flutter", "Couchbase"],
    description:
      "I was responsible for the ETL process and middleware between an enterprise system, a database and a mobile application.",
    year: "2020",
    area: ["Full-stack", "Data"],
    images: [
      "/images/projects/reprex-exercise-database/01.webp",
      "/images/projects/reprex-exercise-database/02.webp",
      "/images/projects/reprex-exercise-database/03.webp",
      "/images/projects/reprex-exercise-database/04.webp",
    ],
    tabs: [
      {
        title: "Data synchronisation",
        value: "synchronisation",
        content: [
          {
            type: "Challenge",
            description:
              "The mobile application required offline access to data, which meant that the data had to be synchronised between the enterprise system and the mobile application. This was a challenge due to the complexity of the data and the need for real-time synchronisation.",
          },
          {
            type: "Solution",
            description:
              "I used Pentaho Data Integration to create an ETL process that synchronised the data between the enterprise system and the Couchbase Database. I used Couchbase's functionality to handle the synchronisation between the database and the device.",
          },
        ],
      },
    ],
  },
  {
    projectName: "data-preprocessing-testing",
    project_title: "Testing a data preprocessing pipeline",
    tech_stack: ["Python", "Poetry", "Azure Functions", "pytest"],
    description:
      "Tested a data preprocessing pipeline for a predictive model developed in Azure Functions",
    year: "2023",
    area: ["Cloud", "Data"],
    tabs: [
      {
        title: "Unit testing",
        value: "testing",
        content: [
          {
            type: "Challenge",
            description:
              "The data preprocessing pipeline was developed in Azure Functions to be cost-efficient. Since the project was long-running and it was difficult to introduce new features, without breaking older functionalities, the challenge was to test the pipeline to ensure that it was working correctly and producing the expected output.",
          },
          {
            type: "Solution",
            description:
              "I used pytest to write unit tests for the pipeline, and to test the individual components of the pipeline. I integrated the tests into the development pipeline to automate the testing process.",
          },
        ],
      },
    ],
  },
  {
    projectName: "enterprise-ticketing-system",
    project_title: "Enterprise ticketing system",
    tech_stack: ["Valuemation", "jython", "JavaScript", "Orchestra"],
    description:
      "Developed custom scripts and integrations for an enterprise ticketing system. Integrations connected various other enterprise systems together including SAP. Additionally, the ITSM system was extended with custom features.",
    year: "2020",
    area: ["Data"],

    images: [
      "/images/projects/survey-data/01.webp",
      "/images/projects/survey-data/02.webp",
      "/images/projects/survey-data/03.webp",
    ],
    tabs: [
      {
        title: "Automated tasks",
        value: "automated_tasks",
        content: [
          {
            type: "Challenge",
            description:
              "Synchronizing data between different systems and automating tasks such as ticket creation, assignment, and resolution. The challenge was to develop custom scripts and integrations that could handle the complexity of the enterprise systems and ensure that the data was accurate and up-to-date.",
          },
          {
            type: "Solution",
            description:
              "Using the ETL tool Orchestra, I developed custom scripts and integrations that connected the enterprise systems together and automated the tasks. Since some tasks were to be repeated at regular intervals, I scheduled the scripts to run automatically at specific times.",
          },
        ],
      },
      {
        title: "Process visualisation",
        value: "process_visualisation",
        content: [
          {
            type: "Challenge",
            description:
              "Visualizing the ticketing process and identifying bottlenecks and inefficiencies. The challenge was to replace a tabular way of displaying ticket states and help to optimize the workflows.",
          },
          {
            type: "Solution",
            description:
              "Using a JavaScript library, I redesigned the ticketing process to be more visual and intuitive. I created a dynamic diagram that displayed the ticket states and transitions.",
          },
        ],
      },
    ],
  },
  {
    projectName: "data-dashboard",
    project_title: "Data dashboard",
    tech_stack: ["Vue.js", "JavaScript", "Express.js"],
    description:
      "As part of my high-school diploma project, cooperated with IBM Slovakia, I developed an algorithm to determine a success probability of automation projects. The algorithm was integrated into a dashboard.",
    year: "2018",
    area: ["Full-stack", "Data"],
    images: [
      "/images/projects/school-dashboard/01.webp",
      "/images/projects/school-dashboard/02.webp",
      "/images/projects/school-dashboard/03.webp",
      "/images/projects/school-dashboard/04.webp",
      "/images/projects/school-dashboard/05.webp",
    ],
    tabs: [
      {
        title: "Small dataset",
        value: "small_dataset",
        content: [
          {
            type: "Challenge",
            description:
              "The original plan was to train a machine learning model on a large dataset to predict the success probability of automation projects. However, due to time constraints and limited resources, I had to work with a small dataset.",
          },
          {
            type: "Solution",
            description:
              "I created a custom linear model by determining the weights of the features manually and verified the results with the IBM team. The model was integrated into a dashboard that displayed the success probability of automation projects.",
          },
        ],
      },
      {
        title: "Visualisation",
        value: "visualisation",
        content: [
          {
            type: "Challenge",
            description:
              "Other than the success probability, the dashboard had to display other relevant information about the automation projects",
          },
          {
            type: "Solution",
            description:
              "I used Vue.js to create a dynamic and visually appealing dashboard that displayed the success probability of automation projects together with other relevant information, visualized in more easily readable ways.",
          },
        ],
      },
    ],
  },
  {
    projectName: "vitural-library",
    project_title: "Virtual library",
    tech_stack: ["Spring Boot", "Java", "MySQL", "Thymeleaf"],
    description: "School project to create a website with CRUD operations.",
    year: "2017",
    area: ["Full-stack"],
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
        title: "Spring Boot",
        value: "spring_boot",
        content: [
          {
            type: "Challenge",
            description:
              "The assignment was to create a website with CRUD operations using Spring Boot, a framework I had never worked with before.",
          },
          {
            type: "Solution",
            description:
              "I learned Spring Boot from scratch and created a virtual library website that allowed users to add, edit, and delete books. I used Thymeleaf to create dynamic web pages that displayed the books in a visually appealing way.",
          },
        ],
      },
      {
        title: "Database",
        value: "database",
        content: [
          {
            type: "Challenge",
            description:
              "The website had to store information about the books in a database, and I had to design the database schema and connect it to the Spring Boot application.",
          },
          {
            type: "Solution",
            description:
              "I used MySQL to create a database that stored information about the books, such as the title, author, and genre. I used JPA to connect the database to the Spring Boot application and perform CRUD operations on the books.",
          },
        ],
      },
    ],
  },
  {
    projectName: "fast search",
    project_title: "Fast search with Elasticsearch",
    tech_stack: [
      "Elasticsearch",
      "Python",
      "Docker",
    ],
    description: "Developed a fast search engine for a large dataset using Elasticsearch. The search engine was meant for a specific dataset and had to be able to handle large amounts of requests simultaneously.",
    year: "2023",
    area: ["Cloud", "Data"],
    images: [
      "/images/projects/netflix-clone/01.webp",
      "/images/projects/netflix-clone/02.webp",
      "/images/projects/netflix-clone/03.webp",
      "/images/projects/netflix-clone/04.webp",
    ],
    tabs: [
      {
        title: "Data ingestion",
        value: "data_ingestion",
        content: [
          {
            type: "Challenge",
            description:
              "The search engine had to be able to handle a large dataset and to ingest the data quickly and efficiently. The challenge was to design a data ingestion process that could handle the large dataset and to optimize the search engine for fast search queries.",
          },
          {
            type: "Solution",
            description:
              "I used Python to develop a data ingestion process that extracted the data from the dataset and indexed it in Elasticsearch. I used Docker to containerize the search engine and to deploy it on a Kubernetes cluster.",
          },
        ],
      },
    ],
  },
  {
    projectName: "infrastructure_monitoring",
    project_title: "Infrastructure monitoring",
    tech_stack: ["Zabbix"],
    description: "Set up a monitoring system for an infrastructure with Zabbix. The system had to monitor various metrics such as CPU usage, memory usage, disk space, and network traffic. The system had to be able to send alerts when the metrics exceeded certain thresholds or systems were not available.",
    year: "2020",
    area: ["Cloud"],
    images: [
      "/images/projects/roxor/01.webp",
      "/images/projects/roxor/02.webp",
      "/images/projects/roxor/03.webp",
      "/images/projects/roxor/04.webp",
      "/images/projects/roxor/05.webp",
      "/images/projects/roxor/06.webp",
    ],
  }
]
