class Pontos {
    constructor(){
        this.ponto = 0;
    }

    calcularPontos(acao){
        switch(acao){
            case "post":
                return this.ponto += 3;
            break;
            case "comentario":
                return this.ponto +=1;
            break;
            case "curtida":
                return this.ponto +=1;
            break;
            default:
                return;
        }
        return this.ponto;
    }
}

export default Pontos;





// A cada tópico postado, o usuário ganha 3 pontos.
// A cada comentário inserido, o dono do comentário e o criador do tópico ganham 2 pontos. 
// A cada curtida, o dono da curtida e o criador do tópico ganham 1 ponto.
