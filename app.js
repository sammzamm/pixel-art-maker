document.addEventListener("DOMContentLoaded", function() {
    var body = document.getElementsByTagName('body')[0];
    var bodyDivs = document.getElementsByTagName('div')[0];
    var div = document.createElement('div');
    div.className = "colorDiv";
    var container = document.getElementsByClassName('containerDiv')[0];
    var remove = document.getElementsByClassName('colorDiv');

    // CREATING THE CHART START
    var num = 1560;
    for (var i = 0; i < num; i++) {
        var div = document.createElement('div');
        var divColor = container.appendChild(div);
        div.className = "colorDiv";
    }
    // CREATING THE CHART END


    // SINGLE COLOR PICKER START
    var singleCol = document.createElement('div');
    singleCol.className = "container";
    document.body.appendChild(singleCol);
    singleCol.innerText = "Color A Single Square!";
    var red = document.createElement('div');
    red.className = "red";
    document.body.appendChild(red);
    var pink = document.createElement('div');
    pink.className = "pink";
    document.body.appendChild(pink);
    var purple = document.createElement('div');
    purple.className = "purple";
    document.body.appendChild(purple);
    var blue = document.createElement('div');
    blue.className = "blue";
    document.body.appendChild(blue);
    var green = document.createElement('div');
    green.className = "green";
    document.body.appendChild(green);
    var yellow = document.createElement('div');
    yellow.className = "yellow";
    document.body.appendChild(yellow);
    var black = document.createElement('div');
    black.className = "black";
    document.body.appendChild(black);
    // SINGLE COLOR PICKER END


    // MOUSEOVER COLOR PICKER START"
    var colorMO = document.createElement('div');
    colorMO.className = "container";
    document.body.appendChild(colorMO);
    colorMO.innerText = "Drag & Draw!";
    var red2 = document.createElement('div');
    red2.className = "red2";
    document.body.appendChild(red2);
    var pink2 = document.createElement('div');
    pink2.className = "pink2";
    document.body.appendChild(pink2);
    var purple2 = document.createElement('div');
    purple2.className = "purple2";
    document.body.appendChild(purple2);
    var blue2 = document.createElement('div');
    blue2.className = "blue2";
    document.body.appendChild(blue2);
    var green2 = document.createElement('div');
    green2.className = "green2";
    document.body.appendChild(green2);
    var yellow2 = document.createElement('div');
    yellow2.className = "yellow2";
    document.body.appendChild(yellow2);
    var black2 = document.createElement('div');
    black2.className = "black2";
    document.body.appendChild(black2);

    // MOUSE OVER COLOR PICKER END


    //SINGLE DRAWING START
    red.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "red";
            }
        })
    })
    pink.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "pink";
            }
        })
    })
    purple.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "purple";
            }
        })
    })
    blue.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "blue";
            }
        })
    })
    green.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "green";
            }
        })
    })
    yellow.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "yellow";
            }
        })
    })
    black.addEventListener('click', function() {
        document.body.addEventListener('click', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "black";
            }
        })
    })
    // single end


    // Drag and draw start
    red2.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "red";
            }
        })
    })
    pink2.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "pink";
            }
        })
    })
    purple2.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "purple";
            }
        })
    })
    blue2.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "blue";
            }
        })
    })
    green2.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
            if (event.target.classList.contains('colorDiv'))
                event.target.style.backgroundColor = "green";

        })
    })
    yellow2.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "yellow";
            }
        })
    })
    black2.addEventListener('click', function() {
        container.addEventListener('mouseover', function() {
            if (event.target.classList.contains('colorDiv')) {
                event.target.style.backgroundColor = "white";
            }
        })
    })
    // Drag and draw end

    // buttonrefresh start
    var button = document.getElementById('btn');
    button.addEventListener('click', function() {
        button.style.backgroundColor = "white"
        var remove = document.getElementsByClassName('colorDiv');
        for (var i = 0; i < remove.length; i++) {
            remove[i].style.backgroundColor = "black";
        }
    })
    // button refresh end
});
