$(document).ready(() => {
    
    // form submit
    //TODO: change to .submit
    $('form').submit(event => {
        event.preventDefault();

        let post = new FormData();
        post.append('location', $('input[name=location]').val());
        post.append('query', $('input[name=query]').val())
        post.append('resume', event.target[2].files[0]);

        // make the request
        $.ajax({
            type: 'POST',
            url: 'http://localhost:9000/api/match',
            data: post,
            encode: true,
            processData: false,
            contentType: false
        })
        .done(data => {
            console.log(data);
        });
    });


    // FILE BUTTONS
    let $filetext = $('#filetext');
    let $file = $('#file');

    // when the placeholder text input is clicked
    // then fire the click event on the file button
    $filetext.click(e => {
        $file.click();
    });

    // when the file button get tabbed on, fire the click
    // event and play the filetext focus animation
    $file.focus(e => {
        $file.click();
        $filetext.focus();
    });

    // when the user adds a file, set the value of the
    // text to the name of the added file
    $file.on('change', e => {

        let file = e.target.files[0];
        console.log(file);

        if (file && file.type === "application/pdf") {
            $filetext.val(e.target.files[0].name);            
        }
    });
});