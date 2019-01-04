/**
 * @name Auteur
 * @desc Définition des attributs d'un auteur
 * @author Aélion
 * @package models
 * @version 1.0.0
 */

export class Author {
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

} 