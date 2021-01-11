# Projet Movie-app

---

<a name="general info"></a>
<a name="technologies"></a>
<a name="installation"></a>
<a name="side information"></a>

### General info
![Image text](src/environments/1604849392225gwh.jpg)

Projet réalisé suite au cours "Développez des applications Web avec Angular" suivi chez OpenClassrooms (https://openclassrooms.com)
L'application nécessite l'authentification. J'ai changé un peu le sujet :)
* Quelques mots sur l'appli :
   * l'application nécessite l'authentification.
  * les films peuvent être consultès sous forme d'une liste complète, puis individuellement.
  * les films peuvent être ajoutés ou supprimés.
  * il y a un modèle pour les films comportant simplement le titre, le réalisateur, le scénario, les acteurs (la photo et le résumé du film sont facultatives).
  * backend avec le service Google: Firebase. Ce service permet la création d'un backend complet sans codage, et node comprend de nombreux services, dont l'authentification,    une base de données NoSQL et le stockage de fichiers.Les données du formulaire se chargent bien dans la base de données sur Firebase.
  
###  Technologies
* Système d'exploitation: Linux Mint
* NodeJs v14.15.4
* Angular 10
* Firebase 8
###  Installation
* git clone url
* cd../path/to/the/file
* npm install
* npm start
* http://localhost:4200/movies

### Side information

#### Creation de composants:
* _ng g c auth/signup_

* _ng g c auth/signin_

* _ng g c movie-list_

* _ng g c movie-list/single-movie_

* _ng g c movie-list/movie-form_

* _ng g c header_
* _ng g s services/auth_
* _ng g s services/movies_
* _ng g s services/auth-guard_

####  Enjoy! :)
