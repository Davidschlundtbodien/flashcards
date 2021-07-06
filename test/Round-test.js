const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  //Deck for testing
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);

  it('should be istantiated with a deck', function () {
    const round = new Round(deck);

    expect(round.deck).to.equal(deck);
  })

  it('should start at 0 turns', function () {
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  })

  it('should have a default empty array for incorrect guesses', function () {
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  })

  it('should be able to return the current card', function () {
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  })

  it('should be able to calculate the percentage correct', function () {
    const round = new Round(deck)

    expect(round.calculatePercentCorrect()).to.equal(100)
  })

  it('should print the percent of correct at the end of the round', function () {
    const round = new Round(deck)

    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
  })

  describe('takeTurn', function () {
    it('should update the turn count', function () {
      const round = new Round(deck);
      round.takeTurn();
      round.takeTurn();
      expect(round.turns).to.equal(2);
    })

    it('should return feedback for user guess', function () {
      const round = new Round(deck);

      expect(round.takeTurn('sea otter')).to.equal('correct!');
    })

    it('should add the card id to incorrectGuesses array if user guess is incorrect', function () {
      const round = new Round(deck)
      round.takeTurn('pug')

      expect(round.incorrectGuesses[0]).to.equal(1)
      expect(round.incorrectGuesses.length).to.equal(1)
    })

    it('should change the current card to the next card', function () {
      const round = new Round(deck);
      round.takeTurn('sea otter')
      expect(round.returnCurrentCard().id).to.equal(14)
    })
  })
})
