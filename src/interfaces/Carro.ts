export interface Carro {
    id?: string,
    marca: string,
    modelo: string,
    cor: string,
    placa: string,
    preco: number,
    quilometragem: number,
    dataFabricacao: string,
    statusCarro?: 'DISPONIVEL' | 'VENDIDO'
}