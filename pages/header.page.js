class HeaderPage {
    get logoutLink() { return $('#navbarSupportedContent > ul > li:nth-child(4) > a');}
    get linkLink() { return $('#navbarSupportedContent > ul > li:nth-child(2) > a');}
    get heroFactsLink() { return $('#navbarDropdown');}
    get wolverineOption() { return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');}
    get spidermanOption() { return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)');}
    get searchField() { return $('#search-box');}
    get searchButton() { return $('#search-form > button');}

    // Modal window for Wolverine
    get wolvModalWindow() {
        return $('#wolverineModal > div > div');
    }

    get wolvModalTitleText() {
        return $('#wolverineModalLabel');
    }

    get wolvModalContentText() {
        return $('#wolverineModal > div > div > div.modal-body')
    }

    get wolvModalCloseButton() {
        return $('#wolverineModal > div > div > div.modal-footer > button')
    }

    // Modal window for Spider-Man
    get spidModalWindow() {
        return $('#spidermanModal > div > div');
    }

    get spidModalTitleText() {
        return $('#spidermanModalLabel');
    }

    get spidModalContentText() {
        return $('#spidermanModal > div > div > div.modal-body')
    }

    get spidModalCloseButton() {
        return $('#spidermanModal > div > div > div.modal-footer > button')
    }
}



module.exports = new HeaderPage();