import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../home/Card";

export default function ProductDetails() {
  const params = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:3001/products/${params?.id}`)
        .then((res) => {
          setItem(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return item && <>
   {item?.data?.name}  

   <img src={item?.data?.images[0]} alt="" />
  </>;
}
