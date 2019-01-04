import { Author } from "./author";

/**
 * @name Livre
 * @desc Définition des attributs d'un livre
 * @author Aélion
 * @package models
 * @version 1.0.0
 */

export class Livre {
    /**
     * @var string
     * N° ISBN
     */
    public isbn: string;
    /**
     * @var string
     * Titre du livre
     */
    public titre: string;
    /**
     * @var string
     * Auteur du livre
     */
    public author: Author;

    public constructor(){
        console.log('Livre est en vie');
    }
    /**
    * Surcharge de la methode toString() générale
    */
    public toString(tit=true, n=false,p=false): string {
        var ret:string;
        ret='Livre: '+this.titre;
        if(n){
            ret+= ', Auteur Nom: ' + this.author.nom;
        }
       
        if(p){
            ret+=', Auteur prénom: '+this.author.prenom;
        }
        return ret;
    }


} 
