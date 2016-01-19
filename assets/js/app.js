
var jq = jQuery.noConflict();

(function(){
	'use strict';

	var app = angular.module("app", []);

	app.controller('criarListaController', function($scope) {

		$scope.lista = {
			id: "1",
			nome: "Lista A",
			produtos: [{
				id: "1",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/milho.jpg",
				quantidade: 1
			},
			{
				id: "2",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/tomate.jpg",
				quantidade: 5
			}]
		};

		$scope.busca = {
			produtos: [{
				id: "1",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/pimentao.jpg",
				quantidade: 0
			},
			{
				id: "2",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/queijos.jpg",
				quantidade: 0
			},
			{
				id: "3",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/maca.jpg",
				quantidade: 0
			}]
		};

		$scope.adicionaProduto = function(produto) {
			$scope.lista.produtos.push(produto);
	  	};

	  	$scope.removeProduto = function(produto) {
			$scope.lista.produtos.splice( $scope.lista.produtos.indexOf(produto), 1 );
	  	};

	});

	app.controller('documentosController', function($scope) {
		$scope.documentos =  [];

		$scope.baixarDocumento = function(documento) {
			//função de download aqui
			alert("adicionar a função de download do arquivo carregado aqui");
	  	};

	  	$scope.convertFileSize = function (size) {
		    var i = Math.floor( Math.log(size) / Math.log(1024) );
		    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
		};

	  	$scope.adicionaDocumento = function() {

	  		var arquivo = document.getElementsByClassName("nomeDocumentoCarregado")[0].textContent;
	  		var tamanho_doc = $scope.convertFileSize(document.getElementById("inserirDocumento").files[0].size);

			$scope.documentos.push({
				arquivo: arquivo,
				nome: $scope.documento.nome,
				tamanho: tamanho_doc
		    });

		    $scope.limparForm();
	  	};

	  	$scope.limparForm = function() {
			$scope.documento.arquivo = "";
			$scope.documento.nome = "";
			$scope.documento.tamanho = "";
			document.getElementsByClassName("nomeDocumentoCarregado")[0].textContent = "Insira um arquivo...";
	  	};

	});

	app.controller('enderecosController', function($scope) {
		$scope.enderecos =  [];

		$scope.removeEndereco = function(endereco) {
			$scope.enderecos.splice( $scope.enderecos.indexOf(endereco), 1 );
	  	};

	  	$scope.adicionaEndereco = function() {
			$scope.enderecos.push({
				logradouro: $scope.endereco.logradouro,
				numero: $scope.endereco.numero,
				complemento: $scope.endereco.complemento,
				bairro: $scope.endereco.bairro,
				estado: $scope.endereco.estado,
				cidade: $scope.endereco.cidade,
				cep: $scope.endereco.cep,
				telefone: $scope.endereco.telefone,
				ramal: $scope.endereco.ramal
		    });

		    $scope.limparForm();
	  	};

	  	$scope.limparForm = function() {
			$scope.endereco.logradouro = "";
			$scope.endereco.numero = "";
			$scope.endereco.complemento = "";
			$scope.endereco.bairro = "";
			$scope.endereco.estado = "";
			$scope.endereco.cidade = "";
			$scope.endereco.cep = "";
			$scope.endereco.telefone = "";
			$scope.endereco.ramal = "";
	  	};

	});

	app.controller('contatoController', function($scope) {
		$scope.contatos =  [];

		$scope.removeContato = function(contato) {
			$scope.contatos.splice( $scope.contatos.indexOf(contato), 1 );
	  	};

	  	$scope.adicionaContato = function() {
			$scope.contatos.push({
				nome: $scope.contato.nome,
				sobrenome: $scope.contato.sobrenome,
				cpf: $scope.contato.cpf,
				rg: $scope.contato.rg,
				tipo: $scope.contato.tipo,
				telefone: $scope.contato.telefone,
				ramal: $scope.contato.ramal
		    });

		    $scope.limparForm();
	  	};

	  	$scope.limparForm = function() {
			$scope.contato.nome = "";
			$scope.contato.sobrenome = "";
			$scope.contato.cpf = "";
			$scope.contato.rg = "";
			$scope.contato.tipo = "";
			$scope.contato.telefone = "";
			$scope.contato.ramal = "";
	  	};

	});

	app.controller('pedidoController', function($scope) {
		$scope.infoPedido =  {
			numero: 125.998,
			forma_pagamento: "BOLETO",
			previsao_entrega: "15/12/2015",
			periodo: "TARDE"
		};

		$scope.pedidos = [ {
			id: "1",
			fornecedor: "A",
			valor: 250.00,
			valorDesconto: 30.00,
			produtos: [{
				id: "1",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/milho.jpg",
				quantidade: 1,
				preco: 49.90
			},
			{
				id: "2",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/tomate.jpg",
				quantidade: 5,
				preco: 22.90
			}]
		}, {
			id: "2",
			fornecedor: "B",
			valor: 150.00,
			valorDesconto: 50.00,
			produtos: [{
				id: "1",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/cereja.jpg",
				quantidade: 3,
				preco: 15.50
			}]
		}];

		$scope.getTotal = function(){
		    var total = 0;
		    for(var i = 0; i < $scope.pedidos.length; i++){
		        total += $scope.pedidos[i].valor;
		    }
		    return total;
		}

		$scope.getTotalDesconto = function(){
		    var total = 0;
		    for(var i = 0; i < $scope.pedidos.length; i++){
		        total += $scope.pedidos[i].valorDesconto;
		    }
		    return total;
		}

	});

	app.controller('cotacaoController', function($scope) {
		$scope.pedidos = [ {
			id: "1",
			fornecedor: "A",
			valor: 250.00,
			valorDesconto: 30.00,
			produtos: [{
				id: "1",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/milho.jpg",
				quantidade: 1,
				preco: 49.90
			},
			{
				id: "2",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/tomate.jpg",
				quantidade: 5,
				preco: 22.90
			}]
		}, {
			id: "2",
			fornecedor: "B",
			valor: 150.00,
			valorDesconto: 50.00,
			produtos: [{
				id: "1",
				nome: "Nome do Produto",
				descricao: "Descrição",
				imagem: "assets/img/cereja.jpg",
				quantidade: 3,
				preco: 15.50
			}]
		}];

		$scope.getTotal = function(){
		    var total = 0;
		    for(var i = 0; i < $scope.pedidos.length; i++){
		        total += $scope.pedidos[i].valor;
		    }
		    return total;
		}

		$scope.getTotalDesconto = function(){
		    var total = 0;
		    for(var i = 0; i < $scope.pedidos.length; i++){
		        total += $scope.pedidos[i].valorDesconto;
		    }
		    return total;
		}

	});

	app.controller('meusPedidosController', function($scope) {
		$scope.meusPedidos = [ {
			id: "1",
			data: "05/12/2015",
			valor: "250,59",
			status: "Entregue",
			link: "pedido/1"
		}, {
			id: "2",
			data: "11/12/2015",
			valor: "153,20",
			status: "Entregue",
			link: "pedido/2"
		}, {
			id: "3",
			data: "13/12/2015",
			valor: "80,99",
			status: "Entregue",
			link: "pedido/3"
		}];
	});

	app.controller('meuCarrinhoController', function($scope) {
		$scope.produtos = [ {
			id: "1",
			nome: "Nome do Produto",
			imagem: "assets/img/milho.jpg",
			descricao: "Descrição",
			quantidade: 1
		}, {
			id: "2",
			nome: "Nome do Produto",
			imagem: "assets/img/tomate.jpg",
			descricao: "Descrição",
			quantidade: 2
		}, {
			id: "3",
			nome: "Nome do Produto",
			imagem: "assets/img/carne-frango.jpg",
			descricao: "Descrição",
			quantidade: 1
		}, {
			id: "4",
			nome: "Nome do Produto",
			imagem: "assets/img/detergente.png",
			descricao: "Descrição",
			quantidade: 3
		}, {
			id: "5",
			nome: "Nome do Produto",
			imagem: "assets/img/cebola.jpg",
			descricao: "Descrição",
			quantidade: 5
		}, {
			id: "6",
			nome: "Nome do Produto",
			imagem: "assets/img/cereja.jpg",
			descricao: "Descrição",
			quantidade: 2
		}, {
			id: "7",
			nome: "Nome do Produto",
			imagem: "assets/img/queijos.jpg",
			descricao: "Descrição",
			quantidade: 1
		}];

		$scope.removeProduto = function(produto) {
			console.log(produto);
			$scope.produtos.splice( $scope.produtos.indexOf(produto), 1 );
	  	};

	  	$scope.limpaProdutos = function(produto) {
			$scope.produtos = {};
	  	};
	});

	app.controller('listaProdutosController', function($scope) {
		$scope.produtos = [ {
			id: "1",
			nome: "PRODUTO 1",
			imagem: "assets/img/cebola.jpg",
			link: "produtos/1",
			estrelas: 5
		}, {
			id: "2",
			nome: "PRODUTO 2",
			imagem: "assets/img/cereja.jpg",
			link: "produtos/2",
			estrelas: 4
		}, {
			id: "3",
			nome: "PRODUTO 3",
			imagem: "assets/img/queijos.jpg",
			link: "produtos/3",
			estrelas: 3
		}, {
			id: "4",
			nome: "PRODUTO 4",
			imagem: "assets/img/tomate.jpg",
			link: "produtos/4",
			estrelas: 2
		}, {
			id: "5",
			nome: "PRODUTO 5",
			imagem: "assets/img/carne-frango.jpg",
			link: "produtos/5",
			estrelas: 3
		}, {
			id: "6",
			nome: "PRODUTO 6",
			imagem: "assets/img/carne-porco.jpg",
			link: "produtos/6",
			estrelas: 1
		}, {
			id: "7",
			nome: "PRODUTO 7",
			imagem: "assets/img/carne-vermelha.jpg",
			link: "produtos/7",
			estrelas: 5
		}, {
			id: "8",
			nome: "PRODUTO 8",
			imagem: "assets/img/maca.jpg",
			link: "produtos/8",
			estrelas: 2
		}, {
			id: "9",
			nome: "PRODUTO 9",
			imagem: "assets/img/vagem.jpg",
			link: "produtos/9",
			estrelas: 4
		}, {
			id: "10",
			nome: "PRODUTO 10",
			imagem: "assets/img/pimentao.jpg",
			link: "produtos/10",
			estrelas: 2
		}, {
			id: "11",
			nome: "PRODUTO 11",
			imagem: "assets/img/detergente.png",
			link: "produtos/11",
			estrelas: 2
		}, {
			id: "12",
			nome: "PRODUTO 12",
			imagem: "assets/img/sabao.jpg",
			link: "produtos/12",
			estrelas: 3
		}];
	});

	app.controller('carrosselMaisVendidosController', function($scope) {
		$scope.produtos = [ {
			id: "1",
			nome: "PRODUTO 1",
			imagem: "assets/img/cebola.jpg",
			link: "produtos/1",
			estrelas: 5
		}, {
			id: "2",
			nome: "PRODUTO 2",
			imagem: "assets/img/cereja.jpg",
			link: "produtos/2",
			estrelas: 4,
			desconto: {
				porcentagem: "10%",
				cor: "red"
			}
		}, {
			id: "3",
			nome: "PRODUTO 3",
			imagem: "assets/img/queijos.jpg",
			link: "produtos/3",
			estrelas: 3
		}, {
			id: "4",
			nome: "PRODUTO 4",
			imagem: "assets/img/tomate.jpg",
			link: "produtos/4",
			estrelas: 2,
			desconto: {
				porcentagem: "30%",
				cor: "blue"
			}
		}, {
			id: "5",
			nome: "PRODUTO 5",
			imagem: "assets/img/carne-frango.jpg",
			link: "produtos/5",
			estrelas: 2,
			desconto: {
				porcentagem: "10%",
				cor: "red"
			}
		}];
	});

	app.controller('carrosselCategoriasController', function($scope) {
		$scope.categorias = [ {
			id: "1",
			nome: "CATEGORIA",
			imagem: "assets/img/milho.jpg"
		}, {
			id: "2",
			nome: "CATEGORIA",
			imagem: "assets/img/tomate.jpg"
		}, {
			id: "3",
			nome: "CATEGORIA",
			imagem: "assets/img/carne-frango.jpg"
		}, {
			id: "4",
			nome: "CATEGORIA",
			imagem: "assets/img/detergente.png"
		}, {
			id: "5",
			nome: "CATEGORIA",
			imagem: "assets/img/cebola.jpg"
		}, {
			id: "6",
			nome: "CATEGORIA",
			imagem: "assets/img/cereja.jpg"
		}, {
			id: "7",
			nome: "CATEGORIA",
			imagem: "assets/img/queijos.jpg"
		}];
	});

	app.controller('buscaController', function($scope) {
		$scope.categorias = [ {
			id: "1",
			nome: "Carnes",
			link: "categorias/carnes",
			subcategorias: [{
				id: "2",
				nome: "Suína",
				link: "categorias/carnes/suina"
			}, {
				id: "3",
				nome: "Bovina",
				link: "categorias/carnes/bovina"
			}],
			expanded: false
		}, {
			id: "4",
			nome: "Limpeza",
			link: "categorias/limpeza"
		}, {
			id: "5",
			nome: "Frios",
			link: "categorias/frios",
			subcategorias: [{
				id: "6",
				nome: "Salame",
				link: "categorias/frios/salame"
			}, {
				id: "7",
				nome: "Copa",
				link: "categorias/frios/copa"
			}]
		}];

		$scope.marcas = [ {
			id: "1",
			nome: "Marca a",
			link: "marcas/a",
			quantidade: 15
		}, {
			id: "2",
			nome: "Marca b",
			link: "marcas/b",
			quantidade: 11
		}, {
			id: "3",
			nome: "Marca c",
			link: "marcas/c",
			quantidade: 23
		}, {
			id: "4",
			nome: "Marca d",
			link: "marcas/d",
			quantidade: 16
		}];

		$scope.populares = [ {
			id: "1",
			nome: "Carne a",
			link: "carnes/a"
		}, {
			id: "2",
			nome: "Carne b",
			link: "carnes/b"
		}, {
			id: "3",
			nome: "Carne c",
			link: "carnes/c"
		}, {
			id: "4",
			nome: "Carne d",
			link: "carnes/d"
		}];

	});

	app.controller('listasSalvasController', function($scope) {
		$scope.listasSalvas = [ {
			id: "1",
			data: "25/11/2015",
			nome: "Lista de Verduras"
		}, {
			id: "2",
			data: "01/12/2015",
			nome: "Lista de Carnes"
		}];
	});

	app.controller('listasComprasWidgetController', function($scope) {
		$scope.listasCompras = [ {
			id: "1",
			titulo: "Título da Lista",
			data: "15/11/15",
			autor: "Administrador",
			imagem: "assets/img/tomate.jpg"
		}, {
			id: "2",
			titulo: "Título da Lista",
			data: "22/10/15",
			autor: "Administrador",
			imagem: "assets/img/milho.jpg"
		}, {
			id: "3",
			titulo: "Título da Lista",
			data: "01/12/15",
			autor: "Administrador",
			imagem: "assets/img/vagem.jpg"
		}];
	});

	app.controller('noticiasWidgetController', function($scope) {
		$scope.noticias = [ {
			titulo: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem",
			link: "link1",
		}, {
			titulo: "Lorem Ipsum Lorem Ipsum",
			link: "link2",
		}];
	});

    app.controller('appController', function($scope) {
	

		/*$scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1).split('/')[0];
            return page === currentRoute ? 'active' : '';
        };*/

        $scope.isCollapsed = false;


        $scope.search = {
			show : false,
			terms : ""
		};

		$scope.navlinks = [ {
			nome: "CARNES",
			link: "#",
			menu: [
		        {
		          nome: "VERMELHA",
		          link: "#",
		          img: "assets/img/carne-vermelha.jpg",
		          content: [
		          	{
		          		name: "FRIBOI",
		          		link: "friboi"
		          	},
		          	{
		          		name: "SEARA",
		          		link: "seara"
		          	}
		          ]
		        },
		        {
		          nome: "PORCO",
		          link: "#",
		          img: "assets/img/carne-porco.jpg",
		          content: [
		          	{
		          		name: "FRIBOI",
		          		link: "friboi"
		          	},
		          	{
		          		name: "SEARA",
		          		link: "seara"
		          	}
		          ]
		        },
		        {
		          nome: "FRANGO",
		          link: "#",
		          img: "assets/img/carne-frango.jpg",
		          content: [
		          	{
		          		name: "FRIBOI",
		          		link: "friboi"
		          	},
		          	{
		          		name: "SEARA",
		          		link: "seara"
		          	}
		          ]
		        },
	        ]
		},{
			nome: "CONGELADOS",
			link: "#"
		}, {
			nome: "ESTOCÁVEIS",
			link: "#"
		}, {
			nome: "FRIOS",
			link: "#",
			menu: [
		        {
		          nome: "QUEIJOS",
		          link: "#",
		          img: "assets/img/queijos.jpg",
		          content: [
		          	{
		          		name: "PROVOLONE",
		          		link: "provolone"
		          	},
		          	{
		          		name: "MUSSARELA",
		          		link: "mussarela"
		          	}
		          ]
		        },
		        {
		          nome: "APERITIVOS",
		          link: "#",
		          img: "assets/img/aperitivos.jpg",
		          content: [
		          	{
		          		name: "SALAME",
		          		link: "salame"
		          	},
		          	{
		          		name: "COPA",
		          		link: "copa"
		          	}
		          ]
		        },
	        ]
		}, {
			nome: "DESCARTÁVEIS",
			link: "#"
		}, {
			nome: "LIMPEZA",
			link: "#",
			menu: [
		        {
		          nome: "SABÃO",
		          link: "#",
		          img: "assets/img/sabao.jpg",
		          content: [
		          	{
		          		name: "BOMBRIL",
		          		link: "bombril"
		          	},
		          	{
		          		name: "YPÊ",
		          		link: "ype"
		          	}
		          ]
		        },
		        {
		          nome: "DETERGENTE",
		          link: "#",
		          img: "assets/img/detergente.png",
		          content: [
		          	{
		          		name: "MINUANO",
		          		link: "minuano"
		          	},
		          	{
		          		name: "YPÊ",
		          		link: "ype"
		          	}
		          ]
		        },
		        {
		          nome: "SABONETE",
		          link: "#",
		          img: "assets/img/sabonete.jpg",
		          content: [
		          	{
		          		name: "DOVE",
		          		link: "dove"
		          	},
		          	{
		          		name: "FRANCIS",
		          		link: "francis"
		          	}
		          ]
		        },
		        {
		          nome: "SABÃO EM PÓ",
		          link: "#",
		          img: "assets/img/sabao-po.jpg",
		          content: [
		          	{
		          		name: "OMO",
		          		link: "omo"
		          	},
		          	{
		          		name: "BRILHANTE",
		          		link: "brilhante"
		          	}
		          ]
		        },
	        ]
		}];
		
	});

	jq(document).ready(function(){

		jq(".nav li").click(function(){
			var left_pos = jq(this).position().left+jq(this).width()/2-33;
			jq(".arrow-white").css("left", left_pos+3);
			jq(".arrow-bg").css("left", left_pos);

		});

		jq("body").click(function(){
			jq(".carrinho-popup").fadeOut();
			// jq(".nav li").removeClass("open-drop");
		});

		jq("#carrinho").click(function(e){
			var left_pos = jq(this).offset().left+jq(this).width()/2-153;
			var top_pos = jq(this).offset().top+jq(this).height()-16;
			jq(".carrinho-popup").css("left", left_pos).css("top", top_pos);
			jq(".carrinho-popup").fadeToggle();

			jq("li.open").find('.dropdown-menu').dropdown('toggle');

			e.stopPropagation();
		});

		jq(".carrinho-popup").click(function(e){
			e.stopPropagation();
		});




	    //Function to animate slider captions 
	    function doAnimations( elems ) {
	        //Cache the animationend event in a variable
	        var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        
	        elems.each(function () {
	            var _this = jq(this),
	                animationType = _this.data('animation');
	            _this.addClass(animationType).one(animEndEv, function () {
	                _this.removeClass(animationType);
	            });
	        });
	    }
	    
	    //Variables on page load 
	    var _myCarousel = jq('#slider'),
	        _firstAnimatingElems = _myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
	        
	    //Initialize carousel 
	    _myCarousel.carousel({
				interval: 6000
			});
	    
	    //Animate captions in first slide on page load 
	    doAnimations(_firstAnimatingElems);
	    
	    //Pause carousel  
	    //jqmyCarousel.carousel('pause');
	    
	    
	    //Other slides to be animated on carousel slide event 
	    _myCarousel.on('slide.bs.carousel', function (e) {
	        var _animatingElems = jq(e.relatedTarget).find("[data-animation ^= 'animated']");
	        doAnimations(_animatingElems);
	    });  
	    


	});

	jq(document).ready(function(){
		window.setTimeout(whenReady, 1000);
	});

	function whenReady(){

		jq("#carousel-widget").owlCarousel({
		    autoPlay: 3000,
		    items : 1,
		    singleItem : true,
		    stopOnHover : true
		});

		var owl_categorias = jq("#carousel-categorias");
		owl_categorias.owlCarousel({
		    autoPlay: 3000,
		    items : 5,
		    itemsDesktop : [1000,5],
		    itemsDesktopSmall : [900,3],
		    itemsTablet: [600,2],
		    itemsMobile : [500,1],
		    stopOnHover : true,
		    pagination: false
	  	});
	  	jq(".nextCategorias").click(function(){
		    owl_categorias.trigger('owl.next');
		});
		jq(".prevCategorias").click(function(){
		    owl_categorias.trigger('owl.prev');
		});

		var owl_mais_vendidos = jq("#carousel-mais-vendidos");
	  	owl_mais_vendidos.owlCarousel({
		    autoPlay: 3000,
		    items : 4,
		    itemsDesktop : [1000,4],
		    itemsDesktopSmall : [900,2],
		    itemsTablet: [550,1],
		    stopOnHover : true,
		    pagination: false
	  	});

	  	jq(".nextMaisVendidos").click(function(){
		    owl_mais_vendidos.trigger('owl.next');
		});

		jq(".prevMaisVendidos").click(function(){
		    owl_mais_vendidos.trigger('owl.prev');
		});

		jq("#inserirDocumento").change(function(){
		    jq(".nomeDocumentoCarregado").text(jq(this).val());
		    jq(".nomeDocumentoCarregado").attr("title", jq(this).val());
		});
		
	}

})();

