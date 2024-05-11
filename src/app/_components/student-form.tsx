import { UploadIcon } from 'lucide-react';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export const StudentForm = () => {
	return (
		<Card>
			<CardContent className="space-y-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="firstName">
              First Name
						</Label>

						<Input 
							id="firstName" 
							placeholder="John" 
							required 
						/>
					</div>
          
					<div className="space-y-2">
						<Label htmlFor="lastName">Last Name</Label>
						<Input id="lastName" placeholder="Doe" required />
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" placeholder="john.doe@example.com" required type="email" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="phone">Phone</Label>
					<Input id="phone" placeholder="+1 (555) 555-5555" required />
				</div>
				<div className="space-y-2">
					<Label htmlFor="grade">Grade</Label>
					<Select required>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select grade" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1">Grade 1</SelectItem>
							<SelectItem value="2">Grade 2</SelectItem>
							<SelectItem value="3">Grade 3</SelectItem>
							<SelectItem value="4">Grade 4</SelectItem>
							<SelectItem value="5">Grade 5</SelectItem>
							<SelectItem value="6">Grade 6</SelectItem>
							<SelectItem value="7">Grade 7</SelectItem>
							<SelectItem value="8">Grade 8</SelectItem>
							<SelectItem value="9">Grade 9</SelectItem>
							<SelectItem value="10">Grade 10</SelectItem>
							<SelectItem value="11">Grade 11</SelectItem>
							<SelectItem value="12">Grade 12</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="program">Program</Label>
					<Select required>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select program" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="general">General Education</SelectItem>
							<SelectItem value="stem">STEM</SelectItem>
							<SelectItem value="arts">Arts</SelectItem>
							<SelectItem value="language">Language</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="documents">Documents</Label>
					<div>
						<div>
							<div className="flex flex-col items-center justify-center space-y-2">
								<UploadIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
								<p className="text-sm text-gray-500 dark:text-gray-400">
                          Drag and drop files or click to upload
								</p>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button type="submit">Register</Button>
			</CardFooter>
		</Card>
	);
};
