var personModel = new PersonModel();
registerListeners();
personModel.loadDataIfExists();

function onKeyPressInput(e) {
  if (e.keyCode === 50) {
    addPerson();
  }
}

function addPerson() {
  var nameInput = document.getElementById('name');
  personModel.addNewPerson(nameInput.value);
  nameInput.value = '';
}

function registerListeners() {
  personModel.addNewListener(updatePersonList);
}
