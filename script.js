

let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    let ano = document.querySelector('input#ano').value
    let sexo = document.getElementsByName('sexo')
    let anoAtual = new Date().getFullYear()
    let genero = ''
    let idade = anoAtual - ano
    let res = document.getElementById('res')
    let img = document.createElement('img')
    let tipo = ''
    if(idade <0 || idade > 120){
        alert('[ERRO]Detectamos um erro na sua idade, tente outra vez !!!!')
    }else{
        if(sexo[0].checked){
            genero = 'homem'
            tipo = genero
            if(idade<4){
                img.setAttribute('src','./imagens/bbM.png')
                tipo = 'bebê'
            }else if(idade<14){
                img.setAttribute('src','./imagens/preM.png')
                tipo = 'pré-adolescente'
            }else if(idade<20){
                img.setAttribute('src','./imagens/adolescenteM.png')
                tipo ='adolescente'
            }else if(idade<30){
                img.setAttribute('src','./imagens/homem20.png')
            }
            else if(idade<40){
                img.setAttribute('src','./imagens/homem30.png')
            }else if(idade<60){
                img.setAttribute('src','./imagens/homem40.png')
            }else{
                img.setAttribute('src','./imagens/idoso.png')
                tipo = 'idoso'
            }
            if(idade == 1)
            res.innerHTML = `Detectamos um ${tipo} com ${idade} ano`
            else
            res.innerHTML = `Detectamos um ${tipo} com ${idade} anos`
        }else{
            genero = 'mulher'
            tipo = genero
            if(idade<4){
                img.setAttribute('src','./imagens/bbF.png')
                tipo = 'bebê'
            }else if(idade<14){
                img.setAttribute('src','./imagens/preF.png')
                tipo = 'pré-adolescente'
            }else if(idade<20){
                img.setAttribute('src','./imagens/adolescenteF.png')
                tipo ='adolescente'
            }else if(idade<30){
                img.setAttribute('src','./imagens/mulher20.png')
            }
            else if(idade<40){
                img.setAttribute('src','./imagens/mulher30.png')
            }else if(idade<60){
                img.setAttribute('src','./imagens/mulher40.png')
            }else{
                img.setAttribute('src','./imagens/idosa.png')
                tipo = 'idosa'
            }
            if(idade == 1)
            res.innerHTML = `Detectamos uma ${tipo} com ${idade} ano`
            else
            res.innerHTML = `Detectamos uma ${tipo} com ${idade} anos`
        }
        
        
        res.appendChild(img)
        res.style.textAlign = 'center'
        res.style.marginTop = '20px'
        img.style.marginTop = '10px'
    }
})