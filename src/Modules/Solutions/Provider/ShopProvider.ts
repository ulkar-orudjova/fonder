import $axios from "../../../api/axiosInterceptor";
import $api from "../../../api/endpoint";
import type { IProduct } from "../Models/ShopModel";


export const getProducts = async () => {
  return await $axios.get<IProduct[]>($api("get_all_product"));
};

export const getProductDetails = async (id: string) => {
  return $axios.get<IProduct>(`${$api("get_single_product")}/${id}`);
};
