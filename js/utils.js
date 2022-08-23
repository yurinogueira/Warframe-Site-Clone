function loadHTML(self) {
    // Pega o conteudo dentro do <body> do documento html;
    const document = self.contentDocument.body;
    // Insere esse conteudo no documento pai
    self.insertAdjacentHTML("afterend", document.innerHTML);
    // Remove o documento filho já que o conteudo dele já foi transferido para o documento pai
    self.remove();
}
