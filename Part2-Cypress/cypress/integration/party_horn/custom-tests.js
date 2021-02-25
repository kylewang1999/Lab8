describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('1. First Test', () => {
    expect(true).to.equal(true);
  });

  it('2. Slider changes when volume input changes', ()=>{
    cy.get('#volume-number').clear().type('75')
    cy.get('#volume-slider')
      .then(($el) => {
        expect($el).to.have.value(75)
      })
  });

  it('3. Input changes when slider changes', ()=>{
    cy.get('#volume-slider').invoke('val','33').trigger('input')
    cy.get('#volume-number')
      .then(($el) => {
        expect($el).to.have.value(33)
      })
  });

  it('4. Volume changes when slider changes', ()=>{
    cy.get('#volume-slider').invoke('val','33').trigger('input')
    cy.get('#horn-sound')
      .then(($el) => {
        expect($el).to.have.prop('volume',0.33)
      })
  });

  it('5. Image/Audio source changes with radio selection', ()=>{
    cy.get('#radio-air-horn').check()
    cy.get('#sound-image')
      .then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/images/air-horn.svg")
      })
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src',"./assets/media/audio/air-horn.mp3")
    })
    cy.get('#radio-car-horn').check()
    cy.get('#sound-image')
      .then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/images/car.svg")
      })
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src',"./assets/media/audio/car-horn.mp3")
    })
    cy.get('#radio-party-horn').check()
    cy.get('#sound-image')
      .then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/images/party-horn.svg")
      })
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src',"./assets/media/audio/party-horn.mp3")
    })
  });

  it('6. Volume image changes when input changes', ()=>{
    cy.get('#volume-number').clear().type('75')
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/icons/volume-level-3.svg")
      })
    cy.get('#volume-number').clear().type('65')
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/icons/volume-level-2.svg")
      })
    cy.get('#volume-number').clear().type('20')
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/icons/volume-level-1.svg")
      })
    cy.get('#volume-number').clear().type('0')
    cy.get('#volume-image')
      .then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/icons/volume-level-0.svg")
      })
  });  

  it('7. Honk btn disabled when textbox is empyt/non-number', ()=>{
    cy.get('#volume-number').invoke('val',null).trigger('input')
    cy.get('#honk-btn')
      .then(($el) => {
        expect($el).to.have.attr('disabled')
      })
    cy.get('#volume-number').invoke('val','non-number').trigger('input')
    cy.get('#honk-btn')
      .then(($el) => {
        expect($el).to.have.attr('disabled')
      })
  });

  it('8. Error is shown when type volume out of range', ()=>{
    cy.get('#volume-number').invoke('val',999).trigger('input')
    cy.get('#volume-number:invalid').should('have.length',1)

  });


});


