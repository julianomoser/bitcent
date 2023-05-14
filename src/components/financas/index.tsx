import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Transacao from "@/logic/core/financas/Transacao";
import { useState } from "react";
import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import Lista from "./Lista";

export default function Financas() {

    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
                <Lista transacoes={transacoes}/>
            </Conteudo>
        </Pagina>
    )
}