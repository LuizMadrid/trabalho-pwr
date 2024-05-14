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
import { Baby, Loader2, Users } from 'lucide-react';

export const SignInDialog = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [haveRole, setHaveRole] = useState(false);

	const handleFakeLogin = () => {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);

			setHaveRole(true);
		}, 2000);
	};

	const handleRole = (role: string) => {
		if (role === 'employee') {
			window.location.href = '/dashboard/employee';
		} 

		if (role === 'parent') {
			window.location.href = '/dashboard/parent';
		}
		
	};

	return (
		<>
			<DialogContent className='flex flex-col items-center justify-center border-none rounded-lg w-fit'>
				<DialogHeader>
					<DialogTitle className='text-2xl text-center'>Faça login na plataforma</DialogTitle>
					<DialogDescription className='text-center text-gray-400'>
						Conecte-se usando conta do Google ou Github. <br /> Ou crie uma conta com seu e-mail.
					</DialogDescription>
				</DialogHeader>

				<div className='flex justify-between w-full gap-4'>
					<Button 
						variant={'link'}
						disabled
						className='flex items-center justify-center w-full font-bold'>
						Google
					</Button>

					<Button 
						variant={'link'} 
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

					<div className='flex items-center justify-between text-sm gap-x-2'>
						<Button 
							variant={'link'}
							size='sm'
							className='px-1 h-fit'>
						Esqueci minha senha
						</Button>

						<Button 
							variant={'link'}
							size='sm'
							className='px-1 text-sm h-fit'>
						Criar conta
						</Button>
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

			{haveRole && (
				<DialogContent className='flex flex-col items-center justify-center border-none rounded-lg w-fit'>
					<DialogHeader>
						<DialogTitle className='text-2xl text-center'>Selecione seu perfil</DialogTitle>
						<DialogDescription className='text-center text-gray-400'>
							Selecione o perfil que deseja acessar.
						</DialogDescription>
					</DialogHeader>

					<div className='flex justify-between w-full gap-x-12'>
						<Button 
							onClick={() => handleRole('employee')} 
							variant='ghost' 
							className='flex flex-col items-center justify-between w-full h-full p-6 transition-colors rounded-lg gap-y-6 hover:bg-gray-700/20 hover:cursor-pointer hover:transition-colors group'>
							<div>
								<Users className='size-24' />

								<span 
									className='flex items-center justify-center w-full text-lg font-bold group-hover:underline'>
									Funcionário
								</span>
							</div>
						</Button>

						<Button 
							onClick={() => handleRole('parent')}
							variant='ghost' 
							className='flex flex-col items-center justify-between w-full h-full p-6 transition-colors rounded-lg gap-y-6 hover:bg-gray-700/20 hover:cursor-pointer hover:transition-colors group'>
							<div>
								<Baby className='size-24' />

								<span 
									className='flex items-center justify-center w-full text-lg font-bold group-hover:underline'>
									Responsável
								</span>
							</div>
						</Button>
					</div>
				</DialogContent>
			)}
		</>
	);
};