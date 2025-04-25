import { data } from "../data";

export const getCategoryById = (id: number) => {
    return data.categories.find((category) => category.id === id);
};

export const getAllCategories = () => {
    return data.categories;
};
