var db = openDatabase("MeuBanco", "2.0", "Meu_Banco", 4048);
db.transaction(function(criar) {
    criar.executeSql("CREATE TABLE meu_bd (nome TEXT, telefone TEXT)");
});

function salvar() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    db.transaction(function(armazenar) {
        armazenar.executeSql("INSERT INTO meu_bd (nome,telefone) VALUES(?,?)", [nome, telefone]);
    });
    window.location.reload();
}