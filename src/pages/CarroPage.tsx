import axios from "axios";
import { useEffect, useState } from "react"
import { FormCarro } from "../components/FormCarro";
import type { Carro } from "../interfaces/Carro";

export const CarroPage = () => {

    const [carros, setCarros] = useState<Carro[]>([]);

    const [marca, setMarca] = useState<string>('');
    const [modelo, setModelo] = useState<string>('');
    const [cor, setCor] = useState<string>('');
    const [placa, setPlaca] = useState<string>('');
    const [preco, setPreco] = useState<number>(0);
    const [quilometragem, setQuilometragem] = useState<number>(0);
    const [dataFabricacao, setDataFabricacao] = useState<string>('');

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        try {
            axios.get(API_URL + '/carros')
                .then(res => {
                    setCarros(res.data);
                    console.log(res.data);
                })
        } catch (error) {
            alert(error);
        }

    }, [])

    return (
        <div className="flex flex-col items-center bg-blue-300 w-full h-full">
            <h1 className="text-4xl font-bold">Carros</h1>
            <h5 className="m-4 text-2xl">Seja bem vindo, aqui você verá todas as informações sobre nossos carros.</h5>

            <FormCarro
                marca={marca}
                setMarca={setMarca}
                modelo={modelo}
                setModelo={setModelo}
                cor={cor}
                setCor={setCor}
                placa={placa}
                setPlaca={setPlaca}
                preco={preco}
                setPreco={setPreco}
                quilometragem={quilometragem}
                setQuilometragem={setQuilometragem}
                dataFabricacao={dataFabricacao}
                setDataFabricacao={setDataFabricacao}
            />

            <div className="m-9">
                <table className="bg-white rounded-2xl">
                    <thead>
                        <tr>
                            <th className="p-2">Marca</th>
                            <th className="p-2">Modelo</th>
                            <th className="p-2">Cor</th>
                            <th className="p-2">Placa</th>
                            <th className="p-2">Preço</th>
                            <th className="p-2">Quilometragem</th>
                            <th className="p-2">Data de Fabricação</th>
                            <th className="p-2">Status Carro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carros.map((carro) => (
                            <tr key={carro.id} className="text-center">
                                <td className="p-2">{carro.marca}</td>
                                <td className="p-2">{carro.modelo}</td>
                                <td className="p-2">{carro.cor}</td>
                                <td className="p-2">{carro.placa}</td>
                                <td className="p-2">{carro.preco}</td>
                                <td className="p-2">{carro.quilometragem}</td>
                                <td className="p-2">{carro.dataFabricacao}</td>
                                <td className="p-2">{carro.statusCarro}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}