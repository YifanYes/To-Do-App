import React, { useState, useEffect } from "react";
import Tasks from "./tasks.jsx";
import weather from "./weather.png";

const Home = () => {
	//Variables de estado
	const [inputValue, setInputValue] = useState([]);
	const [listOfTasks, setListOfTasks] = useState([]);

	//Conseguir los datos de la API
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/yifan", {
			method: "GET"
		})
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => {
				console.log(data);
				setInputValue(data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	//Crea una lista que se va actualizando segun se va añadiendo nuevas tareas
	useEffect(() => {
		if (inputValue.length) {
			let arrayAux = inputValue.filter((_, index) => index != 0);
			setListOfTasks(
				arrayAux.map((task, index) => {
					return (
						<Tasks
							text={task}
							key={index}
							delete={deleteTask}
							index={index}
						/>
					);
				})
			);
		}
	}, [inputValue]);

	//Actualizar la lista de tareas de la base de datos
	useEffect(() => {
		console.log(inputValue);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/yifan", {
			method: "PUT",
			body: JSON.stringify(inputValue),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp);
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.log(error);
			});
	}, [inputValue]);

	//Borrar tareas de la base de datos
	const deleteTask = indexDelete => {
		setInputValue(
			inputValue.filter((_, index) => index - 1 !== indexDelete)
		);
	};

	//Pinta toda la pagina
	return (
		<div className="container justify-content-center">
			<header className="title d-flex">
				<p>To Do List</p>
				<img src={weather} className="weather"></img>
			</header>
			<input
				type="text"
				className="input form-control"
				placeholder="What needs to be done?"
				onKeyPress={event => {
					if (event.target.value != " ") {
						if (event.key === "Enter") {
							setInputValue([
								...inputValue,
								{ label: event.target.value, done: false }
							]);
							event.currentTarget.value = "";
						}
					}
				}}
			/>
			<ul className="list">{listOfTasks}</ul>
			<p className="remaining">{listOfTasks.length} tasks remaining</p>
		</div>
	);
};

export default Home;
