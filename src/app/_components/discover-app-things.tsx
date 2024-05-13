import { FastForward, FileUp, LockIcon, MonitorSmartphone, PersonStanding, SearchIcon } from 'lucide-react';
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
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
								<Features 
									title="Controle a saída do seu filho" 
									description="Com nosso serviço de autorização de saída, você pode autorizar a saída do seu filho com segurança." 
									icon={<PersonStanding className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Solicite documentos" 
									description="Ao solicitar documentos, escolha declarações, histórico escolar e outros documentos importantes." 
									icon={<FileUp className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Cadastre seu filho com facilidade" 
									description="Chega de burocracia! Cadastre seu filho com rapidez." 
									icon={<FastForward className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Gerenciado pelo funcionário" 
									description="Com nosso sistema de gerenciamento, os funcionários podem acessar informações importantes, como certidão de nascimento e comprovante de residência." 
									icon={<SearchIcon className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Segurança e privacidade confiáveis" 
									description="Nossa plataforma é segura e protege suas informações pessoais em conformidade com as leis de privacidade." 
									icon={<LockIcon className="w-6 h-6 text-white opacity-75" />}
								/>

								<Features 
									title="Acesse em qualquer dispositivo" 
									description="Nossa plataforma é responsiva e pode ser acessada em qualquer dispositivo, seja desktop, tablet ou smartphone." 
									icon={<MonitorSmartphone className="w-6 h-6 text-white opacity-75" />}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}