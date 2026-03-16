// // Primeiro precisamos criar o app express 
// const express = require("express")
// const app = express()

// app.use(express.json())
// //permitir a gente trabalhar com json na requisição
// const filmes = [
//     {
//         
//     },
//     {
//         
//     }
// ]
// const series = [
//     {
//         
//     }
// ]


// // vamos criar a API
// // get para retornar 
// // res resposta

// app.get("/filmes", function(req, res) {
//     const genre = req.query.genre

//     // se nao passar query param, retorna todos
//     // o ponto de exclamação inverte o valor 
//     // se o nome não tiver valor ele é falso por conta do sinal de exclamação ele vira verdadeiro e executa o que esta no if   
//     if(!genre){
//         return res.json(filmes)
//     }
//     const filmesFiltrado = filmes.filter (a => a.genre.toLowerCase().includes(genre.toLowerCase())
// )

//     return res.json(filmesFiltrado)

// })

// app.get("/series", (req, res) => {
//     return res.json(series)
// // res resposta
// })


// //Segundo passo, colocar o servidor para rodar 
// app.listen(3000, () => {
//     console.log("Servidor rodadndo em http://localhost:3000")

// })

// primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()

//premitir aceitar json na requisição
app.use(express.json())

const filmes = [
    {
        id: 1,
        title: "Oppenheimeir",
        description: "Oppenheimer (2023), dirigido por Christopher Nolan, é um drama histórico que narra a vida de J. Robert Oppenheimer (Cillian Murphy), físico líder do Projeto Manhattan durante a Segunda Guerra Mundial. O filme foca no desenvolvimento da primeira bomba atômica, o dilema moral de seu criador e o impacto devastador da arma na história.",
        image: "https://ingresso-a.akamaihd.net/prd/img/movie/oppenheimer/fed7c21c-3ff4-49f3-95c6-5ce58c1e1432.webp",
        genre: "Drama",
        releaseYear: 2023
    },
    {
        id: 2,
        title: "Até que a Sorte Nos Separe",
        description: "é uma comédia brasileira onde Tino (Leandro Hassum) ganha na loteria e gasta tudo com ostentação em dez anos. Falido e com a esposa grávida, ele finge que continua rico para esconder a ruína financeira, contando com a ajuda atrapalhada do vizinho Amauri",
        image: "https://br.web.img3.acsta.net/medias/nmedia/18/92/68/83/20220704.jpg",
        genre: "comedia",
        releaseYear: 2012
    }
]

const series = [
    {
        id: 1,
        title: "The vampire diares",
        description: "A trama se passa na cidade fictícia de Mystic Falls, na Virgínia, repleta de segredos sobrenaturais, incluindo bruxas, lobisomens e vampiros",
        image: "https://m.media-amazon.com/images/I/81iRry5N2lL._AC_UF894,1000_QL80_.jpg",
        genre: "Drama sobrenatural, Romance, Terror jovem",
        releaseYear: 2009
    }
]

//filmes-----------------------------------------------------

//retorna todos os filmes
app.get("/filmes", (req, res) => {
    return res.json(filmes)
})

//filtra seires por generos
app.get("/filmes", function (req, res) {
    const genre = req.query.genre

    // Se não passar query param, retorna todos
    // "!" se algo for falso, realiza a função do if
    if (!genre) {
        return res.json(filmes)
    }

    const filmesFiltrados = filmes.filter(a => a.genre.toLowerCase().includes(genre.toLowerCase())
    )

    res.json(filmesFiltrados)
})

//cria um novo filme com base nas informações
app.post("/filmes", function (req, res) {
    const titleDaWeb = req.body.title
    const genreDaWeb = req.body.genre
    const imageDaWeb = req.body.image
    const releaseYearDaWeb = req.body.releaseYear
    const descriptionDaWeb = req.body.description


    if (!titleDaWeb || ! genreDaWeb || !imageDaWeb || !releaseYearDaWeb || !descriptionDaWeb) {
        return res.status(400).json({ erro: "Título, gênero, URL, ano de lançamento ou descrição inválidos" })
    }

    if (titleDaWeb.lenght <= 1) {
        return res.status(400).json({ erro: "Título deve ter mais que 1 caracter" })
    }

    // criando objeto novo com as informações que vieram do cliente
    const novoFilme = {
        id: 2,
        title: titleDaWeb,
        genre: genreDaWeb,
        image: imageDaWeb,
        releaseYear: releaseYearDaWeb,
        description: descriptionDaWeb
    }
    //adiciona o novo filme no final da lista
    filmes.push(novoFilme)
    res.status(201).send()
})

//buscar filme por id
app.get("/filmes/:id", function (req, res) {
    const id = parseInt(req.params.id) //transforma a requisisão (id) em número

    const filme = filmes.find(a => a.id == id)

    //if de validação verdadeiro ou falso
    //se a variável for nula é igual falso
    //se tiver alguma coisa é verdadeiro
    if (filme) {
        return res.json(filme)
    } else {
        res.status(404).json("Filme não encontrado")
    }

})

//series----------------------------------------------

//retorna todas as series
//filtra series por genero
app.get("/series", function (req, res) {
    const genre = req.query.genre

    // Se não passar query param, retorna todos
    // "!" se algo for falso, realiza a função do if
    if (!genre) {
        return res.json(series)
    }

    if (titleDoNavegador.lenght <= 1) {
        return res.status(400).json({ erro: "Título deve ter mais que 1 caracter" })
    }

    const seriesFiltrados = series.filter(a => a.genre.toLowerCase().includes(genre.toLowerCase())
    )

    res.json(seriesFiltrados)
})

//cria uma nova serie com base nas informações
app.post("/series", function (req, res) {
    const titleDaWeb = req.body.title
    const genreDaWeb = req.body.genre
    const imageDaWeb = req.body.image
    const releaseYearDaWeb = req.body.releaseYear
    const descriptionDaWeb = req.body.description


    if (!titleDaWeb || !genreDaWeb || !imageDaWeb || !releaseYearDaWeb || !descriptionDaWeb) {
        return res.status(400).json({ erro: "Título, gênero, URL, ano de lançamento ou descrição inválidos" })
    }

    // criando objeto novo com as informações que vieram do cliente
    const novaSerie = {
        id: 2,
        title: titleDaWeb,
        genre: genreDaWeb,
        image: imageDaWeb,
        releaseYear: releaseYearDaWeb,
        description: descriptionDaWeb
    }
    //adiciona a nova serie no final da lista
    filmes.push(novaSerie)
    res.status(201).send()
})

//buscar serie por id
app.get("/series/:id", function (req, res) {
    const id = parseInt(req.params.id) //transforma a requisisão (id) em número

    const serie = series.find(a => a.id == id)

    //if de validação verdadeiro ou falso
    //se a variável for nula é igual falso
    //se tiver alguma coisa é verdadeiro
    if (serie) {
        return res.json(serie)
    } else {
        res.status(404).json("Serie não encontrada")
    }

})

//------------------------------------------------------------
//segundo passo, colocar o servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em https://localhost:3000")
})