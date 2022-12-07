import { useState } from 'react';
import ModifyButton from './ModifyButton';
import UpdateForm from './UpdateForm';
const Card = (props) => {
    // Au lieu de traiter le formulaire de modification dans le app.js
    // On le traite dans card, pour cibler la carte à modifier
    // Sinon la carte n'est pas modifier mais une nouvelle est créé
    //Création de l'état initial du updateformulaire, du gestionnaire d'état et de la gestion du submit de l'update
    const [updateFormVisibility, setUpdateFormVisibility] = useState(false);
    const [updatedCard, setUpdatedCard] = useState(props.card);
    function handleSubmitUpdatedCard(event, updated_card) {
        console.log("handleSubmitUpdatedCard", updated_card);
        setUpdatedCard(updated_card)
    }
    //Gérer l'état de la visibilité de la réponse et l'explication
    const [answerVisibility, setanswerVisibility] = useState(false);
    return (
        <section className="border rounded ">
            {/*Rendre la réponse visible en cliquant sur le titre */}
            <h2 onClick={(e) =>
                //updatedCard.question anciennement props.card.question. Modification dûe au fait de ramener la modification du formulaire dans Card au lieu de App.
                setanswerVisibility((answerVisibility) => !answerVisibility)}>{updatedCard.question}</h2>
            <div>
                {/* Condition de la visibilité */}
                {answerVisibility &&
                    (<>
                        <h3>{updatedCard.answer}</h3>
                        <h3>{updatedCard.explanation}</h3>
                    </>)
                }
                {/*Appel du component ModifyButton*/}
                <ModifyButton onClick={(e) => {
                    //Apparition du Update Formulaire.
                    setUpdateFormVisibility(
                        (updateFormVisibility) => !updateFormVisibility
                    )
                }
                } />
                {updateFormVisibility && <UpdateForm
                    setUpdateFormVisibility={setUpdateFormVisibility}
                    handleSubmitUpdatedCard={handleSubmitUpdatedCard}
                    //Envoyer les donner de la carte vers le UpdateForm
                    card={updatedCard}
                />}
            </div>
        </section>
    );
}

export default Card;