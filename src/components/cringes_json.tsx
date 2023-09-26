import { Card } from "../custom";

export function fetchFile(fileName: string) {
    const file = `${location.origin}/${fileName}.json`;
    console.log('Fetching data from:', file);
  
    return fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        console.log('Data fetched successfully:', json);
        return json
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be handled elsewhere if needed
      });
  }
  
  
  export function getCardsfromDatabase(cardName: string, fileName: string): Promise<Card[]> {
    return fetchFile(fileName)
      .then(cards => {
        const cardList: Card[] = cards;
        if (cardList == undefined) {
          console.log("tur");
          
        }
        return cardList.filter(obj => obj.name.includes(cardName));
      })
      .catch(error => {
        // Handle errors, e.g., log them or reject the promise
        return Promise.reject(new Error(`Error fetching cards: ${error.message}`));
      });
  }
  