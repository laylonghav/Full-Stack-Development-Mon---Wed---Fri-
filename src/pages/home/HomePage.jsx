import { useEffect, useState } from "react";
import MasterLayout from "../../components/layouts/MasterLayout";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice";

export default function HomePage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  if (!user || !user.username) {
    navigate("/auth/login");
  }

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(false);
      const res = await fetch("https://dummyjson.com/products");
      if (res) {
        setLoading(true);
      }

      const data = await res.json();

      setProduct(data.products);
      console.log(data.products);
    };

    fetchingData();
  }, []);

  const onAddToCard = (itemAddToCart) => {
    console.log(`item add to card : ${JSON.stringify(itemAddToCart)}`);

    navigate(`/product/${itemAddToCart}`);
  };
  return (
    <div>
      <h1>{user?.username}</h1>

      <button onClick={() => dispatch(logout())}>Logout</button>
      <p>Home Page</p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {product.map((item, index) => {
          return (
            <Card
              key={index}
              loading={loading}
              price={item.price}
              description={item.description}
              rating={item.rating}
              images={item.images}
              availabilityStatus={item.availabilityStatus}
              title={item.title}
              stock={item.stock}
              onAddToCard={() => onAddToCard(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
