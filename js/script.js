// EX 1
function sortVector() {

    let vector = document.getElementById('vectorInput').value.split(',').map(function(item) {
      return parseInt(item, 10);
    });

    document.getElementById('originalList01').textContent = vector.join(',');

    vector.sort(function(a, b) {
      return a - b;
    });

    document.getElementById('sortedList').textContent = vector.join(',');
}
  
  // EX 2
  function listEvenNumbersAndPositions() {

    const inputValues = document.getElementById('numberInput').value;
    const numbers = inputValues.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num) && num >= 1 && num <= 30);

    const evenNumbersList = numbers
      .filter(number => number % 2 === 0)
      .map(number => `Os num pares da lista são: ${number} e possuem o índice: ${numbers.indexOf(number)}`)
      .join('<br>');

    document.getElementById('evenList').innerHTML = evenNumbersList;
  }
  
  // EX 3
  function modifyElements() {

    let elements = [1.23, 48.11, 90.11, 8.5, 9.99, 1, 1.1, 67];
 
    document.getElementById('originalList02').textContent = `Lista de valores 1--> ${elements.join(', ')}`;

    elements[0] = 3;   
    elements[2] = 6;   
    elements[5] = 8;   
  
    document.getElementById('modifiedList').textContent = `Lista de valores 2--> ${elements.join(', ')}`;
  }
  
  // EX 4
  function ageOfEmpiresInventory() {
    const darkAge = {
        ouro: parseInt(document.getElementById('darkAgeOuro').value) || 0,
        prata: parseInt(document.getElementById('darkAgePrata').value) || 0,
        madeira: parseInt(document.getElementById('darkAgeMadeira').value) || 0,
        pedra: parseInt(document.getElementById('darkAgePedra').value) || 0
    };
    const castleAge = {
        ouro: parseInt(document.getElementById('castleAgeOuro').value) || 0,
        prata: parseInt(document.getElementById('castleAgePrata').value) || 0,
        madeira: parseInt(document.getElementById('castleAgeMadeira').value) || 0,
        pedra: parseInt(document.getElementById('castleAgePedra').value) || 0
    };

    function calculateTotal(inventory) {
        return Object.values(inventory).reduce((total, current) => total + current, 0);
    }

    let output = '<strong>Objetos do meu inventário - Idade das Trevas:</strong><br>';
    for (let item in darkAge) {
        output += `${item.charAt(0).toUpperCase() + item.slice(1)}--> ${darkAge[item]},sacas<br>`;
    }
    output += `<br>Na "Idade das Trevas" o status do meu inventário é:<br>`;
    output += `Total de: 4 tipos de itens com: ${calculateTotal(darkAge)} sacas<br><br>`;

    output += '<strong>Objetos do meu inventário - Idade dos Castelos:</strong><br>';
    for (let item in castleAge) {
        output += `${item.charAt(0).toUpperCase() + item.slice(1)}--> ${castleAge[item]},sacas<br>`;
    }
    output += `<br>Na "Idade dos Castelos" o status do meu inventário é:<br>`;
    output += `Total de: 4 tipos de itens com: ${calculateTotal(castleAge)} sacas<br>`;

    document.getElementById('ageOfEmpiresOutput').innerHTML = output;
}

  // EX 5
function manageCheeseMenu() {

    let cheeses = ['Mussarela', 'Minas', 'Parmesão', 'Prato', 'Gorgonzola'];

    let output = `<strong>Cardápio de Queijos:</strong> ${cheeses.join(', ')}<br>`;

    cheeses = cheeses.concat(['Mascarpone', 'Ricota', 'Provolone']);

    output += `<br><strong>Lista atualizada:</strong> ${cheeses.join(', ')}<br>`;

    cheeses.sort();

    output += `<br><strong>Lista atualizada em ordem alfabética:</strong> ${cheeses.join(', ')}<br>`;

    let correctIndex = cheeses.findIndex(cheese => cheese > 'Cottage');
    cheeses.splice(correctIndex, 0, 'Cottage');

    output += `<br><strong>Lista atualizada:</strong> ${cheeses.join(', ')}<br>`;

    document.getElementById('cheeseMenuOutput').innerHTML = output;
}

  // EX 6
