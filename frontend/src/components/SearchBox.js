import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const SearchBox = () => {
	const [query, setQuery] = useState('');
	const history = useHistory();
	const submitHandler = (e) => {
		e.preventDefault();
		history.push(`/search/name/${query}`);
	};
	return (
		<form className='search' onSubmit={submitHandler}>
			<div className='ctn-row'>
				<input
					className='search-input'
					type='text'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className='search-btn' type='submit'>
					<i className='fa fa-search'></i>
				</button>
			</div>
		</form>
	);
};

export default SearchBox;
