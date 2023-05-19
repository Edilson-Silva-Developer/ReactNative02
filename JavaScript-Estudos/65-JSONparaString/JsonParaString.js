/***Podemos converter o JSON para uma Stirng de fomra fácil;
        *Ou também uma String para JSON;
         */



        let pessoa ={
            "nome" : "Edilson",
            "idade" : 33,
            "profissao" : "Programdor.JR",
            "hobbies" : ["Video game","Programar"]
        }


        let pessoatexto = JSON.stringify(pessoa);//conversão de JSON para string
            console.log(pessoatexto);


        let pessoaJSON = JSON.parse(pessoatexto);//convertendo de teste para JSON
            console.log(pessoaJSON);
                console.log(pessoaJSON.hobbies[0]);