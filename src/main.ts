/**
 * @name main
 * @description Point d'entrée dans l'application
 * @author LKulen
 * @version 1.0.0
 */
import{ Livre } from './models/livre';



import{ Author } from './models/author';
import { Loueur } from './models/loueurs';
import { Emprunteurs } from './models/emprunteurs';

//Créer un Auteur

const isaacAsimov: Author = new Author();
isaacAsimov.nom='Asimov';
isaacAsimov.prenom='Isaac';
isaacAsimov.setDateNaissance('1920-01-12');
isaacAsimov.biographie='Ecrivain visionnaire du 20ème siècle';

const hugo: Author = new Author();
hugo.nom='Hugo';
hugo.prenom='Victor';
hugo.setDateNaissance('1812-01-12');
hugo.biographie='Ecrivain visionnaire du 19ème siècle';

const fondation: Livre = new Livre();
fondation.author= isaacAsimov;
fondation.titre='Fondation';
fondation.isbn='55641212212122';
console.log(fondation.toString(true, true, true));
//Créer un objet à partir de la classe
const lesMiserables: Livre = new Livre();
lesMiserables.author=hugo;
lesMiserables.isbn='00002222599545';
lesMiserables.titre='les Misérables';
fondation.asHTML();


//Créer un user loueurs

const jean:Loueur=new Loueur();
jean.name('Jean');
jean.pren('Jack');
jean.num('021122554');
//jean.asHTML();
jean.add(fondation);
jean.add(lesMiserables);

//Créer un user emprunteurs

const arthur:Emprunteurs=new Emprunteurs();
arthur.name('Arthur');
arthur.pren('Dala');
arthur.num('021255254');
//arthur.asHTML();
arthur.emprunt(fondation,jean);
arthur.emprunt(lesMiserables,jean);

const colin:Emprunteurs=new Emprunteurs();
colin.name('Colin');
colin.pren('Bala');
colin.num('021285254');
//arthur.asHTML();
colin.emprunt(fondation,jean);
