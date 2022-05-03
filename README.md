# Site-Noticias

Site realizado para estudo de NodeJS e suas ferramentas!


O site tem duas funções principais:
1º Expor notícias para leitores.

2º Facilitar o trabalho de jornalistas com a rota administrativa '/cadastro', onde notícias podem ser inseridas diretamente no banco de dados, fazendo com que as outras
abas se atualizem automáticamente

![image](https://user-images.githubusercontent.com/101595139/166470058-506b7323-1146-4f11-ab67-ab705874ae7a.png)



As noticias são visualizadas de duas formas:
1º Painel geral da home, onde as 5º últimas notícias são exibidas com um resumo.
2º  Notícia específica, contendo o real conteúdo da notícia.


Para carregar a notícia clicada foi utilizado lógica para resgatar o id do banco de dados no click e posteriormente carregar os dados com o mesmo ID clicado

![image](https://user-images.githubusercontent.com/101595139/166471185-80f9175b-d4f3-456d-aecf-924372fd356b.png)



As notícias também podem ser visualizadas em listagem, da mais atual até a mais antiga no caminho '/noticias' ou clicando em 'ver mais' na página home.

![image](https://user-images.githubusercontent.com/101595139/166471421-e3de2aa9-37a4-4ada-ba4d-1e20d18b5e9e.png)
