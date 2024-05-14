import React, { useEffect, useState } from "react";
import Appointment from "../../components/secundary/Appointment/Appointment";
import styles from "./myAppointments.module.css";
import axios from "axios";

export default function MyAppointments() {
	const [citas, setCitas] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/appointments")
			.then((response) => response.data)
			.then((data) => setCitas(data))
			.catch((error) => console.error("Error al obtener los datos de la base de datos", error));
	}, []);

	return (
		<div className={styles.box}>
			{citas.map((cita) => (
				<Appointment key={cita.id} date={cita.date} time={cita.time} status={cita.status} />
			))}
		</div>
	);
}
