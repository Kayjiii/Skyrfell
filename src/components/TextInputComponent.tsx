import { ChangeEvent } from "preact/compat";
import { useState, useEffect } from "preact/hooks";
import { Card } from "../custom";
import { getCardsfromDatabase } from "./cringes_json";


function TextInputComponent() {
    // Create a state variable to store the input value
    const [inputValue, setInputValue] = useState<string>('');
    let [cards, setCards] = useState<Card[]>([]); // Assuming Card is a type for your data
    
  
    // Event handler to update the state when the input changes
    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | null) => {
      if (event?.target instanceof HTMLInputElement) {
        setInputValue(event.target.value);
      }
    
    
    };
    
      useEffect(() => {
        // Fetch data when inputValue changes
        getCardsfromDatabase(inputValue, "cardList")
          .then((cards) => {
            setCards(cards);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [inputValue]);
  
      return (
        <div>
          <label htmlFor="textInput">Enter Card Name: </label>
          <input
            type="text"
            id="textInput"
            value={inputValue}
            onChange={handleInputChange}
          />
          {cards.length > 0 ? (
            <p>{cards[0].name}</p>
          ) : (
            <p>No cards found.</p>
          )}
        </div>
      );
      
  }

export default TextInputComponent