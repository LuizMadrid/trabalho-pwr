import { ReactElement } from 'react';

interface FeaturesProps {
  title: string;
  description: string;
  icon: ReactElement;
}

export const Features = ({ title, description, icon }: FeaturesProps) => {
	return (
		<div className="flex flex-col items-center p-4 space-y-2 border-gray-800 rounded-lg">
			<div className="p-3 bg-black bg-opacity-50 rounded-full">
				{icon}
			</div>

			<h2 className="text-xl font-bold text-white">
				{title}
			</h2>

			<p className="text-zinc-200 dark:text-zinc-100">
				{description}
			</p>
		</div>
	);
};
