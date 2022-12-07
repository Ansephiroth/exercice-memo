const MemoForm = (props) => {
    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                //Récupération des valeurs des différents inputs
                const question = document.getElementById("question").value;
                console.log(`Question:`, question);
                const answer = document.getElementById("answer").value;
                console.log(`Réponse:`, answer);
                const explanation = document.getElementById("explanation").value;
                console.log(`Explication:`, explanation);
                props.handleSubmitCard(event, { question, answer, explanation });
                props.formVisibility(false);
            }}
            >
                <label htmlFor="question">Question:</label>
                <input type="text" id="question" />
                <label htmlFor="answer">Réponse:</label>
                <input type="text" id="answer" />
                <label htmlFor="explanation">Explication:</label>
                <input type="text" id="explanation" />
                <input type="submit" value="Valider" />
            </form>
        </div>
    );
}

export default MemoForm;