import transacoesFalsas from "@/data/constants/transacoesFalsas";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import useTransacao from "@/data/hooks/useTransacao";
import servicos from "@/logic/core";
import Id from "@/logic/core/comum/Id";
 import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useContext, useState } from "react";
import Cabecalho from "../template/Cabecalho";
import CampoMesAno from "../template/CampoMesAno";
import Conteudo from "../template/Conteudo";
import NaoEncontrado from "../template/NaoEncontrado";
import Pagina from "../template/Pagina";
import Formulario from "./Formulario";
import Lista from "./Lista";

export default function Financas() {

    const {
        data, alterarData, 
        transacoes, transacao, selecionar, salvar, excluir
    } = useTransacao ()

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
            <div className="flex justify-between">
            <CampoMesAno
                    data={data}
                    dataMudou={alterarData}
                />
            <Button
                    className="bg-blue-500"
                    leftIcon={<IconPlus />}
                    onClick={() => selecionar(transacaoVazia)}
                >Nova transação</Button>

            </div>
                
                {transacao ? (
                    <Formulario 
                        transacao={transacao} 
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => selecionar(null)}
                    />
                ) : transacoes.length ? (
                <Lista 
                    transacoes={transacoes} 
                    selecionarTransacao={selecionar} 
                />
                ): (<NaoEncontrado>
                        Nenhuma transação encontrada
                    </NaoEncontrado>
                
                )}
            </Conteudo>
        </Pagina>
    )
}