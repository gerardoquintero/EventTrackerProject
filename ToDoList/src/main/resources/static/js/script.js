window.addEventListener(`load`, function(event){
	console.log('script.js loaded');
	init();
});

function init(){
	console.log('in init()');
	loadAllToDoList();
}

function loadAllToDoList(){
	///XHR stuff
	let xhr = new XMLHttpRequest();
	xhr.open(`GET`, `api/users`);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200) {
				let toDo = JSON.parse(xhr.responseText);
				displaySeperateToDoList(toDo);
			}
		}
	};
	xhr.send();
}

function displaySeperateToDoList(toDoList){
	let tbody = document.getElementById('toDoListBody');
	tbody.textContent = '';
	for ( let toDoPage of toDoList){
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		let td = document.createElement('td');
		td.textContent = toDoPage.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = toDoPage.name;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = toDoPage.task;
		tr.appendChild(td);
	}
	
	let toDoCountText = document.getElementById('todoCount').textContent;
	document.getElementById('todoCount').textContent = `${toDoCountText} ${toDoList.length}`; 
	
	document.newToDoForm.addFormButton.addEventListener('click', function(event){
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
			addNewToDoList(userForToDo);
				
	})
	
	
	document.updateToDoForm.updateToDoButton.addEventListener('click', function(event) {
		event.preventDefault();
		let form = document.updateToDoForm;
		let updateUserToDo = {
			name: 
			form.name.value,
			title:
			form.title.value,
			task:
			form.task.value }
		console.log(updateUserToDo);
		updateAToDoList(updateUserToDo);
		
	})
	xhr.send();
	
	document.deleteToDoForm.deleteToDoButton.addEventListener('click', function(event) {
		event.preventDefault();
		let form = document.deleteToDoForm;
		let deleteUserToDo = {
			name: 
			form.name.value,
			title:
			form.title.value,
			task:
			form.task.value }
		console.log(deleteUserToDo);
		deleteAToDoList(deleteUserToDo);
		
		
	})
	xhr.send();
	

	//DOM stuff
}