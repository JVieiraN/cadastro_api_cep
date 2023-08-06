let atualTab = 0;
showTab(atualTab);

function showTab(tabIndex) {
  const tabs = document.getElementsByClassName("tab");
  tabs[tabIndex].classList.add("active");

  for (let i = 0; i < tabs.length; i++) {
    if (i !== tabIndex) {
      tabs[i].classList.remove("active");
    }
  }
}

function proxTab() {
  const tabs = document.getElementsByClassName("tab");
  if (atualTab < tabs.length - 1) {
    atualTab++;
    showTab(atualTab);
  }
}

function anTab() {
  if (atualTab > 0) {
    atualTab--;
    showTab(atualTab);
  }
}

function submitForm() {
  alert("Cadastro concluído!");
}

function validarNumero(input) {
  input.value = input.value.replace(/\D/g, '');
}

function buscarEnderecoPorCep() {
  let cep = document.getElementById('CEP').value;

  if(cep.length < 8){
    console.log('CEP Invalido');
    return;
  }
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function(response){
    response.json().then(function(data){
      document.getElementById("estado").value = data.uf;
      document.getElementById("cidade").value = data.localidade;
      document.getElementById("bairro").value = data.bairro;
    })
  })

}