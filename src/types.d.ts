interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  store: string;
}
interface ILoginData {
  email: string;
  password: string;
}

interface IUserData {
  name: string;
  email: string;
  id: string;
  token: string;
  role: string;
  status: string;
}
