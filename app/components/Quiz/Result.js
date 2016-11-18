import React from 'react';
import StatBar from './StatBar';

class Result extends React.Component {
    constructor() {
        super();

        this.state = {
            userResult: {}
        }

        this.getResult = this.getResult.bind(this);
    }
    
    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        const userId = this.props.params.userid;
        let that = this;
        const port = window.location.port;
        const protocol = window.location.protocol.concat('//');
        let realHost = window.location.hostname === 'localhost'
            ? protocol.concat(window.location.hostname).concat(`:${port}`)
            : protocol.concat(window.location.hostname);

        fetch(`${realHost}/api/getResult/${userId}`, {
            method: 'get'
        }).then(function (response) {
            response.json().then(function (data) {
                return that.getResult(data);
            });
        }).catch(function (err) {
            console.log(err);
            //go to home
            //this.context.router.push('/');
        });
    }

    getResult(data) {
        this.setState({
            userResult: data
        })
    }

    render() {
        let userResult = this.state.userResult;
        console.log(userResult);
        let characterCode, characterName, characterQuote, characterImageUrl;
        let introverted = 0, extraverted = 0; //mind
        let observant = 0, intuitive = 0; //energy
        let feeling = 0, thinking = 0; //nature
        let prostecting = 0, judging = 0; //tactics
        let turbulent = 0, assertive = 0; //identity
        if (userResult !== undefined
            && userResult.mind !== undefined
            && userResult.energy !== undefined
            && userResult.nature !== undefined
            && userResult.tactics !== undefined
            && userResult.identity !== undefined) {
            characterName = userResult.yourCharacter;
            characterCode = userResult.yourCharacterCode;
            characterQuote = userResult.yourQuote;
            characterImageUrl = userResult.yourImageUrl;

            introverted = userResult.mind.introverted;
            extraverted = userResult.mind.extraverted;
            observant = userResult.energy.observant;
            intuitive = userResult.energy.intuitive;
            thinking = userResult.nature.thinking;
            feeling = userResult.nature.feeling;
            prostecting = userResult.tactics.prostecting;
            judging = userResult.tactics.judging;
            turbulent = userResult.identity.turbulent;
            assertive = userResult.identity.assertive;
        }
        const greenBar = "progress-bar-success";
        const blueBar = "progress-bar-info";
        let psBarEnergy,psBarMind,psBarNature,psBarTactics;
        let psBarEnergyColor, psBarMindColor, psBarNatureColor, psBarTacticsColor;
        let psBarMindRight,psBarEnergyRight,psBarNatureRight,psBarTacticsRight;

        if (observant > intuitive) {
            psBarEnergy = observant;
            psBarEnergyColor = blueBar;
            psBarEnergyRight = false;
        } else {
            psBarEnergy = intuitive;
            psBarEnergyColor = greenBar;
            psBarEnergyRight = true;
        }
        if (introverted > extraverted) {
            psBarMind = introverted;
            psBarMindColor = blueBar;
            psBarMindRight = false;
        } else {
            psBarMind = extraverted;
            psBarMindColor = greenBar;
            psBarMindRight = true;
        }
        if (thinking > feeling) {
            psBarNature = thinking;
            psBarNatureColor = blueBar;
            psBarNatureRight = false;
        } else {
            psBarNature = feeling;
            psBarNatureColor = greenBar;
            psBarNatureRight = true;
        }
        if (prostecting > judging) {
            psBarTactics = prostecting;
            psBarTacticsColor = blueBar;
            psBarTacticsRight = false;
        } else {
            psBarTactics = judging;
            psBarTacticsColor = greenBar;
            psBarTacticsRight = true;
        }

        return (
            <div className="container result">
                <div className="row header">
                    <div className="col-md-12 page-header">
                        <h1 className="text-center">{characterName}- {characterCode}</h1>
                        <p className="text-center">{characterQuote}</p>
                        <img src="http://placehold.it/200x250" className="img-responsive center-block" />
                    </div>
                </div>

                <div className="row content">
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
                        <h3>{characterName}- {characterCode}</h3>

                        <StatBar psBarMindRight={psBarMindRight} statColor={blueBar} statTitLeft={"Introverted"} statTitRight={"Extroverted"} label={psBarMind} value={psBarMind} />
                        <StatBar psBarEnergyRight={psBarEnergyRight}  statColor={blueBar} statTitLeft={"Intuition"} statTitRight={"Sensing"} label={psBarEnergy} value={psBarEnergy} />
                        <StatBar psBarNatureRight={psBarNatureRight}  statColor={blueBar} statTitLeft={"Thinking"} statTitRight={"Feeling"} label={psBarNature} value={psBarNature} />
                        <StatBar psBarTacticsRight={psBarTacticsRight}  statColor={blueBar} statTitLeft={"Juding"} statTitRight={"Perceiving"} label={psBarTactics} value={psBarTactics} />

                    </div>
                </div>

            </div>
        );
    }
}

Result.contextTypes = {
    router: React.PropTypes.object
};

export default Result;
