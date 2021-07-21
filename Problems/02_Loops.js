// Loops 
// printing the vowel in the string in the same order as a, e, i, o, u and then printing the consonant in the same order as string

function vowelsAndConsonants(s) {
    
    let v = "aeiou";
    
    for (let i = 0; i < s.length; i++){
        for (let j = 0; j < v.length; j++){
            if (s[i] === v[j]) {
                console.log(s[i]);
            }
        }
    }

    for (let j = 0; j < s.length; j++){
        if ((s[j] !== v[0] && s[j] !== v[1] && s[j] !== v[2] && s[j] !== v[3] && s[j] !== v[4]) ) {
            console.log(s[j]);
        }
    }
}

// vowelsAndConsonants("exaplanation")


// Refactor Code 

function vowelsAndConsonants (s) {
    let vowels = ["a", "e", "i", "o", "u"];

    for (let v of s) {
        if (vowels.includes(v)){
            console.log(v);
        }
    }

    for (let v of s){
        if (!vowels.includes(v)){
            console.log(v);
        }
    }
}

// vowelsAndConsonants("javascriptloops")

// More Refactor 

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    console.log(consonants.trim());
}

vowelsAndConsonants("javascriptloops")


