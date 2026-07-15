import type { Carro } from "../interfaces/Carro"
import { Input } from "./Input";
import axios from "axios";

interface FormCarroProps {
    marca: string,
    setMarca: (marca: string) => void,
    modelo: string,
    setModelo: (modelo: string) => void,
    cor: string,
    setCor: (cor: string) => void,
    placa: string,
    setPlaca: (placa: string) => void;
    preco: number,
    setPreco: (preco: number) => void,
    quilometragem: number,
    setQuilometragem: (quilometragem: number) => void,
    dataFabricacao: string,
    setDataFabricacao: (dataFabricacao: string) => void;

}


export const FormCarro = ({ marca, setMarca, modelo, setModelo, cor, setCor, placa, setPlaca, preco, setPreco, quilometragem,
    setQuilometragem, dataFabricacao, setDataFabricacao }: FormCarroProps) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const novoCarro: Omit<Carro, 'id'> = {
            marca,
            modelo,
            cor,
            placa,
            preco,
            quilometragem,
            dataFabricacao,
            statusCarro: 'DISPONIVEL'
        }

        try {
            axios.post(API_URL + '/carros', novoCarro)
                .then(res => {
                    console.log(res.data)
                    alert("Carro salvo com sucesso!!!")
                })
                .catch(err => {
                    console.log("Erro na resposta da API: " + err);
                    alert("Erro ao salvar");
                });
        } catch (error) {
            alert(error);
        }
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-3xl w-full h-auto flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-md" >
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Cadastrar Carro</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Marca</label>
                        <Input className="px-4 py-2 rounded border-2 focus:outline-blue-400"
                            type="text"
                            placeholder="Digite a marca"
                            onChange={(e) => setMarca(e.target.value)}
                        />
                    </div>


                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Modelo</label>
                        <Input className="px-4 py-2 rounded border-2 focus:outline-blue-400"
                            type="text"
                            placeholder="Digite o modelo"
                            onChange={(e) => setModelo(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Placa</label>
                        <Input className="px-4 py-2 rounded border-2 focus:outline-blue-400"
                            type="text"
                            placeholder="Digite a placa"
                            onChange={(e) => setPlaca(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Data de Fabricação</label>
                        <Input className="px-4 py-2 rounded border-2 focus:outline-blue-400"
                            type="date"
                            placeholder="Digite a data de fabricação"
                            onChange={(e) => setDataFabricacao(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Cor</label>
                        <Input className="px-4 py-2 rounded border-2 focus:outline-blue-400"
                            type="text"
                            placeholder="Digite a cor"
                            onChange={(e) => setCor(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Preço</label>
                        <Input className="px-4 py-2 rounded border-2 focus:outline-blue-400"
                            type="number"
                            placeholder="Digite o preço"
                            onChange={(e) => setPreco(Number(e.target.value))}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Quilometragem</label>
                        <Input className="px-4 py-2 rounded border-2 focus:outline-blue-400"
                            type="number"
                            placeholder="Digite a quilometragem"
                            onChange={(e) => setQuilometragem(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="px-83 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Salvar
                    </button>

                </div>
            </div>
        </form >
    )
}