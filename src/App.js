import React, {Component} from 'react';
import logo from './logo.svg';
import netesh from './netesh.jpg';
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <header className="App-header">
                        <ul>
                            <img src={netesh} className="App-logo" alt="logo" onclick="netesh.jpg"/>
                            <i className="App-title"> Netesh Kumar | Chiku</i>
                            <li><a href="/about">About me</a></li>
                            <li><a href="/technology">Technology Stack</a></li>
                            <li><a className="active" href="/">Home</a></li>
                        </ul>
                    </header>




                    <body className="App-intro">
                        <br></br>
                        <br></br>
                        <content>
                            I love problem-solving, exploring algorithm and coding, and together they have instilled in me a passion towards Computer Science. I measure my life by the impact I make. I am a techie and I love making cool products.
                            Having 3 years and 10 months of experience in software development. Looking out for a better opportunity or freelancing project based on Java/J2ee, Python, Angular.
                            <br></br>
                            <b>Specialities:-</b> Java 10, Data Structure, Algorithm, Multi-threading, Design Pattern, Business Intelligence, Python Scripting, Spring Boot, RestFull, MySql, Hibernate, JPA, JavaScript, Angular and AWS Cloud.
                            <b>Methodologies:-</b> Agile, Continuous Integration, Test Driven Development, Software Development, System Architecture, Object Oriented Design, Operating Systems Linux/ UNIX.
                            Worked on Modular programming using Java 9 and Reactive Stream.
                        </content>
                        <br></br>
                        <center><h1> Technology/Event Stack</h1></center>
                            <div className="tech-slideshow">
                                 <div className="mover-1"></div>
                                 <div className="mover-2"></div>
                            </div>
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
                                <i className="fa fa-envelope"></i>
                                <p><a href="mailto:support@company.com">netesh91@gmail.com</a></p>
                            </div>

                            {/*<div>*/}
                                {/*<i className="fa fa-envelope"></i>*/}
                                {/*<p><a href="mailto:support@company.com">netesh91@gmail.com</a></p>*/}
                            {/*</div>*/}

                        </div>
                        <div className="footer-right">

                            <p className="footer-company-about">
                                <span>Follow me</span>
                            </p>

                            <div className="footer-icons">
                                <a href="http://facebook.com/neteshchiku" className="fa fa-facebook"></a>
                                <a href="http://twitter.com/ImNetesh3" className="fa fa-twitter"></a>
                                <a href="https://plus.google.com/u/0/114811476737455989617" className="fa fa-google"></a>
                                <a href="https://www.linkedin.com/in/netesh3/" className="fa fa-linkedin"></a>
                                {/*<a href="#" className="fa fa-youtube"></a>*/}
                                {/*<a href="#" className="fa fa-instagram"></a>*/}
                                {/*<a href="#" className="fa fa-pinterest"></a>*/}
                                {/*<a href="#" className="fa fa-snapchat-ghost"></a>*/}
                                <a href="https://secure.skype.com/portal/overview" className="fa fa-skype"></a>
                                {/*<a href="#" className="fa fa-android"></a>*/}
                                {/*<a href="#" className="fa fa-dribbble"></a>*/}
                                {/*<a href="#" className="fa fa-vimeo"></a>*/}
                                {/*<a href="#" className="fa fa-tumblr"></a>*/}
                                {/*<a href="#" className="fa fa-vine"></a>*/}
                                {/*<a href="#" className="fa fa-foursquare"></a>*/}
                                {/*<a href="#" className="fa fa-stumbleupon"></a>*/}
                                {/*<a href="#" className="fa fa-flickr"></a>*/}
                                {/*<a href="#" className="fa fa-yahoo"></a>*/}
                                {/*<a href="#" className="fa fa-reddit"></a>*/}
                                {/*<a href="#" className="fa fa-rss"></a>*/}
                            </div>

                        </div>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}
export default App;
