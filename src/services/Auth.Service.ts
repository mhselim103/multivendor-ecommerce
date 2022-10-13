import httpReq from "./http.service";

class AuthService {
  async signup(body: any): Promise<any> {
    const { data } = await httpReq.post("/auth/signup", body);
    return data;
  }
  async login(payload: ILoginData): Promise<ILoginData> {
    const { data } = await httpReq.post("/auth/login", payload);
    return data;
  }
}

export default new AuthService();
