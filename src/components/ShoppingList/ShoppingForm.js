import { useState } from "react";
import Button from "../UI/Button";
import styles from "./ShoppingForm.module.css";

const ShoppingForm = (props) => {
  const [enteredItemValue, setenteredItemValue] = useState("");
  const [isEntered, setIsEntered] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredItemValue.trim().length === 0) {
      setIsEntered(false);
      return;
    }

    props.onAddShoppingItem(enteredItemValue);
    setenteredItemValue("");
  };

  const itemChangeHandler = (event) => {
    setenteredItemValue(event.target.value);

    if (enteredItemValue.trim().length > 0) {
      setIsEntered(true);
      return;
    }
  };

  return (
    <div className={styles["shopping-form"]}>
      <h1>What do you have to buy?</h1>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles[`input-item`]} ${!isEntered && styles.invalid}`}
        >
          <label>Enter product name:</label>
          <input
            type="text"
            onChange={itemChangeHandler}
            value={enteredItemValue}
          />
        </div>
        <Button type="submit">Add product</Button>
      </form>
    </div>
  );
};

export default ShoppingForm;
