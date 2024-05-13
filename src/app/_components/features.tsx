import { ReactElement } from 'react';

interface FeaturesProps {
  title: string;
  description: string;
  icon: ReactElement;
}

export const Features = ({ title, description, icon }: FeaturesProps) => {
	return (
		<div className="flex flex-col items-center p-4 space-y-2 transition-colors rounded-lg hover:bg-gray-700/50 hover:cursor-default hover:transition-colors">
			<div className="p-3 rounded-full bg-black/50">
				{icon}
			</div>

			<div className='space-y-2 max-w-80'>
				<h2 className="text-xl font-bold text-white">
					{title}
				</h2>

				<p className="text-zinc-200 dark:text-zinc-100">
					{description}
				</p>
			</div>
		</div>
	);
};
