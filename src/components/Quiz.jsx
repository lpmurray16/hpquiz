import React, { useState }from 'react';



const Quiz = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="wrapper_quiz">
            <h3>This is the quiz</h3>
            <p className="count">{count}</p>
            <button onClick={() => setCount(count+1)}>Click Me</button>
        </div>
    );
}

export default Quiz;
