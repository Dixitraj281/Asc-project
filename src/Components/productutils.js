import {productslist} from './Pages/productslist'
export const getProductById = (categoryId, productId) => {
  const category = productslist[categoryId];
  const product = category.find(product => product.id === productId);
  return product;
};