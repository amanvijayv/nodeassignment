const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your key on telephone?`, key => {
    let coordinates = getCoordinates(key.toLowerCase());
    console.log(coordinates);
    readline.close()
})


function getCoordinates(key) {
    let arr = [];
    switch (key) {
        case '1':
            arr = [1, 1];
            break;
        case '2': case 'a': case 'b': case 'c':
            arr = [1, 2];
            break;
        case '3': case 'd': case 'e': case 'f':
            arr = [1, 3];
            break;
        case '4': case 'g': case 'h': case 'i':
            arr = [2, 1];
            break;
        case '5': case 'j': case 'k': case 'l':
            arr = [2, 2];
            break;
        case '6': case 'm': case 'n': case 'o':
            arr = [2, 3];
            break;
        case '7': case 'p': case 'q': case 'r': case 's':
            arr = [3, 1];
            break;
        case '8': case 't': case 'u': case 'v':
            arr = [3, 2];
            break;
        case '9': case 'w': case 'x': case 'y': case 'z':
            arr = [3, 3];
            break;
        case '*':
            arr = [4, 1];
            break;
        case '0':
            arr = [4, 2];
            break;
        case '#':
            arr = [4, 3];
            break;
        default:
            arr = [0,0]
            break;
    }
    return arr;
}