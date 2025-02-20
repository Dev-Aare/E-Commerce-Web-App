import React, { createContext, useEffect, useState, useCallback } from "react";
import { productData } from "../data/productData";

// Props type
interface CartContextProviderProps {
  children: React.ReactNode;
}

export interface CartItemProps {
  id: number;
  amount: number;
}

export interface CartContextProps {
  cart: CartItemProps[];
  increaseCart: (id: number) => void;
  decreaseCart: (id: number) => void;
  removeCart: (id: number) => void;
  totalCart: number;
  totalPrice: number;
  handleAmountChange: (id: number, value: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | null>(null);

export const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [totalCart, setTotalCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState<CartItemProps[]>(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  const sumAmount = useCallback(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.amount);
    });
    setTotalCart(sum);
  }, [cart]);

  const sumPrice = useCallback(() => {
    let sum = 0;
    cart.forEach((item) => {
      productData.forEach((product) => {
        sum += Number(item.amount) * product.price;
      });
    });
    setTotalPrice(sum);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    sumAmount();
    sumPrice();
  }, [cart, sumAmount, sumPrice]);

  const increaseCart = (id: number) => {
    const selectProduct = cart.find((item: CartItemProps) => item.id === id);
    if (selectProduct === undefined) {
      setCart((prevCart: CartItemProps[]) => {
        return [
          {
            id: id,
            amount: 1,
          },
          ...prevCart,
        ];
      });
    } else {
      const newCart = cart.map((item: CartItemProps) => {
        if (item.id === id) {
          return {
            id: id,
            amount: Number(selectProduct.amount) + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  const decreaseCart = (id: number) => {
    const selectProduct = cart.find((item: CartItemProps) => item.id === id);
    if (selectProduct && selectProduct.amount > 1) {
      const newCart = cart.map((item: CartItemProps) => {
        if (item.id === id) {
          return {
            id: id,
            amount: Number(selectProduct.amount) - 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      removeCart(id);
    }
  };

  const removeCart = (id: number) => {
    const newCart = cart.filter((item: CartItemProps) => item.id !== id);
    setCart(newCart);
  };

  const handleAmountChange = (id: number, value: number) => {
    const selectProduct = cart.find((item: CartItemProps) => item.id === id);
    if (selectProduct) {
      const newCart = cart.map((item: CartItemProps) => {
        if (item.id === id) {
          return {
            id: id,
            amount: value,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue: CartContextProps = {
    cart,
    increaseCart,
    decreaseCart,
    removeCart,
    totalCart,
    totalPrice,
    handleAmountChange,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
