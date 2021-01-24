// DATI --------------------------------------------------------------
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

const powerValues = [];
for(let x = 0; x <= 20; x++) {
  powerValues.push(x);
}

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [{

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Disperato',

    editionType: editions['SP'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
    {

      cardName: 'Skaab Distruttore',

      cost: {
        genericCostNumber: 1,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[1],
          fieldCodes[4]
        ],
      },

      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Orrore Zombie',

      editionType: editions['BL'],

      description: 'Lo sviluppatore guerriero spezza i byte in bit!',
      story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

      score: {
        power: 12,  // r
        toughness: 12
      }

      },
      {

        cardName: 'Stregone di Batinchiostro',

        cost: {
          genericCostNumber: 1,
          costFields: [ // colors array con riferimento a fieldCodes
            fieldCodes[0],
            fieldCodes[1]
          ],
        },

        picture: 'images/g.png',  // da inserire immagine
        cardType: cardTypes[5],
        cardObject: 'Mago Tritone',

        editionType: editions['SP'],

        description: 'Lo sviluppatore guerriero spezza i byte in bit!',
        story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

        score: {
          power: 20,  // r
          toughness: 8
        }

        },
        {

          cardName: 'Tempio dell\'inganno',

          cost: {
            genericCostNumber: 2,
            costFields: [ // colors array con riferimento a fieldCodes
              fieldCodes[3],
              fieldCodes[1]
            ],
          },

          picture: 'images/g.png',  // da inserire immagine
          cardType: cardTypes[0],
          cardObject: 'Bear',

          editionType: editions['BL'],

          description: 'Lo sviluppatore guerriero spezza i byte in bit!',
          story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

          score: {
            power: 1,  // r
            toughness: 5
          }

          },
]

// METODI (LOGICA) -----------------------------------------------------------

function filterByPower(powerValue, array) {
  return array.filter((element) => {
    return element.score.power === powerValue
  });
}

function filterByCardType(cardTypeValue, array) {
  return array.filter((element) => {
    return element.cardType === cardTypeValue
  });
}

function render(DOMElementId, array) {
  const cardListHTMLElement = document.getElementById(DOMElementId);
  cardListHTMLElement.innerHTML = '';

  array.forEach((element) => {
    cardListHTMLElement.innerHTML += `
      <li>
        <div>
          <h2>Nome: ${element.cardName}</h2>
        </div>
      </li>
    `
  });
}

function renderSelect(DOMElementId, array) {
  const select = document.getElementById(DOMElementId);

  array.forEach((element) => {
    select.innerHTML += `
      <option value="${element}">${element}</option>
    `
  });
}

// OUTPUT ------------------------------------------------------------------
render('lista-carte', cards);
renderSelect('power-select', powerValues);
renderSelect('cardtype-select', cardTypes);

$('#power-select').change(function() {
  const selectValue = parseInt($(this).val());
  const filteredArray = filterByPower(selectValue, cards);

  render('lista-carte', filteredArray);
})

$('#cardtype-select').change(function() {
  const selectValue = $(this).val();
  const filteredArray = filterByCardType(selectValue, cards);

  render('lista-carte', filteredArray);
})

$('#reset').click(function() {
  render('lista-carte', cards);
})
