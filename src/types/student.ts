export type Student = {
    id: number;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string,
    number: number;
    street: string;
    neighbourhood: string;
    zipCode: string;
    image: string;
    isActive?: boolean;
    password?: string;
}

export type UrlParamsStudent = {
    studentId: string
}

export type CampoStudent = {
    name: string;
    label: string;
    type: string;
}

export type FormStudent = {
    linha1: CampoStudent[]
}

export type StatusLineStudent = {
    linha1: string;
};