export default function initToltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');


  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  })

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);
  }

  const onMouseLeave = {     // usou como objeto para a funcao de cima ter acesso a ela 
    handleEvent() {    // metodo para q a funcao acima tem acesso a ela 
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);
    
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }



  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerHTML = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  
}

