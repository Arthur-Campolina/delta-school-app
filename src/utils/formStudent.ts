import { FormStudent } from "types/student"

export const camposFormStudent: FormStudent = {
        linha1: [
                { label: "Nome", name: "name", type: "text" },
                { label: "Sobrenome", name: "surname", type: "text" },
                { label: "E-mail", name: "email", type: "text" },
                { label: "Telefone", name: "phoneNumber", type: "text" },
                { label: "Número da Rua", name: "number", type: "text" },
                { label: "Rua", name: "street", type: "text" },
                { label: "Bairro", name: "neighbourhood", type: "text" },
                { label: "CEP", name: "zipCode", type: "text" },
        ]
}
