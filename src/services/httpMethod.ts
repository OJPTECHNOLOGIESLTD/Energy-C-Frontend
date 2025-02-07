import { HttpResponse } from "@/interfaces/http";
import axiosClient from "../lib/axios";
// import { IHttpResponse } from "../interfaces/htpp";

export const handleGetRequest = async <T>(
  payload: string
): Promise<HttpResponse<T>> => {

  try {
    const { data } = await axiosClient.get(payload);
    return data;
  } catch (err) {
    console.log(err, "ERR");
    throw err;
  }
};

export const handlePostRequest = async <T, G>(
  path: string,
  payload: T
): Promise<HttpResponse<G>> => {
  try {
    const { data } = await axiosClient.post(`${path}`, payload);
    return data;
  } catch (err) {
    throw err;
  }
};
export const handlePuttRequest = async <T, G>(
  path: string,
  payload: T
): Promise<HttpResponse<G>> => {
  try {
    
    const { data } = await axiosClient.put(`${path}`, payload);
    return data;
  } catch (err) {
    throw err;
  }
};

export const handlePatchRequest = async <G>(
  path: string,
): Promise<HttpResponse<G>> => {
  try {
    
    const { data } = await axiosClient.patch(`${path}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const handleDeleteRequest = async <T>(
  payload: string
): Promise<HttpResponse<T>> => {
  try {
    const { data } = await axiosClient.delete(`${payload}`);
    return data;
  } catch (err) {
    throw err;
  }
};