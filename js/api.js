import { divideDate, verifyDateValid, verifyDateFormat, convertDate } from './entry.js'

async function sendApiRequest() {
    const dia = document.querySelector('#dia').value;
    const divided = divideDate(dia);
    const dia2 = document.querySelector('#dia2').value;
    const divided2 = divideDate(dia2);
    
    if (verifyDateFormat(divided) && verifyDateValid(divided) && verifyDateFormat(divided2) && verifyDateValid(divided2)) {
        const apiKey = 'otlzWVf3ynbjohbextgzRNhK71o6xotzHSSOLxhd'
        let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${convertDate(divided)}&end_date=${convertDate(divided2)}`)
        let data = await response.json();
        document.querySelector('#content').innerHTML = '';
        const testemap=data.map(useApiData);
    }
}



function useApiData(data) {
    const contentView = `
<div class="card border-danger text-white bg-dark mb-3 card mb-4 mt-4" style="max-width: 100%;">
    <div class="row g-0">
        <div class="col-md-8 inserirFoto">
            <img src="${data.url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-4">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text border-danger mb-4">${data.explanation}.</p>
                <p class="card-text"><small class="text-muted">Author: ${data.copyright}</small></p>
            </div>
        </div>
    </div>
</div>`;
    
    document.querySelector('#content').insertAdjacentHTML('beforeend', contentView);
}

export { sendApiRequest };