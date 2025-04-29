const repositorio = require('./produto_repository');

beforeEach(() => {
    // Resetando o repositório antes de cada teste
    while (repositorio.listar().length) {
        repositorio.deletar(repositorio.listar()[0].id);
    }
});

describe('CRUD de Produtos', () => {
    
    // Inserir
    test('Deve inserir um produto com sucesso', () => {
        const produto = { nome: 'Teclado', categoria: 'Periféricos', preco: 120 };
        const inserido = repositorio.inserir(produto);
        expect(inserido).toHaveProperty('id');
        expect(inserido.nome).toBe('Teclado');
    });

    test('Não deve inserir produto sem nome', () => {
        const produto = { categoria: 'Periféricos', preco: 100 };
        const inserido = repositorio.inserir(produto);
        expect(inserido).toBeUndefined();
    });

    // Listar
    test('Deve listar todos os produtos', () => {
        repositorio.inserir({ nome: 'Mouse', categoria: 'Periféricos', preco: 80 });
        const lista = repositorio.listar();
        expect(lista.length).toBeGreaterThan(0);
    });

    test('Deve retornar lista vazia quando não há produtos', () => {
        const lista = repositorio.listar();
        expect(lista).toEqual([]);
    });

    // Buscar por ID
    test('Deve encontrar um produto por ID', () => {
        const produto = repositorio.inserir({ nome: 'Monitor', categoria: 'Vídeo', preco: 800 });
        const encontrado = repositorio.buscarPorId(produto.id);
        expect(encontrado.nome).toBe('Monitor');
    });

    test('Deve retornar undefined se ID não existir', () => {
        const encontrado = repositorio.buscarPorId(9999);
        expect(encontrado).toBeUndefined();
    });

    
    // Atualizar
    test('Deve atualizar um produto existente', () => {
        const produto = repositorio.inserir({ nome: 'Notebook', categoria: 'Informática', preco: 3000 });
        const atualizado = repositorio.atualizar(produto.id, { nome: 'Notebook Gamer', categoria: 'Informática', preco: 5000 });
        expect(atualizado).toBeDefined();
        expect(atualizado.nome).toBe('Notebook Gamer');
        expect(atualizado.id).toBe(produto.id);
    });

    test('Não deve atualizar se os dados forem inválidos', () => {
        const produto = repositorio.inserir({ nome: 'Cadeira', categoria: 'Móveis', preco: 450 });
        const atualizado = repositorio.atualizar(produto.id, { categoria: 'Móveis', preco: 450 });
        expect(atualizado).toBeUndefined();
    });

    // Deletar
    test('Deve deletar um produto existente', () => {
        const produto = repositorio.inserir({ nome: 'Impressora', categoria: 'Periféricos', preco: 600 });
        const deletado = repositorio.deletar(produto.id);
        expect(deletado.nome).toBe('Impressora');
        expect(repositorio.buscarPorId(produto.id)).toBeUndefined();
    });

    test('Não deve deletar se ID não existir', () => {
        const deletado = repositorio.deletar(8888);
        expect(deletado).toBeUndefined();
    });

    // Pesquisar por Categoria
    test('Deve retornar produtos pela categoria', () => {
        repositorio.inserir({ nome: 'Webcam', categoria: 'Periféricos', preco: 200 });
        const resultado = repositorio.pesquisarPorCategoria('Periféricos');
        expect(resultado.length).toBeGreaterThan(0);
        expect(resultado[0].categoria).toBe('Periféricos');
    });

    test('Deve retornar array vazio para categoria inexistente', () => {
        const resultado = repositorio.pesquisarPorCategoria('Alimentos');
        expect(resultado).toEqual([]);
    });

    // Pesquisar por Nome
    test('Deve retornar produtos com nome similar', () => {
        repositorio.inserir({ nome: 'HD Externo', categoria: 'Armazenamento', preco: 300 });
        const resultado = repositorio.pesquisarPorNomeLike('hd');
        expect(resultado.length).toBeGreaterThan(0);
        expect(resultado[0].nome).toContain('HD');
    });

    test('Deve retornar array vazio se nome não bater', () => {
        const resultado = repositorio.pesquisarPorNomeLike('Geladeira');
        expect(resultado).toEqual([]);
    });

});
