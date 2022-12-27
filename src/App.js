import { useState } from "react";
import "./App.css";
import ShoppingForm from "./components/ShoppingList/ShoppingForm";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Footer from "./components/UI/Footer";
import Navigation from "./components/UI/Navigation";

const App = () => {
  const [shoppingList, setShoppingItem] = useState([
    { id: "0", listItem: "Chopped tomatoes" },
    { id: "1", listItem: "Lean cuts of red meat" },
    { id: "2", listItem: "Peanut butter" },
  ]);

  const addShoppingItem = (enteredItem) => {
    setShoppingItem((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.unshift({
        listItem: enteredItem,
        id: Math.random().toString(),
      });
      return updatedItems;
    });
  };

  const deleteItemHandler = (itemId) => {
    setShoppingItem((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      return updatedItems;
    });
  };

  let content = <p>No items were added on the shopping list.</p>;

  if (shoppingList.length > 0) {
    content = (
      <ShoppingList items={shoppingList} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div className="app">
      <Navigation />
      <div className="hero" />
      <div className="wrapper">
        <div className="content">
          <ShoppingForm
            onAddShoppingItem={addShoppingItem}
            onDeleteItem={deleteItemHandler}
          />
          <div className="shopping-list-items">{content}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
