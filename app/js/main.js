$(document).ready(() => {

    // stores the array of jobs returned 
    // from the api
    let API = {};
    
    // return a string of html formatted
    // with the current iteration in the job
    // array
    const format = index => {
        let cur = API.jobs[index];
        
        let html =
        `
        <div class="row card">
            <h4>${cur.company}</h4>
            <p>${cur.title} - <light>${cur.location}</light></p>

            <p><strong>${cur.matches}</strong> matching keywords</p>
            <br>
            <button class="button-primary">Apply</button>
            <button class="button">Learn More</button>            
        </div>
        `;

        return html;
    };
    
    // iterates over job array and builds
    // large html string of all the jobs
    const showJobs = () => {
    
        if (!API) {
            console.log("Empty array");
            return;
        }
        let innerHTML = "";
        console.log(API.jobs);
        $.each(API.jobs, (index, value) => {
            let newItem = format(index);
            innerHTML += newItem;
        });

        $('#matches').html(innerHTML);
    }
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

            // set the global array
            API = data;

            showJobs();
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

        if (file && file.type === "application/pdf") {
            $filetext.val(e.target.files[0].name);            
        }
    });
});