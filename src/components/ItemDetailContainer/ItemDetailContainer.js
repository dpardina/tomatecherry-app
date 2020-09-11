import React, { useState, useEffect } from "react";

export default function ItemDetailContainer() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055&limit=5')
        .then(response => {
        return response.json();
        })
        .then(res => {
        setData(res.results);
        setLoading(false);
        })
    }, [])

  useEffect(() => {
    console.log(data);
  }, [data])

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <div style={{
      "display": "flex",
      "flexDirection": "column", 
      "flexWrap": "wrap", 
      "justifyContent": "center", 
      "alignItems": "center"
    }}>
      <ul>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <img
                src={item.thumbnail} 
                style={{"width": "100px"}}
              />
              <p>$ {item.price}</p>
              <p>product_id: {item.id}</p>
              <a href={item.permalink}>BUY NOW</a>
            </div>
          );
        })}
      </ul>
    </div>
  );
}