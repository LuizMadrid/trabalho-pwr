import { Header } from '../../_components/header';
import { StudentInfo } from '../../_components/student-info';

export default function page() {
	return (
		<>
			<Header />

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
		</>
	);
}