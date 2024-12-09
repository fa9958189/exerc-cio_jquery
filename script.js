$(document).ready(function() {
    // Adicionar tarefas à lista
    $('#task-form').on('submit', function(event) {
      event.preventDefault(); // Evita recarregar a página
  
      const taskName = $('#task-input').val(); // Recupera o valor do input
      if (taskName.trim() !== '') {
        $('#task-list').append(`<li>${taskName}</li>`); // Adiciona à lista
        $('#task-input').val(''); // Limpa o campo
      }
    });
  
    // Marcar tarefas como completas
    $('#task-list').on('click', 'li', function() {
      $(this).toggleClass('completed'); // Alterna a classe "completed"
    });
  });
  