import React from 'react';
import {ProgressBar} from 'react-bootstrap';

class Result extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 page-header">
                        <h1 className=" text-center">The Adventure - ISFP</h1>
                        <p className="text-center">"One way to get the most out of life is to look upon it as an adventure. 
                        William Feather"</p>
                        
                    </div>
                </div>            

                <div className="row">
                    <div className="col-md-8">
                        <h3>You Love Adventure and Enjoy Challenge</h3>

                        <p>
                            ISFP personality types are true artists, but not necessarily in the typical sense where they're out painting happy little trees.
                            Often enough though, they are perfectly capable of this. Rather, it's that they use aesthetics, design and even their choices and actions to push the limits of social convention.
                            ISFPs enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they've expressed more than once the phrase "Don't box me in!"
                        </p>
                        <h3>Happy to Be Who They Are</h3>
                        <p>
                            ISFPs live in a colorful, sensual world, inspired by connections with people and ideas. ISFP personalities take joy in reinterpreting these connections, reinventing and experimenting with both themselves and new perspectives. No other type explores and experiments in this way more. This creates a sense of spontaneity, making ISFPs seem unpredictable, even to their close friends and loved ones.

                            Despite all this, ISFPs are definitely Introverts (I), surprising their friends further when they step out of the spotlight to be by themselves to recharge. Just because they are alone though, doesn't mean people with the ISFP personality type sit idle – they take this time for introspection, assessing their principles. Rather than dwelling on the past or the future, ISFPs think about who they are. They return from their cloister, transformed.

                            ISFPs live to find ways to push their passions. Riskier behaviors like gambling and extreme sports are more common with this personality type than with others. Fortunately their attunement to the moment and their environment allows them to do better than most. ISFPs also enjoy connecting with others, and have a certain irresistible charm.
                        </p>
                        <p>However, if a criticism does get through, it can end poorly. Some ISFPs can handle kindly phrased commentary, valuing it as another perspective to help push their passions in new directions. But if the comments are more biting and less mature, ISFP personalities can lose their tempers in spectacular fashion.

                            ISFPs are sensitive to others' feelings and value harmony. When faced with criticism, it can be a challenge for people with this type to step away from the moment long enough to not get caught up in the heat of the moment. But living in the moment goes both ways, and once the heightened emotions of an argument cool, ISFPs can usually call the past the past and move on as though it never occurred.
                        </p>

                    </div>

                    <div className="col-md-4 personality-card">
                        <h3>The adventure - ISFP</h3>
                        <div className="col-md-3">
                        <h5>Introverted</h5>
                        <h5>Introverted</h5>
                        <h5>Introverted</h5>
                        <h5>Introverted</h5>
                        </div>
                        <div className="col-md-6">
                            <ProgressBar striped bsStyle="success" now={40} />
                            <ProgressBar striped bsStyle="info" now={20}  />
                            <ProgressBar striped bsStyle="warning" now={60}  />
                            <ProgressBar striped bsStyle="danger" now={80}  />
                        </div>
                        <div className="col-md-3">
                        <h5>Extroverted</h5>
                        <h5>Extroverted</h5>
                        <h5>Extroverted</h5>
                        <h5>Extroverted</h5>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Result;
