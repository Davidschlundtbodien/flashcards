const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', function () {
  it('should be a function', function () {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  })

  it('should be an instance of a Deck', function () {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should be istantiated with an array of cards', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]

    const deck = new Deck(cards)
    expect(deck.cards).to.equal(cards)
  })

  it('should be able to count the total cards in the deck', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const cards = [card1, card2, card3]

    const deck = new Deck(cards)
    expect(deck.countCards()).to.equal(3)
  })
})
