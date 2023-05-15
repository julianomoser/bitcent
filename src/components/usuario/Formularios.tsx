import useFormulario from "@/data/hooks/useFormulario";
import MiniFormulario from "../template/MiniFormulario";
import Usuario from "@/logic/core/usuario/Usuario";
import { TextInput } from "@mantine/core";

import { useContext, useEffect } from "react"; 

import usuario from "@/data/constants/usuarioFalso";
import Texto from "@/logic/utils/Texto";
import Telefone from "@/logic/utils/Telefone";
import Cpf from "@/logic/utils/Cpf";

export default function Formularios() {

    const { dados, alterarAtributo} = useFormulario<Usuario>(usuario)
    
    return (
        <div className="flex flex-col gap-5 mt-7">
            <MiniFormulario
                titulo="Seu Nome"
                descricao="Como você gostaria de ser chamado?"
                msgRodape="O nome deve possuir entre 3 e 80 caracteres, mais que isso já é um texto!"
                podeSalvar={Texto.entre(dados.nome, 3, 80)}
                salvar={() => {}}
            >
                <TextInput
                    value={dados.nome}
                    onChange={alterarAtributo('nome')}
                />
            </MiniFormulario>
            <MiniFormulario
                titulo="CPF"
                descricao="Seu CPF é usado internamente pelo sistema."
                msgRodape="Pode relaxar, daqui ele não sai!"
                podeSalvar={true}
                salvar={() => {}}
            >
                <TextInput
                    value={Cpf.formatar(dados.cpf ?? '')}
                    onChange={alterarAtributo('cpf', Cpf.desformatar)}
                />
            </MiniFormulario>
            <MiniFormulario
                titulo="Telefone"
                descricao="Usado para notificações importantes sobre a sua conta."
                msgRodape="Se receber ligação a cobrar, não foi a gente!"
                podeSalvar={true}
                salvar={() => {}}
            >
                <TextInput
                    value={Telefone.formatar(dados.telefone ?? '')}
                    onChange={alterarAtributo('telefone', Telefone.desformatar)}
                />
            </MiniFormulario>
        </div>
    )
}