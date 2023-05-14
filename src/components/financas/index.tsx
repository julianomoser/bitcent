import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Id from "@/logic/core/comum/Id";
import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import NaoEncontrado from "../template/NaoEncontrado";
import Pagina from "../template/Pagina";
import Formulario from "./Formulario";
import Lista from "./Lista";

export default function Financas() {

    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
    const [transacao, setTransacao] = useState<Transacao | null>(null)

    function salvar(transacao: Transacao) {
        const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id)
        setTransacoes([...outrasTransacoes, {
            ...transacao,
            id: transacao. id ?? Id.novo()
        }])
        setTransacao(null)
    }

    function excluir(transacao: Transacao) {
        const outrasTransacoes = transacoes.filter(t => t.id !== transacao.id)
        setTransacoes(outrasTransacoes)
        setTransacao(null)
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <Button
                    className="bg-blue-500"
                    leftIcon={<IconPlus />}
                    onClick={() => setTransacao(transacaoVazia)}
                >Nova transação</Button>
                {transacao ? (
                    <Formulario 
                        transacao={transacao} 
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => setTransacao(null)}
                    />
                ) : transacoes.length ? (
                <Lista 
                    transacoes={transacoes} 
                    selecionarTransacao={setTransacao} 
                />
                ): (<NaoEncontrado>
                        Nenhuma transação encontrada
                    </NaoEncontrado>
                
                )}
            </Conteudo>
        </Pagina>
    )
}