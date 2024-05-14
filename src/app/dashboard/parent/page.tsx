import { Header } from '../../_components/header';
import { StudentForm } from '../../_components/student-form';
import { AuthorizationInfo } from '../../_components/authorization-info';

export default function page() {
	return (
		<>
			<Header />

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
			</section> 

			<section className="py-12 md:py-24">
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
		</>
	);
}