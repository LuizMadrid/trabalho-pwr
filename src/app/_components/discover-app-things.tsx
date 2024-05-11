import { InboxIcon, LockIcon, MergeIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import { Features } from './features';

export default function PlatformDiscover() {
	return (
		<section className="w-full py-12 bg-slate-800 md:py-24 lg:py-32 xl:py-48">
			<div className="container px-4 md:px-6">
				<div className="grid items-center gap-6">
					<div className="flex flex-col justify-center space-y-8 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none bg-clip-text bg-gradient-to-r from-white to-gray-500">
								Descubra nossos recursos exclusivos
							</h1>
							<p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
								Nossos recursos são projetados para melhorar sua produtividade e otimizar seu fluxo de trabalho.
							</p>
						</div>

						<div className="w-full max-w-full mx-auto space-y-4">
							<div className="grid grid-cols-3 gap-8">
								<Features 
									title="Inbox Management" 
									description="Inbox Management helps you organize your emails and keep your inbox clutter-free." 
									icon={<InboxIcon className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Seamless Integration" 
									description="Seamless Integration allows you to connect with your favorite apps and services without leaving your inbox." 
									icon={<MergeIcon className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Advanced Customization" 
									description="With Advanced Customization, you can personalize your email client to suit your preferences and work style." 
									icon={<SettingsIcon className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Powerful Search" 
									description="Our Powerful Search feature allows you to find any email, contact, or file in seconds." 
									icon={<SearchIcon className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Reliable Security" 
									description="With Reliable Security, your data is always safe and protected." 
									icon={<LockIcon className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Easy Collaboration" 
									description="Easy Collaboration allows you to share and edit documents with your team in real time." 
									icon={<MergeIcon className="w-6 h-6 text-white opacity-75" />}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}