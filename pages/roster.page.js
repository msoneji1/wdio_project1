class RosterPage {
    get instructionsText() { return $('body > div.container-fluid > div:nth-child(3) > div > p');}
    get listTitle() { return $('body > div.container-fluid > div:nth-child(4) > h3');}
   
    get rosterItems() {return $$('#hero-list > li');}

    get wolverineItem() { return $('#hero-list > li:nth-child(1)');}
    get ironManItem() {return $('#hero-list > li:nth-child(2)')}
    get deadPoolItem() { return $('#hero-list > li:nth-child(3)');}
    get thorItem() { return $('#hero-list > li:nth-child(4)');}
    get spidermanItem() { return $('#hero-list > li:nth-child(5)');}

    get addHeroLabel() { return $('#addHero-form > div > label');}
    get addHeroField() { return $('#heroInput');}
    get submitButton() { return $('#addHero-form > button');}

    get newItem() { return $('#hero-list > li:nth-child(6)');}

    /**
     * 
     * @param {*} hero 
     */
    addHero(hero) {
        this.addHeroField.setValue(hero);
        this.submitButton.click();

    }

}

module.exports = new RosterPage();