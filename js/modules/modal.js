export default function initModal(){
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerMoral = document.querySelector('[data-modal="container"]');

  if(botaoAbrir && botaoFechar && containerMoral){

    function toggleModal(event) {
      event.preventDefault();
      containerMoral.classList.toggle('ativo');
  }

  function fecharModal(event){
    event.preventDefault();
    containerMoral.classList.remove('ativo');
  }
    
  function cliqueForaModal(event){
    if(event.target === this){
      toggleModal(event);
    }
  }
  botaoAbrir.addEventListener('click', toggleModal);
  botaoFechar.addEventListener('click', toggleModal);
  containerMoral.addEventListener('click', cliqueForaModal);
  }

}



