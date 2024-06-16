import { useState, ChangeEvent, FormEvent } from "react";
import Box from "../box";
import Grid from "../grid";
import Texfield from "../textfield";
import Botao from "../botao";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login Data: ", loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <Box className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <Grid columns={1} gap={4}>
            <Box>
              <Texfield
                type="email"
                placeholder="E-mail"
                value={loginData.email}
                onChange={handleChange}
                className="w-full"
                name="email"
              />
            </Box>
            <Box>
              <Texfield
                type="password"
                placeholder="Senha"
                value={loginData.password}
                onChange={handleChange}
                className="w-full"
                name="password"
              />
            </Box>
            <Box>
              <Botao
                type="submit"
                content="Entrar"
                onClick={() => console.log("Login Submitted")}
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              />
            </Box>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default Login;
