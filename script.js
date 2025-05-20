const botao = document.getElementById('btn');
const divbtnmensagem = document.getElementById('btnmensagem');

divbtnmensagem.textContent = '';

botao.addEventListener('click', () => {
    
    const btnmensagem = 'Seja bem-vindo a minha autobiografia!';
   
    divbtnmensagem.textContent = btnmensagem;
});