
//get the number of jokes



//handling the button to kick things off

//Event Listener
document.querySelector('.get-jokes').addEventListener('click', getJokes);

//get jokes function

function getJokes(e)
{
    
    const number = document.getElementById('numJokes').value;
    
    xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    //upon gathering data from External API going into onload func
    xhr.onload= function()
    {
        let output ='';
        if(this.status === 200)
        {
            const response= JSON.parse(this.responseText);

            //checking that it returns successfully
            if(response.type === 'success')
            {
                response.value.forEach(function(joke)
                {
                    output+=`<li>${joke.joke}</li>`
                })
            }

            else
            {
                output+='<li>Something went wrong.. :/<li>';
            }
            
            document.querySelector('.jokes').innerHTML=output;
        }
    }

    xhr.send();

    e.preventDefault();
}