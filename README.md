# Toolligence
Toolligence is a full-stack (MERN) AI web application designed to empower creativity and enhance productivity through the integration of advanced AI technology. Leveraging Google’s Gemini API, Toolligence delivers a powerful suite of tools specifically tailored for writers, developers, and anyone in need of intelligent content generation.

## Features
- **Summary Generator:** Quickly generate concise summaries from lengthy texts, making it easier to grasp essential information.

- **Paragraph Generator:** Produce high-quality, coherent paragraphs from prompts, ideal for content creation and brainstorming.

- **Chatbot:** Engage with our advanced AI chatbot that assists with inquiries, provides inspiration, and supports a variety of tasks.


## Installation<br>
To run the application locally, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: [Download and install](https://nodejs.org/)
- **MongoDB**: [Download and install](https://www.mongodb.com/try/download/community)

1. **Clone the Repository:** <br>
   Open your terminal or command prompt and run:
   ```bash
   git clone https://github.com/Abhinaba12/Toolligence.git

2. **Install dependencies:** <br>
   Navigate into the project directory and install the dependencies:
    ```bash 
    cd Toolligence
    npm install
    cd client
    npm install

4. **Set up environment variables:** <br>
   Make sure to replace these placeholders with your actual values when setting up the environment variables:
 - Create a `.env` file in the root directory of the project and add the following environment variables:
    ```bash
    MODE = development
    DB_URL= <Your local MongoDB URL>
    JWT_ACCESS_SECRET = <Your secret>
    JWT_ACCESS_EXPIREIN = 15min
    JWT_REFRESH_TOKEN = <Your secret> 
    JWT_REFRESH_EXPIREIN = 15days
    API_KEY=<Your gemini api key>

 - Create a `.env` file inside the client folder and add the following environment variables:
    ```bash
    REACT_APP_GA4=<Your google analytics 4 measurement ID>

4. **Run the application:** <br>
   Ensure you are inside the Toolligence folder, then run:
   ```bash
   npm run dev

## Contributing Guidelines

I welcome contributions! To get started, please fork the repository and submit a pull request. Ensure that your code adheres to the coding standards of this project.

### Coding Standards
To maintain consistency and quality in the Toolligence project, please adhere to the following coding standards.
- **Technology Stack:** Contributions should primarily utilize the MERN stack (MongoDB, Express.js, React, Node.js) or JavaScript. This ensures consistency and effectively leverages the project's architecture.
- **Code Clarity:** Write clear and descriptive names for variables, functions, and classes.
- **Commenting:** Use comments to explain complex logic and decisions in your code.
- **Consistent Style:** Follow consistent indentation and formatting throughout your codebase.
- **Commit Messages:** Write clear and concise commit messages that describe the changes made.






