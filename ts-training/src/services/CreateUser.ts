interface TechObjects{
  title: string;
  experience: number;
}

interface CreateUserData {
  // Parametro opcional
  name?: string;
  email: string;
  password: string;
  // Tambem pode ser string[]
  techs: Array<string | TechObjects>
}

export default function createUser({ name = '', email, password }: CreateUserData) {
  const user = {
    name: name,
    email: email,
    password: password
  }

  return user
}