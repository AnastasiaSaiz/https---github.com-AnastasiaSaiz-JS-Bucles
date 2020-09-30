let div1 = document.getElementById("div1")

for(let i=1;i<=12;i++){
    if (i % 2 !== 0) {
        document.write(i);
        document.write("->")
        document.write(i*i);
        document.write(`<br/>`)
    }else{
        document.write(i);
        document.write("->")
        document.write(i*i*i);
        document.write(`<br/>`)
    }
    
}



