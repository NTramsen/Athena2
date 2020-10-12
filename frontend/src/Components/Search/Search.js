import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Search.css';

const Search = ()=>{
	const getItems = ()=>{
		return [
			{
				name: "Stethoscope",
				return_date: "8 hours",
				item_id: 23801
			},
			{
				name: "Behavioural biology textbook",
				return_date: "2 days ",
				item_id: 48920
			},
			{
				name: "Design kit",
				return_date: "6 days ",
				item_id: 98384
			},
			{
				name: "Equipment X",
				return_date: "1 days ",
				item_id: 13645
			},
			{
				name: "Equipment Y",
				return_date: "16 hours ",
				item_id: 36756
			}

		];
	}







	return(
		<div className='search-container'>
			<div className='search-header'>
				<p className = 'search_title'>Search for items</p>
			</div>
			<input className = 'search-form'
				placeholder = 'Enter item name'
				type = 'text'></input>
			<span>     </span>
			<button className = 'search-button btn'><FaIcons.FaArrowAltCircleRight size={30}/></button>
			



			<div className='popular-search-h'>
				<p className = 'popular-search'>Frequent Search 
				<FaIcons.FaSearch size={15}/></p>
			</div>

			<div className = 'popular-list'>
					{getItems().map((item, index)=>{
						return(
							<p className="item_na">{item.name}</p>	
						)
					})}
			</div>
		</div>	
		
	);
}

export default Search;
