const Button = (props) => {
    return (
        <button onClick={(e) => {
            //Apparition du Formulaire.
            props.setFormVisibility(
                (formVisibility) => !formVisibility
            )
        }
        }>Créer une carte
        </button>
    );
}

export default Button;