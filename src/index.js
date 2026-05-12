const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

const DATA_FOLDER = path.join(__dirname, '..', 'data');
const DATA_PATH = path.join(DATA_FOLDER, 'financas.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Inicialização segura do Banco de Dados
const initDB = () => {
    if (!fs.existsSync(DATA_FOLDER)) fs.mkdirSync(DATA_FOLDER);
    if (!fs.existsSync(DATA_PATH)) {
        const initial = { 
            usuario: "Usuário", 
            limiteMensal: 2000, 
            transacoes: [] 
        };
        fs.writeFileSync(DATA_PATH, JSON.stringify(initial, null, 2));
    }
};

const readData = () => JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
const saveData = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

// Rotas
app.get('/api/dados', (req, res) => {
    res.json(readData());
});

app.post('/api/config', (req, res) => {
    const { limiteMensal } = req.body;
    const data = readData();
    data.limiteMensal = parseFloat(limiteMensal);
    saveData(data);
    res.json({ message: "Configuração atualizada" });
});

app.post('/api/transacoes', (req, res) => {
    const { desc, valor, cat, tipo, fixo } = req.body;
    const data = readData();
    
    const valorAjustado = tipo === 'saida' ? -Math.abs(valor) : Math.abs(valor);
    
    const novaTransacao = {
        id: uuidv4(),
        data: new Date().toISOString(), // Usamos ISO para facilitar filtros de data
        desc,
        valor: valorAjustado,
        cat,
        fixo: !!fixo
    };

    data.transacoes.unshift(novaTransacao);
    saveData(data);
    res.status(201).json(novaTransacao);
});

app.delete('/api/transacoes/:id', (req, res) => {
    const data = readData();
    data.transacoes = data.transacoes.filter(t => t.id !== req.params.id);
    saveData(data);
    res.json({ message: "Removido" });
});

initDB();
app.listen(PORT, () => console.log(`Planejador Sábio: http://localhost:${PORT}`));