'use client';

import { useState } from 'react';

import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from './ui/dialog';

import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Loader2 } from 'lucide-react';

export const SignInDialog = () => {

	const [isLoading, setIsLoading] = useState(false);

	const handleFakeLogin = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	};
  
	return (
		<DialogContent className='flex flex-col items-center justify-center border-none rounded-lg w-fit'>
			<DialogHeader>
				<DialogTitle className='text-2xl text-center'>Faça login na plataforma</DialogTitle>
				<DialogDescription className='text-center text-gray-400'>
					Conecte-se usando conta do Google ou Github. <br /> Ou crie uma conta com seu e-mail.
				</DialogDescription>
			</DialogHeader>

			<div className='flex justify-between w-full gap-4'>
				<Button 
					variant={'outline'}
					disabled
					className='flex items-center justify-center w-full font-bold'>
					Google
				</Button>

				<Button 
					variant={'outline'} 
					disabled
					className='flex items-center justify-center w-full font-bold'>
					Github
				</Button>
			</div>

			<div className='flex items-center justify-center w-full gap-2 overflow-hidden'>
				<Separator orientation='horizontal' className='bg-gray-300' />
				<span>ou</span>
				<Separator orientation='horizontal' className='bg-gray-300' />
			</div>

			<div className='w-full space-y-2'>
				<div>
					<Label htmlFor='email' className='text-xs'>E-mail:</Label>
					<Input placeholder='E-mail' type='email' />
				</div>

				<div>
					<Label htmlFor='password' className='text-xs'>Senha:</Label>
					<Input placeholder='Senha' type='password' />
				</div>
			</div>

			<Button 
				variant={'primary'}
				onClick={handleFakeLogin}
				className='w-full'
				disabled={isLoading ? true : false}>
				{isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : 'Entrar'}
			</Button>
		</DialogContent>
	);
};