import React from 'react';
import StatBar from './StatBar';
import fakePersonalities from '../data/fakePersonalities';

class Result extends React.Component {
    constructor() {
        super();

        this.state = {
            userResult: {},
            loadingText: 'Loading...',
            isLoadDone: false,
            userFound: true
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        //require('smoothscroll-polyfill').polyfill();
        //document.querySelector('#app').scrollIntoView({ behavior: 'smooth' }); 

        const userId = this.props.params.userid;
        let that = this;
        const port = location.port;
        const protocol = location.protocol.concat('//');
        let realHost = location.hostname === 'localhost'
            ? protocol.concat(location.hostname).concat(`:${port}`)
            : protocol.concat(location.hostname);

        fetch(`${realHost}/api/getResult/${userId}`, {
            method: 'get'
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    that.setState({
                        userResult: data,
                        isLoadDone: true
                    })
                });
            }
            else {
                that.setState({
                    isLoadDone: true,
                    userFound: false
                })
            }
        }).catch(function (err) {
            console.log(err);
            //go to home
            //this.context.router.push('/');
        });
    }

    render() {
        if (this.state.isLoadDone && !this.state.userFound) {
            return <div className="container"><h3>Không tìm thấy người dùng phù hợp</h3></div>
        }

        if (!this.state.isLoadDone && this.state.userFound) {
            return <div className="container"><h3>Vui lòng đợi một chút nhé...</h3></div>
        }

        let userResult = this.state.userResult;
        let characterFeatures = this.state.characterFeatures;
        let characterCode, characterSimpleCode, characterName, characterQuote, characterGroup, characterImageUrl, characterContent;
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
            characterCode = userResult.yourCharacterCode;
            // characterName = userResult.yourCharacter;
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

            let charCode = characterCode.slice(0, characterCode.length-2)
            fakePersonalities.characters.forEach(character => {
                if (character.charCode.toUpperCase() === charCode.toUpperCase()) {
                    characterFeatures = character;
                }
            })
        
            if (characterFeatures !== undefined) {
                characterSimpleCode = characterFeatures.charCode;
                characterName = characterFeatures.charName;
                characterGroup = characterFeatures.charGroup;
                characterContent = characterFeatures.charContent;
            }
                
        }
        const greenBar = "progress-bar-success";
        const blueBar = "progress-bar-info";
        let psBarEnergy, psBarMind, psBarNature, psBarTactics;
        let psBarEnergyColor, psBarMindColor, psBarNatureColor, psBarTacticsColor;
        let psBarMindRight, psBarEnergyRight, psBarNatureRight, psBarTacticsRight;

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
                        <h1 className="text-center">{characterName} - {characterGroup} - {characterSimpleCode}</h1>
                        <p className="text-center">{characterQuote}</p>
                       {/* <img src="http://placehold.it/200x250" className="img-responsive center-block" />*/}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 characterContent">
                            <div dangerouslySetInnerHTML={ { __html: characterContent } }></div>                    
                    </div>

                    <div className="col-md-4 personality-card">
                        <h3>{characterName} - {characterSimpleCode}</h3>

                        <StatBar psBarMindRight={psBarMindRight} statColor={blueBar} statTitLeft={"Introverted"} statTitRight={"Extroverted"} label={psBarMind} value={psBarMind} />
                        <StatBar psBarEnergyRight={psBarEnergyRight} statColor={blueBar} statTitLeft={"Intuition"} statTitRight={"Sensing"} label={psBarEnergy} value={psBarEnergy} />
                        <StatBar psBarNatureRight={psBarNatureRight} statColor={blueBar} statTitLeft={"Thinking"} statTitRight={"Feeling"} label={psBarNature} value={psBarNature} />
                        <StatBar psBarTacticsRight={psBarTacticsRight} statColor={blueBar} statTitLeft={"Juding"} statTitRight={"Perceiving"} label={psBarTactics} value={psBarTactics} />

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
