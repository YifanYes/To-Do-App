import React from "react";
import PropTypes from "prop-types";

const Tasks = props => {
	return (
		<li>
			{props.text.label}
			<i
				className="fas fa-trash-alt"
				onClick={() => {
					props.delete(props.index);
				}}></i>
		</li>
	);
};

Tasks.propTypes = {
	text: PropTypes.object,
	delete: PropTypes.func,
	index: PropTypes.number
};

export default Tasks;
