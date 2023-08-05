import React, { useState } from 'react';
import './App.css';
import profile_image from "./profile_image.jpg"

const projects = [
  {
    title: 'E-Commerce Mobile App Powered by React Native and AWS Amplify',
    description: `The E-Commerce Mobile App, developed using React Native and powered by AWS Amplify, offers users a convenient and engaging shopping experience. With a user-friendly frontend and a robust backend, the app ensures seamless navigation, secure transactions, and efficient management of products and orders. This powerful combination of technologies creates a high-performing and scalable e-commerce platform that meets the demands of modern shoppers.`,
    image: 'https://www.fabliantechnologies.com/wp-content/uploads/2018/11/online-grocery-ecommerce-mobile-app-development-company-India.jpg', 
    githubLink: 'https://github.com/RiteshPatel748/E-commers_GroceryApp',
  },
  {
    title: 'MyTrain App - Your Ultimate Railway Companion',
    description: `MyTrain is more than just an app; it's a must-have companion for anyone traveling by train. Whether you're commuting for work, embarking on a journey of exploration, or planning a family vacation, MyTrain ensures that you're always connected to the latest train information. From finding trains between stations to tracking their live locations, MyTrain redefines the way you experience railway travel, making your journey safer, more informed, and ultimately, more enjoyable. Download the app today and embark on a smarter way to travel by train.`,
    image: 'https://images.ixigo.com/image/upload/assured/ca2da8e1adb440fdddfec500e9908244-ogroj.png',
    githubLink: 'https://github.com/RiteshPatel748/TrainApp',
  },
  {
    title: 'TIC TOC TOE GAME APP',
    description: `Developed a tic tac toe game app using React Native and JavaScript.
    Allowed two players to compete against each other in a classic game of tic tac toe.
    Created an intuitive and responsive user interface using React Native's components and styling features.
    Improved problem-solving skills and attention to detail through this project.`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflFmJrpft5wt2IT5zqRETaUeFdDD6OQK2UkadvAHoOA&s',
    githubLink: 'https://github.com/RiteshPatel748/Tic_Tac_Toe_App',
  },
  {
    title: 'Portfolio Website',
    description: `I'm excited to share the story of creating this site in just 2 hours, with a little help from technology and innovation.
    I used React for the front end. What's interesting is that I even incorporated ChatGPT, an AI language model, to assist me in the development process. With its help, I was able to quickly generate code snippets, design ideas, and even come up with content for this website.`,
    image: 'https://enwpgo.files.wordpress.com/2023/02/web-design-portfolio-header.jpg?w=1200',
    githubLink: 'https://github.com/RiteshPatel748/Portfolio_website',
  },

  // Add more projects as needed
];
const skills = [
  'React Native',
  'AWS Amplify',
  'JavaScript',
  'React Js',
  'CSS',
  'Git',
  // Add more skills as needed
];


const contactDetails = {
  email: 'patelritesh748@gmail.com',
  phone: '7898750315',
  location: 'Gotegaon Narsinghpur Madhya Pradesh India',
};

const App = () => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:${contactDetails.email}?subject=Contact from ${email}&body=${description}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={profile_image} alt="Your Profile" className="Profile-image" />
        <div>
          <h1 className="Profile-p">Ritesh Patel</h1>
        </div>
        <div className="Profile-links">
          <p >Android and Web Developer </p>
            <a href="https://www.linkedin.com/in/ritesh-patel-116911259" target="_blank" rel="noopener noreferrer">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEUAd7f///8AcbQAdbYAa7KXu9nP4O3M3OsAc7Xl7/YAbrOQttdzpc5MjcH0+fuuyOBnnMkog73s9Pm0zeN9rNK80+aIsdQAaLFYlcbc5vGfv9s/icDF2uode7kof7sAYq7hDdldAAACZklEQVRoge2a27KjIBBF5RKDreL9njj//5djkokjIIZTaR5OlbsqDwFdhW2zG0ICskhmeREgqsgz+eAGy6cKQDBMOBMQVC94yzHBb/H2Aa+8sBd6RQLpB/2QDDLwxYYsyIUvuMiDAjVPtmKo6e0gARyAUx8PJLo+G6JoGKcOHQ99RP4pLCgum1/IRjlqloLCXuiIYxc90XTHg9NIhzdovsNynU3IjJUyUJnwGivqnRGVpY5gJUwnTfjtd8AHE47m9pCZ8ATrhYrUhOPNIjDiglgDxaSxJaarQ63CU9T6Csl23BOyodPiusb7jr4uYHyOmzCsauFnPUOBc/BSoL2KbfShlT0fcZHjczKY0lUFsDfFbF3Ic5uFUSllOTSX1IF/Vyz99kpFNit2GT42CpTFqvuX4/whA3TrSp7JCI3aWlPGk9L0oQscDp5ftcufQ+eh2hrTvYK4aDicGY7wP7dd9hIbdjB2N3i74/vvsR9s3Nzg2ldFmX2h4wY/VG8NOwI8tCYkApxMtqhjwK2VEQMuO49wa1x+AC8v/TT1444LtJbi6A6PORWMCdqNRldjCbozvF7nCr/ofYNlHrnCt/Ow03ttBuMK3zqIsZGS81cjV1KZGTspS7o4wtW79VpC0m/gpeqrtNXgFu9yg1/VXBOJ2k0sv+C4wTX3MN5o8g08Vqcg0/cMJ/yEn/ATfsJP+Ak/4S+4tjVGhesrs9fCjI57rf/hQoPb9i0wRhu9f2uFatva6jsHkQ57d+3Qga7i61WbRgrmveJDvyd5PfjzemTp9bDV3zExk34PuP0ezRNSMX9/KvD3d4i/QB8pnxFRoRMAAAAASUVORK5CYII=" alt="LinkedIn" className="Icon" />
            </a>
            <a href="https://github.com/RiteshPatel748" target="_blank" rel="noopener noreferrer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM8gPoldJ6aNM1xgxKJu9-KZwsM46UVcw72HO49jOuZ134vZn" alt="GitHub" className="Icon" />
            </a>
            {/* Add other profile links as needed */}
        </div>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>
          Hi! I'm a passionate Android and Web developer with expertise in React Native and AWS Amplify.
          I love creating dynamic and user-friendly apps that make people's lives easier.
          When I'm not coding, you'll find me exploring the latest tech trends or enjoying
          a good book.
        </p>
      </section>
      <section className="Skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <div className="Projects-grid">
          {projects.map((project, index) => (
            <div className="Project" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="MyJourney">
        <h2>About Website</h2>
        <p className="MyJourney-description">
          Welcome to my resume website! Here, I'm excited to share the story of creating this site in just 2 hours, with a little help from technology and innovation.
        </p>
        <p className="MyJourney-details">
        I used React for the front end. What's interesting is that I even incorporated ChatGPT, an AI language model, to assist me in the development process. With its help, I was able to quickly generate code snippets, design ideas, and even come up with content for this website.
        </p>
        <p className="MyJourney-conclusion">
        Feel free to explore my projects, skills, and reach out to me through the contact form below. Thank you for visiting!
        </p>
      </section>
      <div className='Contact-comp'>
        <section className="Contact">
          <h2>Contact Details</h2>
          <p>Email: {contactDetails.email}</p>
          <p>Phone: {contactDetails.phone}</p>
          <p>Location: {contactDetails.location}</p>
        </section>
        <section className="ContactForm">
          <h2>Contact Me</h2>
          <div className="Contact-form">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
            />
            <button onClick={handleSubmit}>Send</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
