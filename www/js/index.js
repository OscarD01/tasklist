/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);


// var tasks = ["Item 1","Item 2","Item 3"];
var tasks;
var nameTask;

// localStorage.setItem('taskList', JSON.stringify(tasks));


function loadList() {
	tasks = JSON.parse(localStorage.getItem('taskList'));
	
	for(i = 0; i<tasks.length; i++){
		$('#taskList').append('<li><a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="#">'+tasks[i]+'</a></li>');
	}
	$('#taskList').listview("refresh");

}

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    $('#addButton').click(addItemTaskList);
    loadList();
}

function addItemTaskList(){

	nameTask = $('#nameNewTask').val();

	tasks = JSON.parse(localStorage.getItem('taskList'));

	tasks.push(nameTask);
	localStorage.setItem('taskList', JSON.stringify(tasks));

	$('#taskList').empty();
	loadList();
	alert("Se ha añadido un item con el nombre " + nameTask);

}
