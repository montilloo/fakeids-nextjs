import React, { useState } from "react";
import Product1 from "@/images/products/1.png";
import Product2 from "@/images/products/2.png";
import Product3 from "@/images/products/3.png";
import Product4 from "@/images/products/4.png";
import Product5 from "@/images/products/5.png";

const Detail = ({ products }) => {
  const [index, setIndex] = useState(0);
  const { image } = products;
  return (
    <div className={""}>
      <div>
        <div className="image-container">
          <img src={image && image[index]} className="product-detail-image" />
        </div>
        <div className="small-images-container">
          {image?.map((item, i) => (
            <img
              key={i}
              src={item}
              className={
                i === index ? "small-image selected-image" : "small-image"
              }
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  // const product = await client.fetch(query);
  // const products = await client.fetch(productsQuery);

  return {
    props: {
      products: {
        image: [Product1, Product2, Product4, Product3, Product5],
      },
    },
  };
};
export default Detail;
