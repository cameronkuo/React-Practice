import React from "react";

export default class Reservation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: [],
			numberOfGuests: 2,
			flavor: [],
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value =
			target.type === "checkbox"
				? target.value
				: target.type === "select-multiple"
				? Array.from(target.selectedOptions).map((option) => option.value)
				: target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
		console.log(target.type, value, this.state);
	}

	render() {
		return (
			<form>
				<label>
					Is going:
					<input
						name="isGoing"
						type="checkbox"
						value="123"
						onChange={this.handleChange}
					/>
					<input
						name="isGoing"
						type="checkbox"
						value="456"
						onChange={this.handleChange}
					/>
				</label>
				<br />
				<label>
					Number of guests:
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Pick your favorite flavor:
					<select
						name="flavor"
						multiple
						value={this.state.flavor}
						onChange={this.handleChange}
					>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</label>
			</form>
		);
	}
}
