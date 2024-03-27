  function convertToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text(document.getElementById('content-to-convert').innerText, 10, 10);
    
    let fileName = null; // Inicialize como null para detectar o clique em "Cancelar"
    
    // Continua pedindo um nome até que um valor válido seja fornecido ou o usuário clique em "Cancelar"
    while (fileName === null) {
      fileName = prompt("Por favor, insira o nome do arquivo:");
      
      if (fileName) {
        // Um nome foi fornecido; salve o arquivo.
        doc.save(fileName + ".pdf");
        break; // Sai do loop após salvar.
      } else if (fileName === "") {
        // Nenhum nome foi fornecido; alerte o usuário.
        alert("Você deve fornecer um nome para o arquivo antes de salvá-lo.");
        fileName = null; // Reset para continuar o loop.
      } else {
        // O usuário clicou em "Cancelar"; saia do loop sem salvar.
        break;
      }
    }
  }

  window.onbeforeunload = function() {
      return "Você tem certeza de que deseja sair? Todos os dados não salvos serão perdidos.";
  };