window.addEventListener('load', function(e) {
	console.log('script.js loaded');

	init();

});

function init() {
	console.log('in init');

	document.toDoForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let toDoId = document.toDoForm.toDoId.value;
		console.log(toDoId)
		if (!isNaN(toDoId) && toDoId > 0) {
			getToDo(toDoId);
		}
	});
	
	//let toDoCountText = document.getElementById('todoCount').textContent;
	//document.getElementById('todoCount').textContent = `${toDoCountText} ${toDo.length}`; 
	
	document.newToDoForm.addToDoButton.addEventListener('click', function(event){
		event.preventDefault();
		let form = document.newToDoForm;
		let userForToDo = {
			name: 
			form.name.value,
			title:
			form.title.value,
			task:
			form.task.value }
			console.log(userForToDo);
			addNewToDo(userForToDo);
				
	})

	document.newToDoForm.addToDoButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		let form = document.newToDoForm;
		let toDo = {
			title: form.toDoTitle.value,
			name: form.toDoName.value,
			task: form.toDoTask.value,
			
		};
		console.log(toDo);
		addNewToDo(toDo);
	});

	document.updateToDoForm.updateToDoButton.addEventListener('click', function(e) {
		e.preventDefault();
		let form = document.updateToDo;

		let updateToDo = {
			title: form.toDoTitle.value,
			name: form.toDoName.value,
			task: form.toDoTask.value,

		};

		let toDoId = form.toDoId.value;

		console.log(toDoId + updateToDo);
		updateToDo(updateToDo, toDoId);
	});
	
	document.deleteToDoForm.deleteToDo.addEventListener('click', function(e){
		e.preventDefault();
		let form = document.deleteToDoForm;
		let toDoId = form.toDoId.value;
		deleteAToDo(toDoId);
	});

	loadAllToDo();

}

function loadAllToDo() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/users')

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let toDo = JSON.parse(xhr.responseText);
				displayToDoList(toDo);
			}
			else {
				displayError('Error finding To Do: ' + xhr.status);
			}
		}
	};

	xhr.send();
}

function displayToDoList(toDos) {
	let tbody = document.getElementById('toDoBody');
	tbody.textContent = '';

	for (let toDo of toDos) {
		let tr = document.createElement('tr');
		tbody.appendChild(tr);

		let td = document.createElement('td');
		td.textContent = toDo.id;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = toDo.title;
		tr.appendChild(td)

		td = document.createElement('td');
		td.textContent = toDo.name;
		tr.appendChild(td)

		td = document.createElement('td');
		td.textContent = toDo.task;
		tr.appendChild(td)

	}


}

function getToDo(toDoId) {

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users/' + toDoId);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				let toDoJson = xhr.responseText;
				let toDo = JSON.parse(toDoJson);
				displayToDo(toDo);
			}
			else {
				displayError('To Do not found: ' + toDoId);
			}

		}
	};
	xhr.send();
}


function displayToDo(toDo) {
	let dataDiv = document.getElementById('toDoData');
	dataDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = toDo.name;
	dataDiv.appendChild(h1);

	let bq = document.createElement('blockquote');
	bq.textContent = toDo.title;
	dataDiv.appendChild(bq);
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	let li = document.createElement('li');
	li = document.createElement('li');
	li.textContent = "To Do Task: " + toDo.task;
	ul.appendChild(li);
	li = document.createElement('li');

}
function displayError(errorMsg) {
	let dataDiv = document.getElementById('toDoData');


	dataDiv.textContent = errorMsg;
}

function addNewToDo(newToDo) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.readyState === 201) {
				let toDo = JSON.parse(xhr.responseText);
				displayToDo(toDo);
			}

		}
	};

	xhr.setRequestHeader("Content-type", "users/json"); 
	let newToDoJson = JSON.stringify(newToDo);
	xhr.send(newToDoJson); 



}



function updateAToDo(updateToDo, toDoId) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/users/' + toDoId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let toDo = JSON.parse(xhr.responseText);
				console.log(toDo);
			}
			else {
				console.error('PUT Request failed: ' + xhr.status);
				displayError('To Do not updated: ' + xhr.status + " : " + xhr.responseText);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "users/json");
	let updateToDoJson = JSON.stringify(updateToDo);
	xhr.send(updateToDoJson);
}

function deleteAToDo(toDoId) {
	let xhr = new XMLHttpRequest();
	
	xhr.open('DELETE', 'api/users/' + userId, true);
	xhr.onreadystatechange = function() {
		if (xhr.status === 204 && xhr.readyState === 4) {
			
				console.log("Delete Successful");
		} else {
			console.log('Delete Unsuccessful');
		}
	};
	xhr.send();
}