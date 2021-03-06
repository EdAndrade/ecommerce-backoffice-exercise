import style from './index.module.scss';
import { notification } from '../services/notifications';
import { NotificationContainer } from 'react-notifications';
import { useState, useEffect } from 'react';
import { API } from '../services/api/index';
import { useRouter } from 'next/router';
import LoginLayout from '../layouts/loginLayout';
import { StorageManager } from '../services/storageManager';

export default function IndexApp() {

	const [performingLogin, setPerformingLogin] = useState(false);
	const [userPhoneNumber, setUserPhoneNumber] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const router = useRouter();


	function performLogin(event){
		event.preventDefault();
		setPerformingLogin(true);
		notification.success({ message: 'uau', title: 'done'});

		API.admins.performLogin({
			phoneNumber: userPhoneNumber,
			password: userPassword

		}).then( response => {
			response.data.length > 0 ? handleLogin({success: true, response}) : handleLogin({success: false});
			setPerformingLogin(false);
		})
	}

	function handleLogin({success, response}){

		if(success){
			router.push('/admins');
			StorageManager.set({
				key: 'loggedUser',
				value: response.data[0]
			})
		}else{
			alert('Usuário não existe')
		}
	}

	return (

		<section className={style.indexPage}>

			<div className={`${style.left} ${style.childs}`}>
				<p>Ecommerce everywhere you want</p>
			</div>

			<div className={`${style.right} ${style.childs}`}>

				<div className="content">
					<p>Seja bem vindo</p>

					<form onSubmit={performLogin}>
						<input onChange={ (event) => setUserPhoneNumber(event.target.value) } type="text" placeholder='Telefone'/>
						<input onChange={ (event) => setUserPassword(event.target.value) } type="password" placeholder='Senha'/>

						<div className="button-loading">
							{ 
								performingLogin ? 
								<div className='simple-loading'></div> : 
								<button type="submit">Login</button>
							}
						</div>
						
					</form>
				</div>
			</div>
		</section>
	);
}

IndexApp.getLayout = function getLayout(page){
	return (
		<LoginLayout>
			{page}
		</LoginLayout>
	);
}