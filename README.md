# Particeep---Test

## Description

Ce projet est une application React permettant de gérer et afficher une liste de films avec des fonctionnalités telles que des filtres dynamiques, des boutons d'action, et une pagination. Les films sont affichés dans des cartes avec des boutons pour les actions de like/dislike et de suppression. L'interface est responsive et permet d'ajuster le nombre d'éléments par page.
Fonctionnalités

    Affichage des Films :
        Les films sont listés dans des cartes.
        Chaque carte affiche le titre en gras, la catégorie, et une jauge indiquant le ratio likes/dislikes.
        Les cartes sont côte à côte et s'ajustent pour passer à la ligne suivante lorsque la fenêtre se réduit.

    Actions sur les Films :
        Bouton de Suppression : Permet de supprimer une carte de film.
        Bouton Toggle Like/Dislike : Permet d'alterner entre like et dislike.

    Filtrage :
        Filtre par catégorie dynamique (multiselect).
        Les catégories sont récupérées dynamiquement depuis les films.
        Les catégories non utilisées sont supprimées automatiquement des filtres lorsqu'aucun film de cette catégorie n'est présent.

    Pagination :
        Boutons Précédent/Suivant pour naviguer entre les pages.
        Choix du nombre d'éléments affichés par page (4, 8 ou 12).

## Prérequis

    Node.js (v14 ou supérieur recommandé)
    npm (v6 ou supérieur recommandé)

## Installation

Clonez le dépôt :

    git clone <URL_DU_DEPOT>

Naviguez dans le répertoire du projet :

    cd <NOM_DU_REPERTOIRE>

Installez les dépendances :

    npm install

## Lancer l'application

Pour démarrer l'application en mode développement, utilisez la commande suivante :

npm start

Cela ouvrira l'application dans votre navigateur par défaut à l'adresse http://localhost:3000.

## Structure du Projet

    src/ : Contient les fichiers sources de l'application.
        components/ : Contient les composants React.
            MovieCard.js : Composant pour afficher une carte de film.
            MoviesList.js : Composant pour afficher la liste des films.
        App.js : Composant principal de l'application.
        index.js : Point d'entrée de l'application.

    public/ : Contient les fichiers publics, y compris index.html.

    package.json : Dépendances et scripts du projet.

