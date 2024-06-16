import { useState, ChangeEvent, FormEvent } from "react";
import Grid from "../grid";
import Box from "../box";
import Texfield from "../textfield";
import Botao from "../botao";

const Forms = () => {
    const [formData, setFormData] = useState({
        email: "",
        nome: "",
        sobrenome: "",
        cpf: "",
        rg: "",
        nascimento: "",
        foto: null as File | null // Faz parte da tentativa de evitar tela branca toda vez que eu carregava um arquivo.
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement; // Faz parte da tentativa de evitar tela branca toda vez que eu carregava um arquivo.
        console.log(name, value);

        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Formulário: ", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Cadastro Pessoa Responsivo</h1>
                <form onSubmit={handleSubmit}>
                    <Grid columns={1} gap={4} className="sm:grid-cols-2 gap-4">
                        <Box>
                            <Texfield 
                                type="email"
                                placeholder="Digite seu E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full"
                                name="email"
                            />
                        </Box>
                        <Box>
                            <Texfield
                                type="text"
                                placeholder="Nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className="w-full"
                                name="nome"
                            />
                        </Box>
                        <Box>
                            <Texfield
                                type="text"
                                placeholder="Sobrenome"
                                value={formData.sobrenome}
                                onChange={handleChange}
                                className="w-full"
                                name="sobrenome"
                            />
                        </Box>
                        <Box>
                            <Texfield
                                type="text"
                                placeholder="CPF"
                                value={formData.cpf}
                                onChange={handleChange}
                                className="w-full"
                                name="cpf"
                            />
                        </Box>
                        <Box>
                            <Texfield
                                type="text"
                                placeholder="RG"
                                value={formData.rg}
                                onChange={handleChange}
                                className="w-full"
                                name="rg"
                            />
                        </Box>
                        <Box>
                            <Texfield
                                type="date"
                                placeholder="Nascimento"
                                value={formData.nascimento}
                                onChange={handleChange}
                                className="w-full"
                                name="nascimento"
                            />
                        </Box>
                        <Box>
                            <Texfield
                                type="file"
                                placeholder="Foto"
                                value={formData.foto}
                                onChange={handleChange}
                                className="w-full"
                                name="foto"
                            />
                        </Box>
                    </Grid>
                    <Box className="mt-6">
                        <Botao
                            type="submit"
                            content="Enviar"
                            onClick={() => console.log("formulário enviado")}
                            className="w-full bg-blue-500 text-white py-2 rounded-md"
                        />
                    </Box>
                </form>
            </div>
        </div>
    );
}

export default Forms;
