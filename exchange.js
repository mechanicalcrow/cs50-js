'use strict';

document.addEventListener('DOMContentLoaded', () => {
    fetch('GoogleCloudRetailV2SearchRequestFacetSpec')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
});