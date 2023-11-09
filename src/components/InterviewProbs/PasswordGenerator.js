import React, { useState, useEffect, useCallback, useRef } from "react";

export default function PasswordGenerator() {
	const [password, setPassword] = useState("");
	const [numberAllowed, setnumberAllowed] = useState(false);
	const [charAllowed, setcharAllowed] = useState(false);
	const [length, setLength] = useState(8);
	const [isCopied, setIsCopied] = useState(false);
	const inputRef = useRef(null);
	// console.log("num", numberAllowed);
	// console.log("char", charAllowed);
	//console.log(Math.floor(Math.random() * 8 + 1));
	//console.log(inputRef);

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (charAllowed) {
			str += "!@#$%^&*()";
		}
		if (numberAllowed) {
			str += "1234567890";
		}
		//console.log("current str", str);
		for (let i = 0; i < length; i++) {
			pass += str.charAt(Math.floor(Math.random() * str.length + 1));
		}
		setPassword(pass);
	}, [numberAllowed, charAllowed, length, setPassword]);

	useEffect(() => {
		passwordGenerator();
		setIsCopied(false);
	}, [length, numberAllowed, charAllowed, passwordGenerator]);
	return (
		<div>
			<div>
				<input type="text" ref={inputRef} value={password} readOnly />
				<button
					onClick={() => {
						inputRef.current?.select();
						window.navigator.clipboard.writeText(password);
						setIsCopied(true);
					}}
				>
					{!isCopied ? "Copy" : "Copied"}
				</button>
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<input
					type="range"
					value={length}
					min={6}
					max={24}
					onChange={(e) => setLength(e.target.value)}
				/>
				<label>
					length <span>{length}</span>
				</label>

				<input
					type="checkbox"
					value={numberAllowed}
					onChange={() => setnumberAllowed(!numberAllowed)}
				/>
				<label>Numbers </label>

				<input
					type="checkbox"
					value={charAllowed}
					onChange={() => setcharAllowed(!charAllowed)}
				/>
				<label>charecters</label>
			</div>
		</div>
	);
}
