import { Header } from '../_components/header';
// import { StudentForm } from '../_components/student-form';
// import { StudentInfo } from '../_components/student-info';
// import { AuthorizationInfo } from '../_components/authorization-info';
import Image from 'next/image';
import { Button } from '../_components/ui/button';
import PlatformDiscover from '../_components/discover-app-things';

export default function page() {
	return (
		<>
			<Header />
		
			<main className="flex flex-col">
				<section className="min-h-[calc(90vh-68px)] py-12 bg-zinc-50 md:py-24 flex items-center dark:bg-gray-950">
					<div className="container px-4 mx-auto md:px-6">
						<div className="grid items-center gap-8 lg:grid-cols-2">
							<div className="space-y-4">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Preparado à volta às aulas?
								</h1>

								<p className="text-gray-500 dark:text-gray-400 md:text-lg">
									Para pais preocupados acesse nosso portal e veja as notas e frequência do seu filho. Solicite documentos e veja o histórico escolar e autorize a saída do seu filho.
								</p>

								<p>
									<Button 
										size="lg" 
										variant="primary">
										Acesse o Portal
									</Button>
								</p>
							</div>

							<div className="relative w-full overflow-hidden rounded-lg rounded-l-none h-80">
								<Image
									alt="School Image"
									className="object-cover"
									src="https://www.unip.br/assets/img/home/enem-500x.webp"
									// src="https://i0.wp.com/lr1.com.br/wp-content/uploads/2019/09/a4-uNIP-ara%C3%A7atuba.jpg?fit=2048,1267&ssl=1"
									fill
									sizes='100%'
								/>

								<div className='absolute size-full bg-gradient-to-r from-zinc-50 from-5% to-50% to-transparent' />
							</div>
						</div>
					</div>
				</section>

				<section>
					<PlatformDiscover />
				</section>

				{/* <section className="py-12 md:py-24">
					<div className="container px-4 mx-auto md:px-6">
						<div className="max-w-2xl mx-auto space-y-6">
							<div className="space-y-2 text-center">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Registration</h2>
								<p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Fill out the form to enroll your child at Acme School.
								</p>
							</div>
							<StudentForm />
						</div>
					</div>
				</section>

				<section className="py-12 bg-gray-100 md:py-24 dark:bg-gray-950">
					<div className="container px-4 mx-auto md:px-6">
						<div className="max-w-2xl mx-auto space-y-6">
							<div className="space-y-2 text-center">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Teacher Dashboard</h2>
								<p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Manage your classroom and student information.
								</p>
							</div>
							<StudentInfo />
						</div>
					</div>
				</section>

				<section className="py-12 md:py-24">
					<div className="container px-4 mx-auto md:px-6">
						<div className="max-w-2xl mx-auto space-y-6">
							<div className="space-y-2 text-center">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Authorization Dashboard</h2>
								<p className="text-gray-500 dark:text-gray-400 md:text-xl">Manage school access and attendance.</p>
							</div>
							<AuthorizationInfo />
						</div>
					</div>
				</section> */}
				
			</main>
		</>
	);
}