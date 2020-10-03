import React from 'react';

const Account = ()=>{
	return(
		<div className='account-container'>
			<div className = 'account-header'>
				<p>Your account details</p>
			</div>
			<div className = 'account-content'>
				<p>User name: NTramsen</p>
				<p>Email address: ntramsen112@gmail.com</p>
				<p>Student ID: 1234567</p>
				<p>Password: ********</p>
			</div>
			<div className = 'edit-account'>
				<button type='button'>Edit details</button>
				<button type='button'>Change password</button>
			</div>
		</div>
	);
}

export default Account;