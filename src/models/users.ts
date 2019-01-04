/**
 * @name Utilisateurs
 * @desc Définition abstraite des utilisateurs
 * @package models
 * @author LKulen
 * @version 1.0.0
 */
/**
 * Définit ou retourne le nom de l'utilisateur
 * @param optional nom: string ou null
 * @usage object.nom()=> retourne le nom de l'utilisateur, object.name('name') => affecte à la propriété nom
 */
 abstract class Utilisateurs{
     protected nom: string;
     protected prenom: string;
     protected numAd: string;
     public name(nom: string=null): Utilisateurs | string{
         if(nom===null){
             return this.nom;
         }
         this.nom=nom;
         return this;
     }
     public pren(prenom: string=null): Utilisateurs | string{
        if(prenom===null){
            return this.prenom;
        }
        this.prenom=prenom;
        return this;
    }

    public num(num: string=null): Utilisateurs | string{
        if(num===null){
            return this.numAd;
        }
        this.numAd=num;
        return this;
    }
 }