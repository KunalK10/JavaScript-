const names = ["YouTube", "Fcaebook", "Instagram", "Netflix", "Amazon"];

for(const n of names){
    // console.log(n);
}

const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "Learn Code Online"
}

for (const n in symbols) {
    console.log(symbols[n]);
}