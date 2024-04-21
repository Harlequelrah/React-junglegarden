import React, { useState } from 'react';

function QuestionForm() {
    const [inputValue, setInputValue] = useState("Posez votre question ici");
    // const [isInputError, setIsInputError] = useState(false);

    // function checkValue(value) {
    //     if (value.includes('f')) {
    //         setIsInputError(true);
    //     } else {
    //         setIsInputError(false);
    //         setInputValue(value);
    //     }
    // }

    return (
        <div>
            {/* {isInputError && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )} */}
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    );
}

export default QuestionForm;
