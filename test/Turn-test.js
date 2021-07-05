const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {

  it('should be a function', function() {
    let turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    let turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be istantiated with an user answer and current Card', function () {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn ('array', card)

    expect(turn.userGuess).to.equal('array')
    expect(turn.currentCard).to.equal(card)
  })

  it('should be able to return the guess', function () {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn ('array', card)

    expect(turn.returnGuess()).to.equal('array')
  })

  it('should be able to return the Card', function () {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn ('array', card)

    expect(turn.returnCard()).to.equal(card)
  })

  it('should evaluate the guess', function () {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn ('array', card)

    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should give feedback if the answer is correct or incorrect', function () {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn ('array', card)

    expect(turn.giveFeedback()).to.equal('incorrect!')
  })

})
