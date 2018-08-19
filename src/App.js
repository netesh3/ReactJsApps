import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <img src={logo} className="App-logo1" alt="logo" align="right"/>
                        <i className="App-title">Netesh Kumar (Chiku)</i>
                    </header>
                    <body className="App-intro">
                        <h1>About me</h1>
                        <content> I love problem-solving, exploring algorithm and coding, and together they have instilled in me a passion towards Computer Science. I measure my life by the impact I make. I am a techie and I love making cool products.

                            Having 3 years and 10 months of experience in software development. Looking out for a better opportunity or freelancing project based on Java/J2ee, Python, Angular, JavaScript.

                            Specialities: Java 9, Data Structure, Algorithm, Multi-threading, Design Pattern, Business Intelligence, Python Scripting, Spring Boot, RestFull, MySql, Hibernate, JPA, JavaScript, Angular and AWS Cloud.

                            Methodologies: Agile, Continuous Integration, Test Driven Development, Software Development, System Architecture, Object Oriented Design, Operating Systems Linux/ UNIX.

                            Worked on Modular programming using Java 9 and Reactive Stream.

                        </content>
                        <br></br>
                        {/*<bold>Contact details:</bold>*/}
                        {/*<content>*/}
                            {/*netesh91@gmail.com*/}
                            {/*+91-9538627458*/}
                        {/*</content>*/}

                        {/*<h1>Learning React Js</h1>*/}
                        {/*<content> A JavaScript library for building user interfaces By Facebook</content>*/}
                    </body>
                    <footer className="footer-distributed">

                        <div className="footer-left">

                            <h3>Works<span>@</span></h3>

                            <p className="footer-links">
                                <a href="https://www.informatica.com/in/#fbid=h8uYBwBIXKS">Informatica</a>
                                <br></br>
                                <p>Senior Software Engineer</p>
                            </p>

                        </div>

                        <div className="footer-center">

                            <div>
                                <i className="fa fa-map-marker"></i>
                                <p><span>India</span> Bangalore </p>
                            </div>

                            <div>
                                <i className="fa fa-phone"></i>
                                <p>+91-9538627458</p>
                            </div>

                            <div>
                                <i className="fa fa-envelope"></i>
                                <p><a href="mailto:support@company.com">netesh91@gmail.com</a></p>
                            </div>

                        </div>

                        <div className="footer-right">

                            <p className="footer-company-about">
                                <span>Follow me</span>
                            </p>

                            <div className="footer-icons">
                                <a href="https://www.facebook.com/neteshchiku"className="face face-facebook"target="_blank"></a>
                                <a href="https://www.linkedin.com/in/netesh3/" className="face face-linkedin"target="_blank"></a>
                                <a href="https://twitter.com/ImNetesh3" className="face face-twitter"target="_blank"></a>
                            </div>

                        </div>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}
export default App;