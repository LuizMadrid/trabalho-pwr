import Link from 'next/link';

import { Button } from './ui/button';

import { LogIn, MenuIcon, SchoolIcon } from 'lucide-react';

export const Header = () => {
	return (
		<header className="flex items-center justify-between px-6 py-4 text-white bg-slate-800">
			<div className="flex items-center gap-4">
				<Link href="#">
					<SchoolIcon className="w-8 h-8" />
					<span className="sr-only">
						School Management System
					</span>
				</Link>
				{/* <nav className="items-center hidden gap-6 md:flex">
					<Link className="hover:text-gray-300" href="#">
              Students
					</Link>
					<Link className="hover:text-gray-300" href="#">
              Documents
					</Link>
					<Link className="hover:text-gray-300" href="#">
              Reservations
					</Link>
					<Link className="hover:text-gray-300" href="#">
              Leave Requests
					</Link>
				</nav> */}
			</div>

			<div className="flex items-center gap-4">
				<Button className="hidden md:gap-2 md:flex" size="sm" variant="secondary">
					<LogIn className="size-4" />
					Entrar
				</Button>

				<Button className="md:hidden" size="icon" variant="secondary">
					<MenuIcon className="size-6" />
					<span className="sr-only">Toggle navigation</span>
				</Button>
			</div>
		</header>
	);
};
