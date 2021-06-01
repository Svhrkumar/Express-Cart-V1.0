import React from 'react';

const Accordion = ({ title, children }) => {
	const [isOpen, setOpen] = React.useState(false);
	return (
		<div className='accordion-wrapper'>
			<div
				className={`accordion-title ${isOpen ? 'open' : ''}`}
				onClick={() => setOpen(!isOpen)}>
				{title}
				<i class='far fa-caret-down'></i>
			</div>
			<div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
				<div className='accordion-content'>{children}</div>
			</div>
		</div>
	);
};

export default Accordion;
