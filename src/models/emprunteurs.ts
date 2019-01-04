/**
 * @name Emprunteurs
 * @desc Services fournis par l'emprunteur
 * @author LKulen
 * @package models
 * @version 1.0.0
 */
import { htmlInterface } from "./../interface/htmlInterface";
import{ Livre } from "./livre"
import{ Utilisateurs } from "./users"
export class Emprunteurs extends Utilisateurs{
    private livres: Map<number, Livre>;
    public constructor(){
        super();
        this.livres=new Map<number,Livre>();
    }
    public add(livre: Livre): Emprunteurs {
        const indice: number =this.livres.size+1;
        this.livres.set(indice,livre);
        return this;
    }
    public remove(indice: number): Emprunteurs{
        this.livres.delete(indice);
        return this;
    }
}