import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";

const App = () => {
  const data = [
    {
      name: "Coca",
      price: 2000,
      qty: 20,
      description: "Good for drink !",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/330px-Coca_Cola_Flasche_-_Original_Taste.jpg",
    },
    {
      name: "Popsi",
      price: 3000,
      qty: 10,
      description: "Good for drink !",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/330px-Coca_Cola_Flasche_-_Original_Taste.jpg",
    },
  ];

  const btnAddToCart = (item) => {
    alert(item.name);
    console.log(JSON.stringify(item));
  };
  return (
    <div>
      <h1>Hello world !</h1>
      <Greeting />
      <div
        className=""
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {data.length ? (
          <div>
            {data.map((item, index) => {
              return (
                <Card
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                  description={item.description}
                  btnAddToCart={() => btnAddToCart(item)}
                />
              );
            })}
          </div>
        ) : (
          <h1>No data</h1>
        )}
      </div>
    </div>
  );
};

export default App;
