import { useState, ChangeEvent } from "react";
import Botao from "./components/botao";
import Grid from "./components/grid";
import Textfield from "./components/textfield";

import "./index.css";
import Box from "./components/box";

function App() {
  const [password, setPassword] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <Grid columns={2} gap={4}>
        <Box className="bg-purple-500 p-4 ">
          <Textfield
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={handleChange}
            className="text-cyan-400 text-center"
          />
        </Box>
        <Box className="bg-purple-500 p-4">
          <Botao
            content="Botão"
            onClick={() => console.log("Botão clicado")}
            className="text-cyan-400 text-center w-full"
          />
        </Box>
      </Grid>
    </div>
  );
}

export default App;
