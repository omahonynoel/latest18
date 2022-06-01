import { useState } from "react";
import { useRef } from "react";
import Multiselect from "multiselect-react-dropdown";

import styles from  './Accordion.module.css'
import BasicModal from './BasicModal'


const AccordionItem = ( {selectedPlayersOptions,faq} ) => {
  const [selectedPlayers, setSelectedPlayers] = useState([])

console.log("in accordion ITEM - event is  - ", selectedPlayersOptions)
console.log("in accordion ITEM - SP is  - ", selectedPlayers)

  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { question, answer } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className={styles.button} onClick={handleToggle}>
        {faq}
        <span className={styles.control}>{clicked ? "—" : "+"} </span>
      </button>

      <div
        ref={contentEl}
        className={styles.answer_wrapper}
        style={
          clicked
            ? { height: contentEl.current.scrollHeight  }
            : { height: "0px" }
        }
      >
        <div className="answer">Create Group</div>
        <button>Add Group</button>
        <button>Start Round</button>
        <BasicModal></BasicModal>
    
        

      </div>
    </li>
  );
};

export default AccordionItem;
