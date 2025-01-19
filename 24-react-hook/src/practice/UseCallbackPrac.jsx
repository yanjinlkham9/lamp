import React, { useState, useCallback, useEffect } from "react";

const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    // 장바구니에 상품 추가 로직 작성
    setCart((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    // 장바구니에서 상품 제거 로직 작성
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  // addToCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {
    console.log("addToCart 함수 참조값 변경!");
  }, [addToCart]);

  // removeFromCart 참조값 변경 여부 확인 [useEffect]
  useEffect(() => {
    console.log("removeFromCart 함수 참조값 변경!");
  }, [removeFromCart]);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {/* // 상품 목록 */}
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {/* // 쇼핑 카트에 추가된 목록 */}
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCartApp;
