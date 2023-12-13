function addClass(el, cl) {
	if (cl instanceof Array)
		for(const name of cl) {
			el.classList.add(name)
		}
	else if (typeof cl == 'string')
		el.classList.add(cl)
	else throw new Error(`invalid "cl" Type`)	
}

function createElement(payloads) {
	const el = document.createElement(payloads.tagName)
	for (const key in payloads) {
		if (key == 'tagName')
			continue
		if (Object.hasOwnProperty.call(payloads, key)) {
			const value = payloads[key];
			switch (key) {
				case "class": 
					addClass(el, value)
					break
				case 'href':
				case 'text':
					el[key] = value
					break
				default: throw new Error(`invalid attribut name: ${key}`)
			}
		}
	}
	return el
}

Object.defineProperty(String.prototype, 'capitalize', {
	get: function () {
		return function () {
			return this.charAt(0).toUpperCase() + this.slice(1)
		}
	},
	enumerable: true,
	configurable: false
})

function createNavbarItem(title, data) {
	const btn = createElement({'tagName': 'div', 'class': 'nav-item'})
	if (typeof data == 'string') {
		const link = createElement({'tagName': 'a', 'href':data, 'text': title.capitalize()})
		btn.appendChild(link)
	} else {
		const link = createElement({'tagName': 'a', 'text': title.capitalize()})
		btn.appendChild(link)
	}
	return btn

}

function appendNavbarItem(btn) {
	const nb = document.querySelector('#nav-menu')
	nb.appendChild(btn)
}


function fillNavbar(items) {
	for (const title in items) {
		if (Object.hasOwnProperty.call(items, title)) {
			const data = items[title];
			const btn = createNavbarItem(title, data)
			appendNavbarItem(btn)
		}
	}
}

fetch('/assets/links.json')
	.then(response => response.json())
	.then(data => {
		fillNavbar(data)
	})
	.catch(err => {
		console.error('Fail to load links.json', err)
	})

// for(const link in data) {
// 	const navItem = document.createElement('div')
// 	navItem.classList.add('nav-btn')
// 	navItem.innerText = link
// 	console.log(link)
// }