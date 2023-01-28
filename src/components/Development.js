import React from "react";
import "./Development.css";

export default function Development() {
  const developmentCourses = [
    {
      courseName: "HTML",
      src: "html.png",
      description: `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.`,
      price: "Rs. 299",
    },
    {
      courseName: "CSS",
      src: "css.png",
      description: `Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.`,
      price: "Rs. 299",
    },
    {
      courseName: "JavaScript",
      src: "javascript.png",
      description: `JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.`,
      price: "Rs. 999",
    },
    {
      courseName: "React",
      src: "react.png",
      description: `React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.`,
      price: "Rs. 1999",
    },
    {
      courseName: "Angular",
      src: "angular.png",
      description: `AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and corporations.`,
      price: "Rs. 1499",
    },
    {
      courseName: "Vue",
      src: "vue.png",
      description: `Vue.js is an open-source model view viewmodel front end JavaScript framework for building user interfaces and single-page applications.`,
      price: "Rs. 1499",
    },
    {
      courseName: "Python",
      src: "python.png",
      description: `Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.`,
      price: "Rs. 999",
    },
    {
      courseName: "C",
      src: "c.png",
      description: `C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on.`,
      price: "Rs. 799",
    },
    {
      courseName: "C++",
      src: "c++.png",
      description: `C++ is one of the world's most popular programming languages. C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.`,
      price: "Rs. 799",
    },
    {
      courseName: "C Sharp",
      src: "c_sharp.png",
      description: `C# is a programming language developed by Microsoft that runs on the .NET Framework. C# is used to develop web apps, desktop apps, mobile apps, object-oriented, and type-safe programming language.`,
      price: "Rs. 799",
    },
    {
      courseName: "Java",
      src: "java.png",
      description: `Utilize our Java tutorial to learn the basics of the popular language, including Java objects, in this introductory course.Learn the fundamentals of Java programming and brush-up your Java programming skills.`,
      price: "Rs. 799",
    },
    {
      courseName: "Django",
      src: "django.png",
      description: `Top courses in Django and Python · Python Django - Complete Course · Python Django Ecommerce. An Advanced Django Web Application · Build REST APIs with Django.`,
      price: "Rs. 899",
    },
  ];
  const courses = developmentCourses.map((course, index) => (
    <div key={index} className="container">
      <div className="image">
        <img
          src={`https://subramanyaraju1112.github.io/edutech-images/${course.src}`}
        ></img>
      </div>
      <div>
        <div className="sentence">
          <h5>{course.courseName}</h5>
        </div>
        <div>
          <p>{course.description}</p>
        </div>
        <div className="bottom">
          <button type="button" className="btn btn-primary">
            Add Course
          </button>
          <p className="price">{course.price}</p>
        </div>
      </div>
    </div>
  ));
  return <div className="complete-courses">{courses}</div>;
}
