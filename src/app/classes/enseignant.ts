import { Classe } from './../classe';
export class Enseignant {
    enseignant_id:number;
    enseignant_fullname:string;
    adresse:string;
    email:string;
    telephone:string;
    class_enseignant:Classe[];
}
