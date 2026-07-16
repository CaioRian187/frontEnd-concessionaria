import axios from "axios";
import { useEffect, useState } from "react"
import { FormCarro } from "../components/FormCarro";
import type { Carro } from "../interfaces/Carro";
import { BtnVoltar } from "../components/BtnVoltar";

export const CarroPage = () => {

    const [carros, setCarros] = useState<Carro[]>([]);

    const [isEmEdicao, setIsEmEdicao] = useState(false);
    const [idEmEdicao, setIdEmEdicao] = useState<string | null>('');

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


    const handleButtonEditar = (id: string) => {

        const carroParaEditar: Carro | undefined = carros.find((carro) => carro.id === id);

        if (carroParaEditar) {
            setIsEmEdicao(true);
            setIdEmEdicao(carroParaEditar.id || null);
            setMarca(carroParaEditar.marca);
            setModelo(carroParaEditar.modelo);
            setCor(carroParaEditar.cor);
            setPlaca(carroParaEditar.placa);
            setPreco(carroParaEditar.preco);
            setQuilometragem(carroParaEditar.quilometragem);
            setDataFabricacao(carroParaEditar.dataFabricacao);
        }
    }


    const handleButtonExcluir = (id: string) => {
        try {
            axios.delete(`${API_URL}/carros/${id}`)
                .then(() => {
                    alert('Carro excluido com sucesso!!!');
                    setCarros(carros.filter(carro => carro.id !== id));
                }).catch((error) => {
                    console.log("Erro ao excluir o carro: ", error);
                    alert("Erro ao excluir o carro!!!");
                })

        } catch (error) {
            alert(error);
        }
    }

    const limparForm = () => {
        setIsEmEdicao(false);
        setIdEmEdicao(null);
        setMarca('');
        setModelo('');
        setCor('');
        setPlaca('');
        setPreco(0);
        setQuilometragem(0);
        setDataFabricacao('');
    };

    const converterData = (data: string) => {
        const date = new Date(data);
        return date.toLocaleDateString('pt-BR');
    }

    return (
        <div className="flex flex-col items-center bg-blue-300 w-full h-full">
            <h1 className="text-4xl font-bold">Carros</h1>
            <BtnVoltar
                className="self-start ml-8 bg-blue-600 text-white px-3 py-1 rounded-md font-bold hover:bg-blue-700 transition"
                to="/"
            />
            <h5 className="m-4 text-2xl">Seja bem vindo, aqui você verá todas as informações sobre nossos carros.</h5>



            <FormCarro
                carros={carros}
                setCarros={setCarros}
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
                isEmEdicao={isEmEdicao}
                idEmEdicao={idEmEdicao}
                limparForm={limparForm}
            />

            <div className="m-9 w-full max-w-7xl overflow-x-auto px-4">
                <table className="bg-white rounded-2xl w-full shadow-md table-auto">
                    <thead>
                        <tr className="border-b border-gray-200 text-gray-700">
                            <th className="p-4 text-center">Marca</th>
                            <th className="p-4 text-center">Modelo</th>
                            <th className="p-4 text-center">Cor</th>
                            <th className="p-4 text-center">Placa</th>
                            <th className="p-4 text-center">Preço</th>
                            <th className="p-4 text-center">Quilometragem</th>
                            <th className="p-4 text-center">Data de Fabricação</th>
                            <th className="p-4 text-center">Status Carro</th>
                            <th className="p-4 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {carros.map((carro) => (
                            <tr key={carro.id} className="text-center hover:bg-gray-50 transition duration-150">
                                <td className="p-4 text-gray-800">{carro.marca}</td>
                                <td className="p-4 text-gray-800">{carro.modelo}</td>
                                <td className="p-4 text-gray-800">{carro.cor}</td>
                                <td className="p-4 text-gray-800">{carro.placa}</td>

                                <td className="p-4 text-gray-800 font-semibold">
                                    {carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </td>

                                <td className="p-4 text-gray-800">
                                    {carro.quilometragem.toLocaleString('pt-BR')} Km
                                </td>

                                <td className="p-4 text-gray-800">{converterData(carro.dataFabricacao)}</td>
                                <td className="p-4 text-gray-800">{carro.statusCarro}</td>
                                <td className="p-4">

                                    <div className="flex items-center justify-center gap-2">

                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded transition duration-200"
                                            onClick={() => carro.id && handleButtonEditar(carro.id)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition duration-200"
                                            onClick={() => carro.id && handleButtonExcluir(carro.id)}
                                        >
                                            Excluir
                                        </button>

                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}