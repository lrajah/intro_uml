import{ Livre} from "./livre"
import{ Utilisateurs } from "./users"
import { htmlInterface } from "./../interface/htmlInterface";
import { Emprunteurs } from "./emprunteurs";
export class Loueur extends Utilisateurs{
    private livres: Map<number, Livre>;
    public constructor(){
        super();
        this.livres=new Map<number,Livre>();
    }
    public add(livre: Livre): Loueur {
        const indice: number =this.livres.size+1;
        this.livres.set(indice,livre);
        return this;
    }
    public remove(indice: number): Loueur{
        this.livres.delete(indice);
        return this;
    }
    public find(loueur:Loueur, livre: Livre):number{
        var i: number;
        var j: number=-1;
        for(let i of Array.from( loueur.livres.keys()) ) {
            //console.log(i);
            if(loueur.livres.get(i)==livre){
                j=i;
                
            }
        }
      //  console.log(j);
        return j;
    }
   
}