const ShoppingListItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return <li onClick={deleteHandler} title="Click on me to delete the item.">{props.children}</li>;
};

export default ShoppingListItem;
