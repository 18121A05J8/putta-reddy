import React, {useState} from 'react'

export default function Hook() {
	let [state,setState]=useState("reddy")
	return(
			<div>
				<h1>{state}</h1>
				<button onClick={ ()=> setState("roopesh")}>change name</button>
			</div>
		)
}