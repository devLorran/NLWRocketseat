/*function(para, id, assunto, texto){
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario{

}
RTCRtpSender(){
    enviarEmail("email@gmail.com",9899,"Olá!","Tudo bem?");
}
*/

interface DadosDeEnvioEMail{
    para: string;
    id: string;
    assunto: string;
    texto: string;
}
function enviarEmail({para, id ,assunto, texto}: DadosDeEnvioEMail){
    console.log(para, id, assunto, texto);
}
class EnviarEmailParaUsuario{
    send(){
        enviarEmail({
            para: "lorranrodrigues553@gmail.com",
            id: "9899",
            assunto: "Olá",
            texto: "Tudo bem?"
        })
    }
}