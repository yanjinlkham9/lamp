import React, { useState, useMemo } from "react";

const ProductFilter = () => {
  // 상품 가격 제한 상태 관리
  const [priceLimit, setPriceLimit] = useState(0);
  const products = [
    { name: "Product A", price: 30 },
    { name: "Product B", price: 50 },
    { name: "Product C", price: 70 },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.price < priceLimit);
    // 여기에 필터링 로직 작성
  }, [
    priceLimit,
    /* 의존성 배열 작성 */
  ]);

  return (
    <div>
      <h2>Product Filter</h2>
      <input
        type="number"
        value={priceLimit}
        placeholder="Enter price limit"
        onChange={(e) => setPriceLimit(e.target.value)}
      />
      <ul>
        {/* 상품 목록 나열 로직 작성 */}
        {filteredProducts.map((product) => (
          <li key={product.name}>
            {product.name}-${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
