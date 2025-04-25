import { data } from "../data";

export const getAllProducts = () => {
    return data.products;
};

export const getProductById = (id: number) => {
    return data.products.find((product) => product.id === id);
};

export const getProductsByCategory = (idCategory: number) => {
    return data.products.filter((product) => product.idCategory === idCategory);
};
