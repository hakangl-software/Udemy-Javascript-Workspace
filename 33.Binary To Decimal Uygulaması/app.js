

// BINARY TO DECIMAL CONVERT

let binary = "1011";


function convertBinarytoDecimal(binary)
{
    let toplam = 0;
    let ust = 0;
    
    for(let i=binary.length-1;i>=0; i--){
    toplam+= Number(binary.charAt(i)) * Math.pow(2,ust); // burada index numarasını number a çevirip 2 likten çevirdiğimiz için 2 üssü nü alıyoruz.
    ust++;
    }

    console.log("Sonuç: " + toplam);
}

convertBinarytoDecimal(binary);