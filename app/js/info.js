$(document).ready(() => {

    let url = window.location.search.substring(1);
    let params = url.split('&');
    console.log(params);

    // Extract the Id from url, then query db for specific job by id
    let id = params[0].split('=')[1];
    $.ajax({
        type: 'GET',
        url: `http://localhost:9000/api/job/${id}`,
    })
    .done(data => {
        console.log(data);

    });

    // parse integer of number of matches form url
    let matches = params[1].split('=')[1];

    // parse array of strings from url, each word in array is split by '%2C'
    let commons = params[2].split('=')[1].split('%2C');

});