class ExpandingList extends HTMLElement {
	constructor() {
	  self = super();
	}
  
	connectedCallback() {
		const uls = Array.from(self.querySelectorAll("ul"));
		const lis = Array.from(self.querySelectorAll("li"));
		uls.forEach((ul) => {
		ul.style.display = "none";
		});
	
		lis.forEach((li) => {
			if (li.querySelectorAll("ul").length > 0) {
				const childText = li.childNodes[0];
				const newSpan = document.createElement("span");
				li.setAttribute("class", "closed");

				newSpan.textContent = childText.textContent;
				newSpan.style.cursor = "pointer";
				newSpan.addEventListener("click", (e) => {
					const nextul = e.target.nextElementSibling;

					if (nextul.style.display == "block") {
						nextul.style.display = "none";
						nextul.parentNode.setAttribute("class", "closed");
					} else {
						nextul.style.display = "block";
						nextul.parentNode.setAttribute("class", "open");
					}
				});

				childText.parentNode.insertBefore(newSpan, childText);
				childText.parentNode.removeChild(childText);
			}
		});
	}
}
  
customElements.define("ul-x", ExpandingList);
