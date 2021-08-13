// (2) Onclick Handler by calling function \\\\\\\\\\\\\\\\\\\\\\
function maroon()
{
    document.body.style.backgroundColor='maroon';
}


// (3) Onclick Handler by getElementById \\\\\\\\\\\\\\\\\\\\\\
const oceanButton = document.getElementById('ocean');

// Here just give the name of the function dont give the whole fuction, otherwise it will call it here in the code and result gonna reveal the function before clicking
oceanButton.onclick = makeOcean;

function makeOcean()
{
    document.body.style.backgroundColor='#092763';
}


// (4) Onclick Handler by calling direct function without any name - anonymous \\\\
const positiveButton = document.getElementById('positive');

positiveButton.onclick = function(){
    document.body.style.backgroundColor='green';
}
// console.log(positiveButton);


// (5) Onclick Handler by addEventListener anonymous function \\\\\\\\\\\\\\\\\\\\\\
const strawberryButton = document.getElementById('strawberry');

strawberryButton.addEventListener('click',

function()
{
    document.body.style.backgroundColor='#ff3399';
}

);

// (6) Onclick Handler by addEventListener with function name \\\\\\\\\\\\\\\\\\\\\\
const darkButton = document.getElementById('goDark');

darkButton.addEventListener('click',makeDark);

function makeDark()
{
    document.body.style.backgroundColor='#202124';
}

// (7) Onclick Handler by direct without variable \\\\\\\\\\\\\\\\\\\\\\

document.getElementById('danger').addEventListener('click',

    function()
    {
        document.body.style.backgroundColor='Red';
    }

    );




