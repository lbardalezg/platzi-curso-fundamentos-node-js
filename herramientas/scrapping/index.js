const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzar navegador');
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    let titulo1 = await page.evaluate(() => {
        // Este código es ejecutado en la página
        // dentro del explorador
        // Puede ser visto en la consola del explorador
        const h1 = document.querySelector('h1');
        // El siguiente console.log pertenece al navegador,
        // no al terminal de node.js
        console.log(h1.innerHTML);
        return h1.innerHTML;
    })
    // El siguiente console.log si pertenece
    // al terminal de node.js
    console.log(titulo1);

    console.log('Cerramos navegador')
    browser.close();
    console.log('Navegador cerrado')
})();