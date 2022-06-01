
import AccordionItem from "./AccordionItem";
// styles
import styles from  './Accordion.module.css'



export default Groups = (event) => {



  return (
    <div><button></button>
    <ul className={styles.accordion}>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
    </div>
  );
};

