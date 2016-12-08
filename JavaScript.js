//Un jour *un singe* *dyslexique* ayant perdu *la vue* qui s'appel *Jean-Moris*.
//Cours en groupe
var Animal;
var Maladie;
var Sens;
var Nom;
var Question = 4;

alert ('Bonjour, nous allons vous poser une série de quatre questions.');
Nom = prompt ('Il te reste '+Question+ 'questions. Comment t\'appelles tu ?');
Question -= 1;
Maladie = prompt ('Il te reste '+Question+ 'questions. Quel maladie te fais le plus peur ?');
Question -= 1;
Animal = prompt ('Il te reste '+Question+ 'questions. Quel est ton animal préféré ?');
Question -= 1;
Sens = prompt ('Il te reste '+Question+ 'question. Peux tu me citer un des cinq sens ?');
Question -= 1;

alert ('Un jour un/une '+Animal+' atteint '+Maladie+' ayant perdu le/la/l\' '+Sens+' qui s\'appelait '+Nom+'.' );