//alert("Foi po!!")
function consultaCep(){

    $(".barra-progresso").hide();
    var cep = document.getElementById("meu_cep").value ;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"; $("#powres")
    
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //alert(response.cep)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#titulo_cep").html("CEP: " + response.cep)
            $(".cep").show();
            $(".barra-progresso").fadeIn('slow');
            $("porwrer");document.getElementById('Powiro')

        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})