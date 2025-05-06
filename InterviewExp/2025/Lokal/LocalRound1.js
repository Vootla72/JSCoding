// 1. wt is controlled vs uncontrolled components
//2. ScrollView vs FlatList -- adv over that
//3.How do u handle memory leakage
//4.How do u create react server components
//5. Activity Life cycle in Android
//6.How do u call native modules in JS
//7.Routing in React Native
//8.wt are deeplinks



// system design question
// fetch the data from an api ..
// add checkbox to each title.
// i can select multiple checkboxes.
//I have delete button
//OnClick of Delete Button , Show all the checked items titles in an alert


// my code sandbox link

// https://codesandbox.io/p/sandbox/bitter-browser-5rf9hn?file=%2Fsrc%2FApp.js%3A5%2C20-5%2C31



import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [deleteItems, setDeleteItems] = useState([]);

  // https://dummyjson.com/products

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const dataJson = await data.json();
      setProducts(dataJson.products);
    };

    getData();
  }, []);

  const handleOnChange = (id, title) => {
    setDeleteItems([...deleteItems, title]);
    if (deleteItems.length) {
      setIsDisabled(false);
    }
    // setDeleteItems();
  };
  const onDelete = () => {
    console.log("****delte", deleteItems);
    alert(deleteItems);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button disabled={false} onClick={onDelete}>
        Delete
      </button>

      {products.map((product, idx) => {
        return (
          <>
            <div style={{ display: "flex", flexDirection: "row" }} key={idx}>
              <input
                type="checkbox"
                // checked={value}
                onChange={() => handleOnChange(idx, product.title)}
              />
              <h4>{product.title}</h4>
            </div>
          </>
        );
      })}
    </div>
  );
}
