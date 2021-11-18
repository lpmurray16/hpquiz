import React, { useState }from 'react';



const Quiz = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="wrapper_quiz">
            This is the quiz
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Click Me</button>
        </div>
    );
}

export default Quiz;
