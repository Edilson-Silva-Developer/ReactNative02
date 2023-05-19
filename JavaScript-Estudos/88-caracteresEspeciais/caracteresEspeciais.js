//Caracteres Expeciais

const dRegex = /\d/;//Qualque dígito de caracters, aonde tiver numero ele aceita, qualquer digito de caractere
    console.log('d')
    console.log(dRegex.test("asd"));
    console.log(dRegex.test("  "));
    console.log(dRegex.test("123"));
    console.log(dRegex.test("123asdf"));


const wRegex = /\w/;//Um carctere alfanumerico, aonde tiver qualquer digito é permitido, um caractere alfanumerico
    console.log('w')
    console.log(wRegex.test("asd"));
    console.log(wRegex.test("  "));
    console.log(wRegex.test("123"));
    console.log(wRegex.test("123asdf"));


const sRegex = /\s/;//Qualquer carcteres de espaço em branco, aonde tiver espaço em branco ele deixa, qualquer carctere de espaço em, branco 
    console.log('s')
    console.log(sRegex.test("asd"));
    console.log(sRegex.test("  "));
    console.log(sRegex.test("123"));
    console.log(sRegex.test("123asdf"));
    console.log(sRegex.test("Edilson   Antonio"));


const DRegex = /\D/;//Caracteres que não são digitos, aonde tiver numero ele não permiti, caracteres que não são digitos
    console.log('D')
    console.log(DRegex.test("asd"));
    console.log(DRegex.test("  "));
    console.log(DRegex.test("123"));
    console.log(DRegex.test("123asdf"));
    console.log(DRegex.test("Edilson   Antonio"));
    console.log(DRegex.test("1989"));



const WRegex= /\W/;//caracteres não alfanumerico, só permitie string, carctere nã- alfanumérico

    console.log('W')
    console.log(WRegex.test("asd"));
    console.log(WRegex.test("  "));
    console.log(WRegex.test("123"));
    console.log(WRegex.test("123asdf"));
    console.log(WRegex.test("Edilson   Antonio"));
    console.log(WRegex.test("1989"));


const SRegex = /\S/;//carcteres que não seja espaço em branco, aonde tiver espaço ele não deixa, caratere que não seja espaçõ em branco 

    console.log('S')
    console.log(SRegex.test("asd"));
    console.log(SRegex.test("  "));
    console.log(SRegex.test("123"));
    console.log(SRegex.test("123asdf"));
    console.log(SRegex.test("Edilson   Antonio"));
    console.log(SRegex.test("1989"));


const pontoRegex = /./;//qualquer caractere, meno nova linha, aceita qualquer tipo, qualquer caractere, menos nova linha 

    console.log('.')
    console.log(pontoRegex.test("asd"));
    console.log(pontoRegex.test("  "));
    console.log(pontoRegex.test("123"));
    console.log(pontoRegex.test("123asdf"));
    console.log(pontoRegex.test("Edilson   Antonio"));
    console.log(pontoRegex.test("1989"));

