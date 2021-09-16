const assert= require('assert');
const LoginPage = require('../pages/login.page')
const RosterPage = require('../pages/roster.page');

describe('Roster Test Suite', () => {
    it('should have default values', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        var title = 'Build Your Superhero Roster:';
        var instructions = 'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.';

        assert.equal(RosterPage.listTitle.getText(), title, 'List title is incorrect.');
        assert.equal(RosterPage.instructionsText.getText(), instructions, 'Instructions are incorrect.');

        assert.equal(RosterPage.wolverineItem.getText(), 'Wolverine', 'Text for Wolverine is not correct');
        assert.equal(RosterPage.ironManItem.getText(), 'Iron Man', 'Text for Iron Man is not correct');
        assert.equal(RosterPage.deadPoolItem.getText(), 'Deadpool', 'Text for Deadpool is not correct');
        assert.equal(RosterPage.thorItem.getText(), 'Thor', 'Text for Thor is not correct');
        assert.equal(RosterPage.spidermanItem.getText(), 'Spider-Man', 'Text for Spider-Man is not correct');
        
        assert.equal(RosterPage.addHeroLabel.getText(), 'ADD A SUPERHERO', 'Label for Superhero input box incorrect');
        assert.equal(RosterPage.addHeroField.getAttribute('placeholder'), 'Enter Hero', 'Placeholder text for Superhero input box incorrect');

    });
    it('should add new item', () => {
        browser.url('');
        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        var newItemValue = 'Bob';

        RosterPage.addHeroField.setValue(newItemValue);
        RosterPage.submitButton.click();

        assert.equal(RosterPage.newItem.getText(), newItemValue, 'Text for new item is not correct');

    })
})

