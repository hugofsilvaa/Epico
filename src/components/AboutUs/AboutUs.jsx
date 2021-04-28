import React from 'react' 
import './AboutUs.css';


const AboutUs = () => {
        return (
            <div className="background">
            <div className="aboutus" /* style={{ backgroundImage: "url(/images/dice.jpg)"}} */>
                <div className="profiles3"> 
                <div>
                <h1>Meet the team!</h1>
                </div>
                <div className="profiles4">
                    <img src={"images/hugo.png"} alt="hugo picture"/>
                    <div>
                        <h2>Hugo Silva</h2>
                        <br/>
                        <p>Hugo is an experienced Claims Specialist with a strong background in the banking industry. Well, at least that's what he claims. He's a specialist at it, after all. He enjoys playing squash and racketball in his spare time. One could say he plays squash even when playing board games, since he has a bad habit of squashing his opponents. Hugo doesn't like Catan.</p>
                    </div>
                </div>
                </div>
                <br/>
                <br/>
                <div className="profiles2">
                    <img src={"images/andre.png"} alt="andre picture"/>
                    <div>
                        <h2>André Gonçalves</h2>
                        <br/>
                        <p>André is a business analyst at Accenture, and a former circus manager, where he used to tame lions and kangaroos. He enjoys playing team sports and board games in his spare time. He currently holds the portuguese national record for fastest eater, among 50 participants of the most prestigious eating contest in Portugal. He is also an exceptional Terraforming Mars player.</p>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="profiles">
                    <img src={"images/ricardo.png"} alt="ricardo picture"/>
                    <div>
                        <h2>Ricardo Silva</h2>
                        <br/>
                        <p>Due to the worldwide Covid pandemic, Ricardo is currently a laid off hotel receptionist. He is also a Biology graduate with a weird passion for bats. As a portuguese bat specialist and enthusiast, Ricardo has visited most of Portugal's bat caves in pursuit of his lifelong dream of becoming Batman. He enjoys playing solo games, since that's the only way he can ever win at board games. </p>
                    </div>

                </div>               

                </div>
            </div>
        )
    }

export default AboutUs