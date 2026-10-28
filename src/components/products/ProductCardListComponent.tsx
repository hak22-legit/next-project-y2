
"use client";

import { useEffect, useState } from "react";
import { ProductCardComponent } from "./ProductCardComponent";

export default function ProductCardListComponent() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products`
      );
      const data = await response.json();
      setProducts(data.products);
    }

    fetchData();
  }, []);

  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCardComponent
          key={product.id}
          images={product.images[0]}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </section>
  );
}
