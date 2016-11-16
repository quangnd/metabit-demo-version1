import React, { PropTypes } from 'react'

const Results = (props) => {
    const userInfo = props.userInfo;
    return(
        <div className="container">
            <h1>Your information</h1>
            <div>
                Your age: {userInfo.age} <br/>
                Gender: {userInfo.gender} <br/>
                Subjects: {userInfo.subjects.toString()}
                Hobbies: {userInfo.hobbies.toString()}
            </div>
            <hr/>
            <h1> Results: </h1>
            <ul>
                {props.results.map(result => (
                     <li key={result.id}>{result.name} has value is: {result.value}</li>
                ))}
            </ul>

            <a href="/">Back to Home</a>
        </div>
    )
}

Results.propTypes = {
    results: PropTypes.array.isRequired
}

export default Results;