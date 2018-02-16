function updatePersonList() {
	while (persons.firstChild) {
		persons.removeChild(persons.firstChild);
	}
  personModel.allPersons.forEach(function (personName) {
    var persons = document.getElementById('persons');
    var parag = document.createElement('p');
    var content = document.createTextNode(personName);
    parag.appendChild(content);
    persons.appendChild(parag);
  })
}
