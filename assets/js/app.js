$(document).ready(function(){
	$(".dropdown-menu").find("li a").click(function(e){
		e.stopPropagation();
	})

    $("#abrangencia").change(function(){
        if($(this).val() == "estadual"){
            $("#abrangencia_estadual").css("display", "block");
        }else{
            $("#abrangencia_estadual").css("display", "none");
        }
    });

    function toggleMultiList(id_input, id_list, id_btn){
        $("#"+id_btn).click(function(){
            if($("#"+id_input).val() != ""){
                $("#"+id_list).find(".list-holder").remove();
                $("#"+id_list).append("<li>"+$("#"+id_input).val()+"<span class='removerLista'><i class='material-icons'>delete</i></span></li>");
                $("#"+id_input).val("");
            }
        });
    }

    $("body").on("click", ".removerLista", function(){
        var list = $(this).parents().eq(1);
        $(this).parent().remove();
        if(list.children().not(".list-holder").length == 0){
            list.append('<li class="list-holder">Sem itens cadastrados</li>');
        }
    })

    toggleMultiList("dependentes", "lista_dependentes", "adicionarDependente");
    toggleMultiList("relacao_congeneres", "lista_congeneres", "adicionarCongeneres");
    toggleMultiList("bancos_debito", "lista_bancos", "adicionarBancos");
});