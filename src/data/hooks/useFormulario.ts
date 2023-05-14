import  Transacao  from '@/logic/core/financas/Transacao';
import { useState } from "react"

export default function useFormulario(dadosInicial: Transacao) {
    const [dados, setDados] = useState(dadosInicial)

    function alterarAtributo(atributo: string, fn?: Function) {
        return (valorOuEvento: any) => {
            const v = valorOuEvento?.target?.value ?? valorOuEvento
            setDados ({... dados, [atributo]: fn?.(v) ?? v })
            }
    }


    return {
        dados,
        alterarDados: setDados,
        alterarAtributo
    }
}