function libraryCatalog() {

    const books = [
        { id: 1, categoria: 'Terror', titulo: 'It' },
        { id: 2, categoria: 'Terror', titulo: 'O Exorcista' },
        { id: 3, categoria: 'Terror', titulo: 'Drácula' },
        { id: 4, categoria: 'Romance', titulo: 'O Morro dos Ventos Uivantes' },
        { id: 5, categoria: 'Policial', titulo: 'O Silêncio dos Inocentes' },
        { id: 6, categoria: 'Suspense', titulo: 'Boneco de Neve' },
        { id: 7, categoria: 'Suspense', titulo: 'Bird Box' },
        { id: 8, categoria: 'Romance', titulo: 'Orgulho e Preconceito' }
    ];

    function listTitlesByCategory(category) {
        return books
            .filter(book => category ? book.categoria === category : true)
            .map(book => book.titulo)
            .join(', ');
    }

    let output = `<strong>O catálogo de livros da biblioteca é composto por:</strong> ${listTitlesByCategory()}<br><br>`;

    output += `<strong>Os livros de categoria de Terror da biblioteca, são:</strong> ${listTitlesByCategory('Terror')}<br>`;

    document.getElementById('libraryOutput').innerHTML = output;
}

  // EX 7
function championshipMedals() {

    const medals = ['Ouro', 'Prata', 'Bronze', 'Sem Medalha', 'Sem Medalha'];

    function mapPositionToMedal(position) {
        return `Posição no campeonato ${position}º Lugar --> Medalha de: ${medals[position - 1]}`;
    }

    let output = '';
    for (let i = 1; i <= 5; i++) {
        output += `${mapPositionToMedal(i)}<br>`;
    }

    document.getElementById('championshipOutput').innerHTML = output;
}

  // EX 8
  const A = [2, 4, 6, 7, 8, 22, 45, 34, 89, 75, 62, 54];
  const B = [22, 23, 57, 45, 77, 62, 56, 54, 97, 88, 33, 5];
  
  function union(setA, setB) {
    return [...new Set(setA.concat(setB))].sort((a, b) => a - b);
  }
  
  function intersection(setA, setB) {
    return setA.filter(value => setB.includes(value)).sort((a, b) => a - b);
  }
  
  function difference(setB, setA) {
    return setB.filter(value => !setA.includes(value)).sort((a, b) => a - b);
  }
  
  function performSetOperations() {
    document.getElementById('setA').textContent = `A = [${A.join(', ')}]`;
    document.getElementById('setB').textContent = `B = [${B.join(', ')}]`;
  
    const unionResult = union(A, B);
    const intersectionResult = intersection(A, B);
    const differenceResult = difference(B, A);
  
    document.getElementById('unionResult').textContent = `A união entre os conjuntos tem como resultado: ${unionResult.join(', ')}`;
    document.getElementById('intersectionResult').textContent = `A interseção entre os conjuntos tem como resultado: ${intersectionResult.join(', ')}`;
    document.getElementById('differenceResult').textContent = `A diferença entre os conjuntos tem como resultado: ${differenceResult.join(', ')}`;
  }
  
  // EX 9
  const pedidos = [
    { cliente: 'Claudio', pizza: 'Calabresa', bebida: 'refrigerante' },
    { cliente: 'Maribela', pizza: 'Mussarela', bebida: 'refrigerante' },
    { cliente: 'Jacinto', pizza: 'Quatro Queijos', bebida: 'refrigerante' },
    { cliente: 'Olimpo', pizza: 'Mussarela', bebida: 'refrigerante' },
    { cliente: 'Pafúncio', pizza: 'Quatro Queijos', bebida: 'cerveja' },
    { cliente: 'Felisberta', pizza: 'Quatro Queijos', bebida: 'suco' },
  ];
  
  function gerarRelatorio(pedidos) {
    const pedidosPizza = pedidos.map(pedido => pedido.pizza);
    const clientesRefrigerante = pedidos.filter(pedido => pedido.bebida === 'refrigerante').map(pedido => pedido.cliente);
    const clientesSuco = pedidos.filter(pedido => pedido.bebida === 'suco').map(pedido => pedido.cliente);
    const clientesCerveja = pedidos.filter(pedido => pedido.bebida === 'cerveja').map(pedido => pedido.cliente);
  
    document.getElementById('pedidosPizza').textContent = pedidosPizza.join(', ');
    document.getElementById('clientesRefrigerante').textContent = clientesRefrigerante.join(', ');
    document.getElementById('clientesSuco').textContent = clientesSuco.join(', ');
    document.getElementById('clientesCerveja').textContent = clientesCerveja.join(', ');
  }
  