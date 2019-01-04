/**
 * @name Auteur
 * @desc Définition des attributs d'un auteur
 * @author Aélion
 * @package models
 * @version 1.0.0
 */
import { htmlInterface } from "./../interface/htmlInterface";
export class Author implements htmlInterface {
    /**
     * @var string
     * Le nom de l'auteur
     */
    public nom: string;
    /**
     * @var string
     * le prénom de l'auteur
     */
    public prenom: string;
    /**
     * @var string
     * Le la date de naissance de l'auteur
     */
    private dateDeNaissance: Date;
    /**
     * @var string
     * La biographie de l'auteur
     */
    public biographie: string;

    public setDateNaissance(date: string):void {
        this.dateDeNaissance = new Date(date);
    }
    public getDateNaissance(): string {
        const month: number = this.dateDeNaissance.getMonth() + 1;
        const date: string = this.dateDeNaissance.getDate().toString() + '-' + 
            month.toString() + '-' +
            this.dateDeNaissance.getFullYear().toString();
        return date;
    }
    public asHTML():void{
        let content: string = '';
        content += '<p> Nom de l\'auteur: ' + this.nom + '</p>';
        content += '<p> Prénom de l\'auteur: ' + this.prenom + '</p>';
        content += '<p>Biographie de l\'auteur: ' + this.biographie + '</p>';
        const body = document.querySelector('body');
        body.innerHTML+=content;
    }

} 