# Module-1--project
## Prefixes indicate the area of work done by each participant:
- alx- : Olexandr Kubryk
- andr- : Andrey Askryotkov
- dim- : Dmytro Volunchyc 
- kos- : Kostiantyn Melnyk
- val- : Valeriia Hudkova
- yul- : Yuliya Sushko
- sol- : Solodkui Arthur
- pol- : Polina Kucher



***Для запуска компиляции страниц***
pug -w src/pages/page_name.pug -o pages

***Для работы с папкой scss/pages запускаем следующую команду***
sass --watch scss/pages/_<file-name>.scss styles/<file-name>.css 

__`Обратите внимание`, в scss/pages обязательно перед названием файла должно быть нижнее подчеркивание__

***Для использования социальных иконок***
_Facebook_
svg.icon.icon-facebook
  use(xlink:href='#icon-facebook')
_Twitter_
svg.icon.icon-twitter
  use(xlink:href='#icon-twitter')
_Instagram_
svg.icon.icon-twitter
  use(xlink:href='#icon-instagram')
_LinkedIn_
svg.icon.icon-linked-in
  use(xlink:href='#icon-linked-in')

`Важно`, что бы use был вложен в svg, соблюдать табуляцию