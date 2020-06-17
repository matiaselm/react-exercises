import React from 'react';

/*
Nippu B (15p)

8. Tee React-sovellus, jossa on syöttökentät: Nimi, Osoite ja Kaupunki sekä tallennuspainike.
    > Kun käyttäjä painaa talletuspainikkeesta, syötetyistä arvoista muodostetaan yhden henkilön tiedot javascriptin objektiarrayhyn.
        > Sen sisältö renderöidään näkyville sivun alaosaan taulukkomaisesti.
        > Hyödynnä tilamuuttujia.
9. Lisää edelliseen toiminto, jossa näytetään taulukon (ja näkyviin renderöityjen) henkilöiden lukumäärä.
    > Jos lukumäärä ylittää 5, taulukon ympärille tulee punaiset reunukset.
10. Lisää edelliseen jokaiselle riville painike Poista, jolla henkilö voidaan poistaa taulukosta.
11. Lisää edelliseen tarkistussääntö, joska muuttaa nimikenttään syötetyn tekstin isoiksi kirjaimiksi.
12. Muuta kaupunkikenttä alasvetovalikoksi, lue sen arvot taulukosta.
13. Lisää edelliseen viestikomponentti, jolla on vakiosisältönä headeri, jossa on jotain tekstiä ja footer, jossa on tekstiä.
    > Tuo sisältö isäkomponentilta vapaana sisältönä childrenin avulla.
14. Muuta edellinen viestikomponentti siten, että lisää sen footeriin OK-painike.
    > Tuo sille callbackina funktio, joka suoritetaan kun viesti halutaan sulkea.
    > Muuta koodia siten, että tehtävän 9 mukaisessa tilanteessa kun henkilölukumäärä ylittää 5, niin näkyville avautuu ko. viestikomponentti.
    > Kun käyttäjä painaa OK-painiketta, viestikomponentti poistuu näkyviltä.
*/

const InputField = (props) => {

    const inputField = (
        <>
            <p>This here will be an input field</p>
        </>
    )

    return inputField
}

export {
    InputField
}