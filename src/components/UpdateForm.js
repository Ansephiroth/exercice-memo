import { useState } from 'react';

const UpdateForm = (props) => {
    //Créer le useState des valeurs par défaut pour pouvoir les modifier
    const [question, setQuestion] = useState(props.card.question)
    const [answer, setAnswer] = useState(props.card.answer)
    const [explanation, setExplanation] = useState(props.card.explanation)
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.handleSubmitUpdatedCard(event, { question, answer, explanation });
                props.setUpdateFormVisibility(false);
            }}
            >
                <label htmlFor="question">Question:</label>
                <input onChange={(e) => setQuestion(e.target.value)} type="text" id="question" value={question} />
                <label htmlFor="answer">Réponse:</label>
                <input onChange={(e) => setAnswer(e.target.value)} type="text" id="answer" value={answer} />
                <label htmlFor="explanation">Explication:</label>
                <input onChange={(e) => setExplanation(e.target.value)} type="text" id="explanation" value={explanation} />
                <input type="submit" value="Valider" />
            </form>
        </div>
    );
}

export default UpdateForm;