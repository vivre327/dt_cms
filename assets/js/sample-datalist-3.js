// https://codepen.io/Weasley/pen/OoLxQW 참조 

class DataList3 {
	constructor(containerId, inputId, listId, options) {
		this.containerId = containerId;
		this.inputId = inputId;
		this.listId = listId;
		this.options = options;
	}

	create(filter = "") {
		const list = document.getElementById(this.listId);
		const filterOptions = this.options.filter(
			d => filter === "" || d.text.includes(filter)
		);

		if (filterOptions.length === 0) {
			list.classList.remove("active");
		} else {
			list.classList.add("active");
		}

		list.innerHTML = filterOptions
			.map(o => `<li id=${o.value}>${o.text}</li>`)
			.join("");
	}

	addListeners(datalist3) {
		const container = document.getElementById(this.containerId);
		const input = document.getElementById(this.inputId);
		const list = document.getElementById(this.listId);
		container.addEventListener("click", e => {
			if (e.target.id === this.inputId) {
				container.classList.toggle("active");
			} else if (e.target.id === "datalist-icon3") {
				container.classList.toggle("active");
				input.focus();
			}
		});

		input.addEventListener("input", function(e) {
			if (!container.classList.contains("active")) {
				container.classList.add("active");
			}

			datalist3.create(input.value);
		});

		list.addEventListener("click", function(e) {
			if (e.target.nodeName.toLocaleLowerCase() === "li") {
				input.value = e.target.innerText;
				container.classList.remove("active");
			}
		});
	}
}

const data3 = [
	{ value: "01", text: "카테고리1" },
	{ value: "02", text: "카테고리2" },
	{ value: "03", text: "카테고리3" },
	{ value: "04", text: "카테고리4" }
];

const datalist3 = new DataList3(
	"datalist3",
	"datalist-input3",
	"datalist-ul3",
	data3
);
datalist3.create();
datalist3.addListeners(datalist3);


