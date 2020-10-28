import React from 'react';
import './Home.css'

export default () => {
    return(
        <div>
            <div className="cabecalho">
                <div className="bg-cabecalho"></div>
                <img className="img-logo" src="https://www.atenassoftware.com.br/assets/img/logo.png" alt="logo"></img>
                <div className="pesquisa">
                    <imput className="campo-pesquisa">Digite sua busca</imput>
                    <div className="btn-pesquisa">Buscar</div>
                </div>
                <div className="menu">
                    <div className="opcao-menu">HOME</div>
                    <div className="opcao-menu">PRODUTOS</div>
                    <div className="opcao-menu">FEMININO</div>
                    <div className="opcao-menu">INFANTIL</div>
                    <div className="opcao-menu">MASCULINO</div>
                </div>
                <div className="sacola">
                    <img className="img-sacola" src="https://www.atenassoftware.com.br/assets/img/sacola_custom_branco.png" alt="sacola"></img>
                    <div className="itens-sacola">0 itens</div>
                </div>
            </div>

            <div className="img-banner">
                <img src="https://www.atenassoftware.com.br/assets/img/intro-carousel/banner_2.jpg" alt="banner"></img>      
            </div>

            <div className="controles-banner">
                <div className="passadores">
                    <div className="ctrl-passador"> {'<'} </div>
                    <div className="ctrl-passador">{'>'}</div>
                </div>
                <div className="controles">
                    <div className="ctrl-passador">_</div>
                    <div className="ctrl-passador">_</div>
                    <div className="ctrl-passador">_</div>
                </div>
            </div>

            <div className="competencias">
                <div className="bloco-competencia">
                    <img src="https://www.atenassoftware.com.br/assets/img/icone_entrega.png" className="img-competencia"></img>
                    <div className="txt-competencia">VOCE ESCOLHE E NÓS LEVAMOS ATÉ VOCE</div>
                </div>
                <div className="bloco-competencia">
                    <img src="https://www.atenassoftware.com.br/assets/img/icone_cartao.png" className="img-competencia"></img>
                    <div className="txt-competencia">PARCELE SUA COMPRAS NOS CARTÕES</div>
                </div>
                <div className="bloco-competencia">
                    <img src="https://www.atenassoftware.com.br/assets/img/icone_atendimento.png" className="img-competencia"></img>
                    <div className="txt-competencia">ATENDIMENTO PERSONALIZADO</div>
                </div>
            </div>

            <div className="novidades">
                <div className="cabecalho-secao">
                    <div className="titulo-secao">NOVIDADES</div>
                    <div>-----------------------</div>
                    <div className="descricao-secao">Aproveite os produtos que acabaram de chegar em nossa loja</div>
                </div>
                <div className="produtos-novidades">
                    <div className="produto">
                        <img src="https://gestshop.sfo2.digitaloceanspaces.com/5bb8d3f9740a820012afe366-333-moleton.jpg" className="img-produto"></img>
                        <div className="produto-descricao">Vestido fiveblue feminino</div>
                        <div className="produto-preco">R$ 69,90 à vista</div>
                        <div className="produto-botao">CONFIRA</div>
                    </div>
                    <div className="produto">
                        <img src="https://gestshop.sfo2.digitaloceanspaces.com/5bb8d3f9740a820012afe366-333-moleton.jpg" className="img-produto"></img>
                        <div className="produto-descricao">Vestido fiveblue feminino</div>
                        <div className="produto-preco">R$ 69,90 à vista</div>
                        <div className="produto-botao">CONFIRA</div>
                    </div>
                    <div className="produto">
                        <img src="https://gestshop.sfo2.digitaloceanspaces.com/5bb8d3f9740a820012afe366-333-moleton.jpg" className="img-produto"></img>
                        <div className="produto-descricao">Vestido fiveblue feminino</div>
                        <div className="produto-preco">R$ 69,90 à vista</div>
                        <div className="produto-botao">CONFIRA</div>
                    </div>
                    <div className="produto">
                        <img src="https://gestshop.sfo2.digitaloceanspaces.com/5bb8d3f9740a820012afe366-333-moleton.jpg" className="img-produto"></img>
                        <div className="produto-descricao">Vestido fiveblue feminino</div>
                        <div className="produto-preco">R$ 69,90 à vista</div>
                        <div className="produto-botao">CONFIRA</div>
                    </div>
                </div>
            </div>

            <div className="departamentos">
                <div className="cabecalho-secao">
                    <div className="titulo-secao">DEPARTAMENTOS</div>
                    <div>-----------------------</div>
                    <div className="descricao-secao">Confira as categorias mais procuradas.</div>
                </div>
                <div className="linha-imagens-departamentos">
                    <img src="https://www.atenassoftware.com.br/assets/img/bloco_categoria_02.png" className="img-departamento"></img>
                    <img src="https://www.atenassoftware.com.br/assets/img/bloco_categoria_02.png" className="img-departamento"></img>
                    <img src="https://www.atenassoftware.com.br/assets/img/bloco_categoria_02.png" className="img-departamento"></img>
                </div>
                <div className="linha-imagens-departamentos">
                    <img src="https://www.atenassoftware.com.br/assets/img/bloco_categoria_02.png" className="img-departamento"></img>
                    <img src="https://www.atenassoftware.com.br/assets/img/bloco_categoria_02.png" className="img-departamento"></img>
                    <img src="https://www.atenassoftware.com.br/assets/img/bloco_categoria_02.png" className="img-departamento"></img>
                </div>
            </div>

            <div className="quem-somos">
                <div className="contentor-logo-quem-somos">
                    <img src="https://www.atenassoftware.com.br/assets/img/img_content_logo.png" className="img-quem-somos"></img>
                </div>
                <div className="conteudo-quem-somos">
                    <div className="titulo-secao">QUEM SOMOS</div>
                    <div>-----------------------</div>
                    <div className="descricao-secao">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className="botoes-quem-somos">
                        <div className="botao-fale">Fale conosco</div>
                        <div className="botao-whats">Chame no whatsApp</div>
                    </div>
                </div>
            </div>

            <div className="rodape">
                <div className="txt-rodape">© Copyright Empresa. Todos os Rireitos Reservados</div>
                <div className="txt-rodape">Desenvolvido por Atenas</div>
            </div>
        </div>
    );
}