function enc(){

    let msj = document.getElementById("msj-simple").value;
    console.log(msj);
    const original = [/a/gi,/e/gi,/i/gi,/o/gi,/u/gi];
    const toReplace = ["ai","enter","imes","ober","ufat"];
    console.log(msj.length);

    let newMsj=msj.replace(original[1], toReplace[1]).replace(original[2], toReplace[2]).replace(original[0], toReplace[0]).replace(original[3], toReplace[3]).replace(original[4], toReplace[4]).toLowerCase();    

    console.log(newMsj);
    document.getElementById("msj-final").value=newMsj;

}
function dec(){
    let msj= document.getElementById("msj-simple").value;
    console.log(msj);
    const original = [/ai/gi,/enter/gi,/imes/gi,/ober/gi,/ufat/gi];
    const toReplace = ["a","e","i","o","u"];

    let newMsj=msj.replace(original[1], toReplace[1]).replace(original[2], toReplace[2]).replace(original[0], toReplace[0]).replace(original[3], toReplace[3]).replace(original[4], toReplace[4]).toLowerCase();    
    console.log(newMsj);

    document.getElementById("msj-final").value=newMsj;

    
}
function cpytxt(){

    let copy = document.getElementById("msj-final");

    if (copy.value == ""){
        alert('No hay nada que copiar')
    } else {
        copy.select();
        copy.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copy.value);
        alert("Texto copiado: " + copy.value);
    }    

}

function reset(){
    document.getElementById("msj-simple").value="";
    document.getElementById("msj-final").value="";
}