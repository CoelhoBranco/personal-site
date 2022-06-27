/*

definir uma lista para as infos

criar metodo para criar os itens da lista

fazer um for passando por esses valores.

*/
function itemPortifolio(item) {
    var img = item.img;
    var title = item.title;
    var text = item.text;
    let father = document.querySelector('#list');
    var HTML = (`
    <li>
                    <img src="assets/img/${img}.jpg" alt="${img}" />
                    <div>
                        <h2>${title}</h2>
                        <p>${text}</p>
                    </div>
    </li>
    
    `);
    father.insertAdjacentHTML('afterbegin', HTML);


}



function appendItens() {
    const parameters = [
        {
            id: 0,
            title: 'Criação de Bots',
            text: `Tenho alta experiência com a criação de bots e automações.
            <br>Já tive a oportunidade de criar esse tipo de software para várias plataformas,                          entre elas: <a href='https://iqoption.com/pt'>IqOption</a>,<a
            href='https://core.telegram.org/bots'>Telegram</a>,<a
            href='https://www.omegle.com/'>Omegle</a>,<a
            href='https://www.belezanaweb.com.br/'>Beleza na web</a> e mais várias outras.
            `,
            img: "3"
        },
        {
            id: 1,
            title: 'Criação de Website',
            text: `Atualmente as empresas estão cada vez mais obrigadas a aumentar a presença na internet.
            <br>Uma otima forma de se ter essa presença é atraves de sites.
        `,
            img: "1"
        },

        {
            id: 2,
            title: `Criação de Sistemas`,
            text: ` Sistemas geralmente, são um conjunto de processos organizados de modo a formalizar um
            objetivo.
            <br>Existem muitos sistemas hoje em dia já consolidados, contudo nem sempre ele atende 100%
            aos requisitos do cliente.
            Usando programação podemos criar absolutamente qualquer sistema que atenda qualquer
            necessidade. `,
            img: "3"
        },

    ]
    parameters.forEach(itemPortifolio);
}


appendItens();



/*
<li>
                    <img src="assets/img/3.jpg" alt="3" />
                    <div>
                        <h2>Criação de Bots</h2>
                        <p>
                            Tenho alta experiência com a criação de bots e automações.
                            <br>Já tive a oportunidade de criar esse tipo de software para várias plataformas,
                            entre elas: <a href='https://iqoption.com/pt'>IqOption</a>,<a
                                href='https://core.telegram.org/bots'>Telegram</a>,<a
                                href='https://www.omegle.com/'>Omegle</a>,<a
                                href='https://www.belezanaweb.com.br/'>Beleza na web</a> e mais várias outras.
                        </p>
                    </div>
</li>*/