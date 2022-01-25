function darkmode() {
	var x = document.body;
	x.classList.toggle("dm");
}

function tog() {
	t = document.getElementById("toggle");
	if (t.innerHTML === "OFF") {
		t.innerHTML = "ON";
	} else {
		t.innerHTML = "OFF";
	}
}
