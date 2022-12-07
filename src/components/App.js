import Button from "./Button";
import { useState } from "react";
import MemoForm from './MemoForm';
import Card from "./Card";

function App() {
  // Etablir l'état initial du formulaire.
  const [formVisibility, setFormVisibility] = useState(false);
  // Etat du gestionnaire d'état du formulaire.
  const [cards, setCards] = useState([]);
  //Gestion de l'ajout d'une tâche
  function handleSubmitCard(event, new_card) {
    console.log("handleSubmitCard", new_card);
    setCards([...cards, new_card])
  }
  return (
    <div className="App">
      <Button
        setFormVisibility={setFormVisibility}
      />
      {/*Conditional rendering in react */}
      {formVisibility && <MemoForm
        handleSubmitCard={handleSubmitCard}
        formVisibility={setFormVisibility}
      />}
      {/*Utiliser map pour parcourir le contenu de cards */}
      <div className="container">
        <div className="row row-cols-4">
          {cards.map(card => <Card
            //Passer l'objet card dans component Card pour faciliter la modification
            card={card}
            key={Math.random() * 10000}
          />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
