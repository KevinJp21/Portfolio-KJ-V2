export default {
  "Header": {
    "start": "Home",
    "projects": "Projects",
    "about_me": "About",
    "skills": "Skills",
    "contact": "Contact",
    "BtnThemMode": "Theme Mode",
    "BtnTLanguage": "Language"
  },
  "Home": {
    "name": "Hey, I'm Kevin Julio",
    "descStrong": "Systems Engineer focused in Frontend Development",
    "description": ". From Colombia co. specialized in web application development.",
    "btnCV": "Download CV",
    "btnContact": "Contact me"
  },
  "Projects": {
    "title": "Projects",
    "p1": "DocMe",
    "p2": "API Residences",
    "p3": "API Orders",
    "p4": "Chatbot assistant",
    "p5": "RestauranteSCocina"
  },
  "About": {
    "title": "About Me",
    "p1": [
      "My name is <strong>Kevin Julio Pineda</strong> and I am a <strong>systems engineer specialized in frontend development</strong>. During my university education, I actively participated in various <strong>technology fairs</strong>, which allowed me to <strong>expand my knowledge and skills</strong> in the field of systems engineering."
    ],
    "p2": [
      "Throughout my career, I have <strong>led multiple projects</strong> from the initial phase to deployment, using <strong>agile methodologies</strong> and <strong>design patterns</strong> to ensure that each project is completed efficiently and meets the highest quality standards."
    ],
    "p3": [
      "My goal is to continue growing professionally and contribute to the <strong>creation of innovative technological solutions</strong> that <strong>enhance the user experience</strong>. I am passionate about applying best practices in software development, ensuring the creation of <strong>intuitive and functional applications</strong>."
    ]
  },
  "Skills": {
    "title": "Skills",
    "SubTitle1": "Languages and Tools",
    "SubTitle2": "Artificial Intelligence",
    "SubTitle3": "Others"
  },
  "Footer": {
    "author": "Build by KevinJp21"
  },
  "P_DocMe": {
    "title": "DocMe: Integrated Platform for Medical Appointment Management",
    "intro": "Colombia has made significant advances in health system coverage. In 2020, 97.8% of the population was covered by the health system. However, this has not translated into effective and timely access to health services. For instance, in 2019, 26% of people did not receive or seek medical attention due to issues such as appointment timing, service quality, geographical location of healthcare centers, or bureaucratic processes.",
    "subtitle1": "Problem",
    "p1": "The problem of scheduling medical appointments poses significant challenges for patients and healthcare professionals nationwide. Inadequate scheduling has become a recurring obstacle affecting medical service efficiency and quality.",
    "p2": "This issue manifests through various interconnected factors, ranging from lack of personalized medical attention to inappropriate appointment dates and distant healthcare center locations.",
    "p3": "However, all these problems converge at a single critical point: the absence of an effective appointment scheduling system. Inadequate scheduling leads to negative consequences for both patients and healthcare providers. Patients face difficulties accessing timely and appropriate care due to overwhelmed phone lines, staff shortages, and limited clinic hours.",
    "p4": "Scheduling appointments in a practical and timely manner is one of the biggest challenges for patients nationwide, due to overwhelmed phone lines, staff shortages, and limited clinic hours [...] (Anonymous, 2023).",
    "subtitle2": "Solution",
    "p5": "The project entails a medical appointment management system based on a web application integrating customization capabilities, calendar optimization, emergency management, and an AI chatbot. This system aims to enhance patient experience by providing tools such as a chatbot for automated responses on various medical service topics. This includes:",
    "li1": "Greeting and welcome: Responding to user greetings and providing friendly interaction.",
    "li2": "Information on medical appointments: Providing details about upcoming and past appointments for the user.",
    "li3": "General responses: Answering frequently asked questions and providing basic health information.",
    "li4": "Symptom guidance: Offering recommendations on what to do if certain symptoms occur, including whether immediate medical attention is necessary.",
    "li5": "Learn more about the ChatBot",
    "subtitle3": "Responsibilities",
    "p6": "Designed and implemented a medical appointment scheduling system, enhancing accessibility and efficiency in appointment scheduling.",
    "p7": "Employed ReactJS to develop a dynamic and modern user interface. ReactJS facilitated efficient state management and creation of reusable components, enabling seamless integration of functionalities like the chatbot and information visualization.",
    "p8": "Used Node.js framework with ExpressJS to build the web application backend. ExpressJS simplified route creation, HTTP request handling, and database integration, playing a crucial role in implementing the medical appointment management system's business logic.",
    "p9": "Utilized a relational database management system to efficiently store and manage user information, medical appointments, and system configurations. MySQL provided robustness, scalability, and security to ensure data integrity and system performance.",
    "p10": "Developed an intelligent chatbot using Flask as the backend framework and advanced Natural Language Processing (NLP) techniques with NLTK. Designed to interact in Spanish, the chatbot offers accurate automatic responses based on user query intent detection, significantly improving interaction experience.",
    "subtitle4": "conclusions",
    "p11": "DocMe represents a comprehensive solution to improve the interaction between patients and medical services, effectively addressing the challenges associated with appointment scheduling. This project highlights the ability to use advanced technologies such as ReactJS, ExpressJS, MySQL and a chatbot based on Flask and NLTK to develop robust, user-driven systems in the digital health sector. It also underlines my commitment to technological innovation and continuous improvement in the quality of healthcare services."
  },
  "P_Chatbot": {
    "title": "DocMe Assistant Chatbot",
    "intro": "In an effort to address the persistent challenges in the Colombian healthcare system, I have developed an intelligent chatbot as part of the DocMe project. This chatbot aims to improve accessibility and efficiency in the healthcare system through the use of artificial intelligence.",
    "subtitle1": "Context",
    "p1": "The Colombian healthcare system faces significant challenges in managing medical appointments, including saturated phone lines and difficulty accessing timely medical services. DocMe aims to address these difficulties through innovative technological solutions, such as the intelligent chatbot, which facilitates interaction and provides quick and accurate responses.",
    "subtitle2": "Key Features of the Chatbot",
    "p2": "The chatbot in DocMe is designed to handle various situations and medical queries:",
    "subtitle3": "Greeting and Welcome",
    "li1": "<strong>Input Patterns:</strong> Include common greetings such as \"hello\", \"how are you?\", among others.",
    "li2": "<strong>Responses:</strong> The chatbot responds in a friendly and personalized manner, initiating the interaction with the user warmly.",
    "subtitle4": "Assistant Information",
    "li3": "<strong>Input Patterns:</strong> Questions about the chatbot's name and function.",
    "li4": "<strong>Responses:</strong> Describes its role as a virtual assistant in managing medical appointments and facilitating the user's healthcare experience.",
    "subtitle5": "Emotional Support",
    "li5": "<strong>Input Patterns:</strong> Expressions of emotional distress such as \"I feel bad\" or \"I am dealing with a lot of anxiety\".",
    "li6": "<strong>Responses:</strong> Offers emotional support and, if necessary, guides the user to seek professional help, such as counselors or therapists.",
    "subtitle6": "Physical Symptoms",
    "li7": "<strong>Input Patterns:</strong> Indications of physical discomfort such as \"I have a fever\" or \"I feel sick\".",
    "li8": "<strong>Responses:</strong> Provides basic health recommendations and, if necessary, advises the user to schedule an appointment.",
    "subtitle7": "Technologies Used",
    "p3": "The development of the chatbot is based on the following technologies:",
    "li9": "<strong>Python:</strong> Used as the main language for backend development and the integration of different project components.",
    "li10": "<strong>Flask:</strong> Framework used for building the web application's backend, providing routes and handling HTTP requests.",
    "li11": "<strong>Flask-SQLAlchemy for database management:</strong> Used to interact with the MySQL database, efficiently managing user and medical appointment data.",
    "li12": "<strong>Numpy for mathematical operations:</strong> Employed to perform essential numerical calculations and mathematical operations in data processing.",
    "li13": "<strong>NLTK for natural language processing:</strong> Integrated for analyzing and processing user query text, enabling functions such as tokenization and lemmatization.",
    "li14": "<strong>Keras for neural network modeling:</strong> Used to develop and train neural network models, improving accuracy in classifying user query intents.",
    "li15": "<strong>TensorFlow as backend for Keras:</strong> Used as the backend to run deep learning models developed with Keras, ensuring optimized performance.",
    "li16": "<strong>waitress as WSGI server:</strong> Used as the web server to serve the Flask application in production, providing a lightweight and efficient deployment.",
    "li17": "<strong>PyMySQL for MySQL connection:</strong> Used to establish and manage the connection between the Flask application and the MySQL database, ensuring data integrity and efficiency.",
    "li18": "<strong>SciKit-Learn for machine learning techniques:</strong> Employed to implement machine learning algorithms that optimize data classification and pattern detection in user queries.",
    "li19": "<strong>PySpellChecker for spell checking:</strong> Integrated to improve text processing accuracy by correcting spelling errors in user queries before analysis.",
    "subtitle8": "Results and Benefits",
    "p4": "The integration of the chatbot in DocMe has significantly improved accessibility and efficiency in managing medical queries. Users can receive quick and accurate responses, reducing administrative burden and improving overall patient satisfaction.",
    "subtitle9": "Conclusions",
    "p5": "The chatbot in DocMe represents a significant advancement in the digitization of healthcare services, offering an innovative solution to enhance patient-service interaction. This project highlights my ability to apply advanced technologies to solve complex problems, preparing me to face new challenges and contribute to the field of digital health with effective, user-oriented solutions."
  },
  "P_RestS": {
    "title": "RestauranteSCocina",
    "intro": "RestauranteSCocina emerges as a culinary oasis in the heart of Colombia, blending tradition and innovation to offer a unique gastronomic experience. This project was developed with the aim of highlighting the rich diversity of Colombian cuisine through authentic dishes and flavors that celebrate local culture.",
    "subtitle1": "Key Features",
    "li1": "<strong>Diversity of Colombian Flavors:</strong> From the Andean mountains to the Caribbean coasts, \"RestauranteSCocina\" invites you to explore Colombia's culinary diversity through authentic dishes that capture the regional and cultural influences of the country.",
    "li2": "<strong>History and Tradition:</strong> Each region of Colombia has a unique culinary identity influenced by its geography, climate, and traditions. From Andean dishes with indigenous roots to coastal cuisine with maritime flavors, Colombian cuisine reflects a fusion of cultures that translates into a wide variety of ingredients and culinary techniques.",
    "li3": "<strong>Virtual Menu:</strong> \"RestauranteSCocina\" presents a detailed menu that includes popular dishes such as Sopa de Mondongo, Corrientazo de Pollo, and Mote de Queso, among others. Each dish is accompanied by descriptions that highlight its unique flavors and characteristics.",
    "li4": "<strong>Contact and Location:</strong> Users can contact the restaurant through integrated forms on the website, facilitating reservations and inquiries about the services offered.",
    "subtitle2": "Technologies Used",
    "li5": "<strong>HTML5 and CSS3:</strong> For visual design and website structure.",
    "li6": "<strong>JavaScript:</strong> For interactive and dynamic site functionality.",
    "li7": "<strong>React:</strong> Used to develop a modern and optimized user interface.",
    "li8": "<strong>PHP Food API:</strong> To manage the menu and dish details, I developed an API using PHP. This API allows for efficient and dynamic management of gastronomic data, storing and retrieving detailed information about the meals offered at \"RestauranteSCocina\".",
    "li9": "Learn more about this API",
    "subtitle3": "Results and Objectives",
    "p1": "\"RestauranteSCocina\" showcases my ability to create engaging digital experiences that capture the essence and authenticity of Colombian gastronomy. This project highlights my skills in integrating design, usability, and functionality in web platforms, preparing me to tackle challenging projects in the field of web development with creativity and efficiency."
  },
  "P_APIResi": {
    "title": "Residencias API: Efficient Management of Residential Data",
    "intro": "Residencias API is an API designed to streamline the management of residential data, covering various aspects such as apartments, payments, owners, rates, and towers. This project aims to provide endpoints to perform CRUD (Create, Read, Update, Delete) operations on residential data, thus facilitating efficient management and seamless integration with other systems.",
    "subtitle1": "Data Managed by Residencias API",
    "p1": "Currently, only the management of <strong>owners</strong> is implemented, as the same code would be used for the others.",
    "li1": "<strong>Apartments</strong>",
    "li2": "<strong>Payments</strong>",
    "li3": "<strong>Rates</strong>",
    "li4": "<strong>Towers</strong>",
    "subtitle2": "Technologies Used",
    "li5": "<strong>PHP:</strong> For server-side scripting and creating robust backend functionality.",
    "li6": "<strong>MySQL:</strong> For efficient database management and data storage.",
    "li7": "<strong>RESTful API Principles:</strong> To ensure a scalable and maintainable API design.",
    "subtitle3": "My Skills and Experience",
    "p2": "The development of ResidenciasAPI has allowed me to demonstrate my skills in backend development, database management, and API design. My proficiency in PHP and MySQL ensured the creation of a robust and scalable API capable of handling complex residential data management tasks. Additionally, my adherence to RESTful API principles ensures that the API is maintainable and easily integrable with other systems.",
    "p3": "This project highlights my ability to tackle challenging development tasks and deliver efficient, user-oriented solutions. I am well-prepared to take on new projects and contribute to the advancement of technology in various domains."
  },
  "P_APIOrders": {
    "title": "Order Management API: Optimizing Complex Data Operations",
    "intro": "The Order Management API is a simple yet effective tool designed to facilitate the retrieval of data related to orders, customers, employees, and order details. This API is ideal for educational purposes and practical exercises, providing endpoints to query and retrieve data from a structured database. Leveraging Node.js and Express for request handling and MySQL for database interactions, this API offers a straightforward approach to accessing essential business data.",
    "subtitle1": "Data Managed by the Order Management API",
    "p1": "The Order Management API handles various data entities, providing comprehensive endpoints to manage them efficiently:",
    "li1": "<strong>Product Lines</strong>",
    "li2": "<strong>Products</strong>",
    "li3": "<strong>Offices</strong>",
    "li4": "<strong>Employees</strong>",
    "li5": "<strong>Customers</strong>",
    "li6": "<strong>Payments</strong>",
    "li7": "<strong>Orders</strong>",
    "li8": "<strong>Order Details</strong>",
    "subtitle2": "Technologies Used",
    "li9": "<strong>Node.js:</strong> Provides the runtime environment for building scalable and high-performance server-side applications.",
    "li10": "<strong>Express:</strong> A minimal and flexible Node.js web application framework that facilitates efficient request handling.",
    "li11": "<strong>MySQL:</strong> A reliable and widely-used relational database management system (RDBMS) for data management.",
    "subtitle3": "My Skills and Experience",
    "p2": "Developing the Order Management API allowed me to enhance my skills in backend development, particularly in building and managing RESTful APIs. Working with Node.js and Express strengthened my understanding of server-side scripting, while integrating MySQL refined my database management capabilities. This project showcases my ability to design scalable and maintainable APIs, ensuring efficient data handling and seamless integration with other systems."
  }
}