const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Dynamic Roster Suite', () => {
    it ('should have default list of heroes', () => {
        let heroes = ['Wolverine', 'Iron Man', 'Deadpool', 'Thor', 'Spider-Man'];
        
        browser.url('');

        LoginPage.login('1@2.com', 'password');
        browser.pause(2000);
        for (let i=0; i < heroes.length; i++) {
            assert.equal(RosterPage.rosterItems[i].getText(), heroes[i], 'Hero name is not correct.');
        }

    });
    it ('should add a hero item', () => {
        
        browser.url('');

        LoginPage.login('1@2.com', 'password');

        RosterPage.addHero('Spongebob');

        assert.equal(RosterPage.rosterItems[5].getText(), 'Spongebob', 'Hero text is not correct.');
        browser.pause(2000);
    });
    it ('should add multiple hero items', () => {
        let heroes = ['Bob', 'Joe', 'Steve', 'Sally'];
        browser.url('');

        LoginPage.login('1@2.com', 'password');

        for (let i=0; i < heroes.length; i++) {
            RosterPage.addHero(heroes[i]);
            browser.pause(2000);
        }
        for (let i=0; i < heroes.length; i++) {
            assert.equal(RosterPage.rosterItems[i+5].getText(), heroes[i], 'Hero text is not correct.')
        }
    });
});