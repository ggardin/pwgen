<script lang="ts">
	import Button from "$lib/Button.svelte";
	import CheckBox from "$lib/CheckBox.svelte";
	import Header from "$lib/Header.svelte";
	
	import { boxes } from "../constants/checkboxes";

	import "../app.css";

	let copied = false;

	// Reactive Values
	$: passwordLength = +20;
	$: maxLength = +50;
	$: minLength = +6;
	$: passwordString = "";
	$: passwordStrength = "";

	// this function is the framework for the getrandomLower, upper .etc, to reduce markup
	const getRandomFunc = (min: any, max: any) => {
		return String.fromCharCode(Math.floor(Math.random() * min) + max);
	};

	// this uses the getRandomFunc to get a random character from the ascii table
	const getRandomLower = () => getRandomFunc(26, 97);
	const getRandomUpper = () => getRandomFunc(26, 65);
	const getRandomNumber = () => getRandomFunc(10, 48);
	const getRandomSymbol = () => {
		const symbols = "!@#$%^&*(){}[]/,.";
		return String(symbols[Math.floor(Math.random() * symbols.length)]);
	};

	//this'll call the functions based on the checkbox values
	const randomFunc = {
		lower: getRandomLower,
		upper: getRandomUpper,
		number: getRandomNumber,
		symbol: getRandomSymbol,
	};

	let passwordGenerator = {
		// this'll remove and add a checked value to the checkbox
		CheckBox(index: string) {
			boxes.find((box) => {
				if (index === box.id) {
					box.checked = !box.checked;
				}
			});
		},
		// this'll generate a password based on the checkbox values, and run the functions or not
		generatePassword(
			upper: string,
			lower: string,
			number: string,
			symbol: string
		) {
			passwordString = "";
			// filter out unchecked types
			const typesCount = boxes.filter((box) => box.checked).length;
			const typesArr = boxes
				.filter((box) => box.checked)
				.map((box) => box.id);

			// don't run if nothing is checked or if the length is 0
			if (typesCount < 1 || passwordLength === 0) {
				return "";
			}
			// loop over the length, call the function for each type that is checked and add the value to the password string
			for (let i = 0; i <= passwordLength - 1; i += typesCount) {
				typesArr.forEach((type) => {
					const funcName = randomFunc[type];
					passwordString += funcName();
				});
				passwordString = passwordString.slice(0, passwordLength);
			}
			this.passwordStrength();
		},
		// Determine the strength of the password
		passwordStrength() {
			if (passwordLength <= 10) {
				passwordStrength = "weak";
			} else if (passwordLength <= 15) {
				passwordStrength = "medium";
			} else if (passwordLength >= 16) {
				passwordStrength = "strong";
			}
		},
		// copy to clipboard
		copyToClipboard() {
			if (passwordString.length !== 0) {
				setTimeout(() => {
					copied = false; // hide toast notification
				}, 4000);
			} else {
				return;
			}
			navigator.clipboard.writeText(passwordString);
			copied = true;
		},
	};
</script>

<main>
	<section class="masthead {passwordStrength}">
		<Header />
		<div class="password">
			<input type="text" value={passwordString} readonly/>
			<div class="action">
				<button
				class:disabled={copied || passwordString.length === 0}
				on:click={passwordGenerator.copyToClipboard}
				on:keypress={passwordGenerator.copyToClipboard}
				>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="13" height="13" x="9" y="9" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
				</button>
			</div>
		</div>
	</section>
	<section class="settings">
		<div class="length">
			<span>Length ({passwordLength})</span>
			<input
			type="range"
			min={minLength}
			max={maxLength}
			bind:value={passwordLength}
			on:change={() =>
					passwordGenerator.generatePassword(
						getRandomUpper,
						getRandomLower,
						getRandomNumber,
						getRandomSymbol
					)}
			/>
		</div>
		<div class="filter">
			{#each boxes as box, i (box.id)}
			<CheckBox
			{...box}
			on:checked={() => passwordGenerator.CheckBox(box.id)}
				/>
			{/each}
		</div>
		<Button
			on:click={() =>
				passwordGenerator.generatePassword(
					getRandomUpper,
					getRandomLower,
					getRandomNumber,
					getRandomSymbol
				)}
			on:click={passwordGenerator.copyToClipboard}
		/>
	</section>
	<span class="toast" class:active={copied}>
		Your {passwordStrength} password has been copied.
	</span>	
</main>

<style>

	.settings {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.masthead {
		--bg: #cdcdcd;
		color: var(--muted);
		background-color: var(--bg);
		border-bottom: 1px solid var(--shade);
	}
	.masthead.weak {
		--bg: #bc4749;
		background-color: var(--bg);
	}
	.masthead.medium {
		--bg: #e0a458;
		background-color: var(--bg);
	}
	.masthead.strong {
		--bg: #386641;
		background-color: var(--bg);
	}
	.masthead .password {
		position: relative;
		padding: 2em var(--padding);
	}
	.masthead input {
		width: 100%;
		height: 100%;
		font-size: 2em;
		background: none;
		padding: 0;
		border: 0;
	}
	.masthead .action {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 5;
		height: 100%;
		width: 8em;
		background: linear-gradient(270deg, var(--bg) 20%, rgba(255,255,255,0) 100%);
	}
	.masthead button {
		position: absolute;
		right: var(--padding);
		height: 100%;
		border: none;
		background: transparent;
	}
	.masthead button > svg {
		width: 1em;
		height: 1em;
		fill: none;
		stroke: var(--muted);
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-width: 2;
	}

	.length {
		display: flex;
		flex-direction: column;
	}

	.length span {
		text-transform: uppercase;
		letter-spacing: 0.2px;
		font-size: 1rem;
	}

	.filter {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
	}

	.toast {
		opacity: 0;
		position: absolute;
		left: var(--padding);
		right: var(--padding);
		border-radius: 1em;
		top: -2em;
		height: 2em;
		line-height: 2em;
		background-color: aliceblue;
		color: black;
		max-width: var(--container-w);
		margin: 0 auto;
		text-align: center;
		line-height: 1.1;
	}

	.toast.active {
		opacity: 1;
		top: var(--padding);
	}

</style>
