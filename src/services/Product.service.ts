import httpReq from "./http.service";

class ProductService {
  async getAllProducts(): Promise<IProduct[]> {
    const { data } = await httpReq.get("/posts");
    return data;
  }
}

export default new ProductService();
