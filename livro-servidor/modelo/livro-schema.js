const banco = require("./conexao");
const LivroSchema = new banco.Schema({
  
    titulo: {
        type: String,
        required: true
    },
    codEditora: {
        type: Number,
        required: true
    },
    resumo: {
        type: String,
        required: true
    },
    autores: {
        type: [String],
        required: true
    }
});

const Livro = banco.model("livros", LivroSchema);

module.exports = Livro;