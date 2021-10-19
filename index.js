function characters() {
    var input1 = document.getElementById("user1").value;
    var input2 = document.getElementById("user2").value;

    input1NoSpace = input1.replace(/ /g,'');
    input2NoSpace = input2.replace(/ /g,'');

    console.log(input1NoSpace);
    console.log(input2NoSpace);

    if (input1NoSpace.length > input2NoSpace.length) {
        alert('"' + input1 + '" has more characters than "' + input2 + '".');
    } else if (input1NoSpace.length == input2NoSpace.length) {
        alert('"' + input1 + '" and "' + input2 + '" have the same amount of characters.') 

    } else {
        alert ('"' + input1 + '" has fewer characters than "' + input2 + '".');
    }
}



