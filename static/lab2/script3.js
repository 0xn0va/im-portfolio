document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById('form')
	form.addEventListener('submit', (e) => {
		e.preventDefault()
		const data = new FormData(form)
		const person = data.get('person')
		addPerson(person)
	})
	const createNameElement = name => {
		const personName = document.createElement('span')
		personName.appendChild(document.createTextNode(name))
		return personName
	}
	const addPerson = name => {
		if (!name.length) return
		const parent = document.getElementById('list')
		const person = document.createElement('div')		
		person.appendChild(createNameElement(name))
		person.appendChild(createRemoveButton())
		parent.appendChild(person)
	}
	const createRemoveButton = () => {
		const removeButton = document.createElement('button')
		removeButton.appendChild(document.createTextNode('X'))
		removeButton.onclick = e => {
			e.preventDefault()
			e.target.parentElement.remove()
		}
		return removeButton
	}
})
