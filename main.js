const produtoRepository = require("./repository/produto_repository.js")

function main() {
    produtoRepository.inserir({nome:"Arroz", categoria:"Alimento", preco:4.7});
    produtoRepository.inserir({nome:"Suco de Laranja", categoria:"Bebida", preco:7.5});
    produtoRepository.inserir({nome:"Feijao", categoria:"Alimento", preco:6.7});
    produtoRepository.inserir({nome:"Coca-cola", categoria:"Bebida", preco:8.9});
    console.log(produtoRepository.listar());

    console.log("Produto [id=2]: ", produtoRepository.buscarPorId(2));

    console.log("Produtos da categoria Alimento", produtoRepository.pesquisarPorCategoria("Alimento"));

    console.log("Produtos que possuem a letra 'a'", produtoRepository.pesquisarPorNomeLike("a"));

    produtoRepository.atualizar(4, {nome:"Coca-cola", categoria:"Bebida", preco: 8.5, id:4})

    produtoRepository.deletar(7);

    console.log(produtoRepository.listar());
    
}

main();