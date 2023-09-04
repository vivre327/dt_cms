// https://codepen.io/Weasley/pen/OoLxQW 참조 

class DataList {
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

	addListeners(datalist) {
		const container = document.getElementById(this.containerId);
		const input = document.getElementById(this.inputId);
		const list = document.getElementById(this.listId);
		container.addEventListener("click", e => {
			if (e.target.id === this.inputId) {
				container.classList.toggle("active");
			} else if (e.target.id === "datalist-icon") {
				container.classList.toggle("active");
				input.focus();
			}
		});

		input.addEventListener("input", function(e) {
			if (!container.classList.contains("active")) {
				container.classList.add("active");
			}

			datalist.create(input.value);
		});

		list.addEventListener("click", function(e) {
			if (e.target.nodeName.toLocaleLowerCase() === "li") {
				input.value = e.target.innerText;
				container.classList.remove("active");
			}
		});
	}
}

const data = [
	{ value: "01", text: "네이버" },
	{ value: "02", text: "블리자드" },
	{ value: "03", text: "게임빌" },
	{ value: "04", text: "넷마블" },
	{ value: "05", text: "반프레스토" },
	{ value: "06", text: "넷이즈" },
	{ value: "07", text: "넷게임즈" },
	{ value: "08", text: "넷마블" },
	{ value: "09", text: "네오위즈" },
	{ value: "10", text: "네오위즈 홀딩스"},
	{ value: "11", text: "넥슨" },
	{ value: "12", text: "넥슨지티"}
];

const datalist = new DataList(
	"datalist",
	"datalist-input",
	"datalist-ul",
	data
);
datalist.create();
datalist.addListeners(datalist);


