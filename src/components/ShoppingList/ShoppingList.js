import ShoppingListItem from "./ShoppingListItem";
import "./ShoppingList.css";

const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
      <ul>
        {props.items.map((item) => (
          <ShoppingListItem
            key={item.id}
            id={item.id}
            onDelete={props.onDeleteItem}
          >
            {item.listItem}
          </ShoppingListItem>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
