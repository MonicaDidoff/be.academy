function validation(){
    let error = false;
    let mensagem = null;
    let type_array = []; 
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        let type = input.getAttribute('type');
        let value = input.value;
        type_array.push(type);

        if(type === "text"){
            if(value.length < 3 || value.length > 255){
                error = true;
                mensagem = "O campo de Nome precisa ter entre 3 e 255 caracteres, tente novamente!";
            }
        }else if(type === "tel"){
            let value_tel = value.replace('-','').replace('(','').replace(')','').replace(' ','');
            
            if(value_tel.length < 10 || value_tel.length > 11){
                error = true;
                mensagem = "O campo de Telefone precisa ter o ddd mais seu número, tente novamente!";
            }
        }else if(type === "email"){
            if(!value.includes('@')){
                error = true;
                mensagem = "O campo de email precisa ter um email válido, tente novamente!";
            }else if(!value.split('@')[1].includes('.')  && value.split('@')[1].split('.')[1].length < 3){
                error = true;
                mensagem = "O campo de email precisa ter um email válido, tente novamente!";
            }
        }
    });

    if(
        !type_array.includes('email') 
        || !type_array.includes('text')
        || !type_array.includes('tel')
    ){
        error = false;
        mensagem = "Algo deu errado, tente novamente!";
    }

    if(error === true){
        alert(mensagem);
        return false;
    }else{
        alert('Pronto! Sua mensagem foi enviada! Só aguardar um de nossos consultores te responder!');
    }
};