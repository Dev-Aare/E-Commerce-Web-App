export interface ProductDataProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: {
    preview: string;
    model: string[];
    design: string;
  };
}

export const productData: ProductDataProps[] = [
  {
    id: 1,
    title: "T-Shirt 1",
    description: "Vintage Retro? T-shirt",
    price: 24.99,
    images: {
      preview: "image/products/Product-01-Preview.png",
      model: [
        "image/products/Product-01-Model-01.png",
        "image/products/Product-01-Model-02.png",
        "image/products/Product-01-Model-03.png",
      ],
      design: "image/products/Product-01-Design.png",
    },
  },
  {
    id: 2,
    title: "T-Shirt 2",
    description: "Just Vibin' T-shirt",
    price: 24.99,
    images: {
      preview: "image/products/Product-02-Preview.png",
      model: [
        "image/products/Product-02-Model-01.png",
        "image/products/Product-02-Model-02.png",
        "image/products/Product-02-Model-03.png",
      ],
      design: "image/products/Product-02-Design.png",
    },
  },
  {
    id: 3,
    title: "T-Shirt 3",
    description: "Soft Bold T-shirt",
    price: 9.99,
    images: {
      preview: "image/products/Product-03-Preview.png",
      model: [
        "image/products/Product-03-Model-01.png",
        "image/products/Product-03-Model-02.png",
        "image/products/Product-03-Model-03.png",
      ],
      design: "image/products/Product-03-Design.png",
    },
  },
  {
    id: 4,
    title: "T-Shirt 4",
    description: "Psyco T-shirt",
    price: 9.99,
    images: {
      preview: "image/products/Product-04-Preview.png",
      model: [
        "image/products/Product-04-Model-01.png",
        "image/products/Product-04-Model-02.png",
        "image/products/Product-04-Model-03.png",
      ],
      design: "image/products/Product-04-Design.png",
    },
  },
  {
    id: 5,
    title: "T-Shirt 5",
    description: "Secrets T-shirt",
    price: 9.99,
    images: {
      preview: "image/products/Product-05-Preview.png",
      model: [
        "image/products/Product-05-Model-01.png",
        "image/products/Product-05-Model-02.png",
        "image/products/Product-05-Model-03.png",
      ],
      design: "image/products/Product-05-Design.png",
    },
  },
  {
    id: 6,
    title: "T-Shirt 6",
    description: "Destiny The choice is yours T-shirt",
    price: 19.9,
    images: {
      preview: "image/products/Product-06-Preview.png",
      model: [
        "image/products/Product-06-Model-01.png",
        "image/products/Product-06-Model-02.png",
        "image/products/Product-06-Model-03.png",
      ],
      design: "image/products/Product-06-Design.png",
    },
  },
  {
    id: 7,
    title: "T-Shirt 7",
    description: "Destiny T-shirt",
    price: 19.99,
    images: {
      preview: "image/products/Product-07-Preview.png",
      model: [
        "image/products/Product-07-Model-01.png",
        "image/products/Product-07-Model-02.png",
        "image/products/Product-07-Model-03.png",
      ],
      design: "image/products/Product-07-Design.png",
    },
  },
  {
    id: 8,
    title: "T-Shirt 8",
    description: "Destiny is waiting T-shirt",
    price: 19.99,
    images: {
      preview: "image/products/Product-08-Preview.png",
      model: [
        "image/products/Product-08-Model-01.png",
        "image/products/Product-08-Model-02.png",
        "image/products/Product-08-Model-03.png",
      ],
      design: "image/products/Product-08-Design.png",
    },
  },
  {
    id: 9,
    title: "T-Shirt 9",
    description: "Instinct  The choice is yours T-shirt",
    price: 29.9,
    images: {
      preview: "image/products/Product-09-Preview.png",
      model: [
        "image/products/Product-09-Model-01.png",
        "image/products/Product-09-Model-02.png",
        "image/products/Product-09-Model-03.png",
      ],
      design: "image/products/Product-09-Design.png",
    },
  },
  {
    id: 10,
    title: "T-Shirt 10",
    description: "Warrior The choice is yours T-shirt",
    price: 29.9,
    images: {
      preview: "image/products/Product-10-Preview.png",
      model: [
        "image/products/Product-10-Model-01.png",
        "image/products/Product-10-Model-02.png",
        "image/products/Product-10-Model-03.png",
      ],
      design: "image/products/Product-10-Design.png",
    },
  },
  {
    id: 11,
    title: "T-Shirt 11",
    description: "Galaxy T-shirt",
    price: 19.9,
    images: {
      preview: "image/products/Product-11-Preview.png",
      model: [
        "image/products/Product-11-Model-01.png",
        "image/products/Product-11-Model-02.png",
        "image/products/Product-11-Model-03.png",
      ],
      design: "image/products/Product-11-Design.png",
    },
  },
  {
    id: 12,
    title: "T-Shirt 12",
    description: "Intuition T-shirt",
    price: 19.9,
    images: {
      preview: "image/products/Product-12-Preview.png",
      model: [
        "image/products/Product-12-Model-01.png",
        "image/products/Product-12-Model-02.png",
        "image/products/Product-12-Model-03.png",
      ],
      design: "image/products/Product-12-Design.png",
    },
  },
  {
    id: 13,
    title: "T-Shirt 13",
    description: "Intuition The choice is yours T-shirt",
    price: 24.99,
    images: {
      preview: "image/products/Product-13-Preview.png",
      model: [
        "image/products/Product-13-Model-01.png",
        "image/products/Product-13-Model-02.png",
        "image/products/Product-13-Model-03.png",
      ],
      design: "image/products/Product-13-Design.png",
    },
  },
  {
    id: 14,
    title: "T-Shirt 14",
    description: "Beauty World T-shirt",
    price: 14.99,
    images: {
      preview: "image/products/Product-14-Preview.png",
      model: [
        "image/products/Product-14-Model-01.png",
        "image/products/Product-14-Model-02.png",
        "image/products/Product-14-Model-03.png",
      ],
      design: "image/products/Product-14-Design.png",
    },
  },
  {
    id: 15,
    title: "T-Shirt 15",
    description: "Isolated T-shirt",
    price: 14.99,
    images: {
      preview: "image/products/Product-15-Preview.png",
      model: [
        "image/products/Product-15-Model-01.png",
        "image/products/Product-15-Model-02.png",
        "image/products/Product-15-Model-03.png",
      ],
      design: "image/products/Product-15-Design.png",
    },
  },
];
