// https://codepen.io/Weasley/pen/OoLxQW 참조 

class DataList1 {
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

	addListeners(datalist1) {
		const container = document.getElementById(this.containerId);
		const input = document.getElementById(this.inputId);
		const list = document.getElementById(this.listId);
		container.addEventListener("click", e => {
			if (e.target.id === this.inputId) {
				container.classList.toggle("active");
			} else if (e.target.id === "datalist-icon1") {
				container.classList.toggle("active");
				input.focus();
			}
		});

		input.addEventListener("input", function(e) {
			if (!container.classList.contains("active")) {
				container.classList.add("active");
			}

			datalist1.create(input.value);
		});

		list.addEventListener("click", function(e) {
			if (e.target.nodeName.toLocaleLowerCase() === "li") {
				input.value = e.target.innerText;
				container.classList.remove("active");
			}
		});
	}
}

const data1 = [
	{ value: "01", text: "디아블로" },
	{ value: "02", text: "MMORPG" },
	{ value: "03", text: "로그라이크" },
	{ value: "04", text: "넷마블" },
	{ value: "05", text: "RockStar Games" },
	{ value: "06", text: "스포츠" }
];

const datalist1 = new DataList1(
	"datalist1",
	"datalist-input1",
	"datalist-ul1",
	data1
);
datalist1.create();
datalist1.addListeners(datalist1);


