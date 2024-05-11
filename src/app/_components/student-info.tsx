import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export const StudentInfo = () => {
	return (
		<Card>
			<CardContent className="space-y-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="classrooms">Classrooms</Label>
						<div>
							<div>
								<div>Room 101</div>
								<div>Room 102</div>
								<div>Science Lab 1</div>
								<div>Science Lab 2</div>
								<div>Art Studio</div>
							</div>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="equipment">Equipment</Label>
						<div>
							<div>
								<div>Projector</div>
								<div>Laptop</div>
								<div>Whiteboard</div>
								<div>Microscope</div>
								<div>Camera</div>
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="students">Students</Label>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Grade</TableHead>
								<TableHead>Program</TableHead>
								<TableHead>Documents</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>John Doe</TableCell>
								<TableCell>9</TableCell>
								<TableCell>STEM</TableCell>
								<TableCell>
									<Button size="sm" variant="outline">
                            View
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Jane Smith</TableCell>
								<TableCell>7</TableCell>
								<TableCell>General</TableCell>
								<TableCell>
									<Button size="sm" variant="outline">
                            View
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Michael Johnson</TableCell>
								<TableCell>11</TableCell>
								<TableCell>Arts</TableCell>
								<TableCell>
									<Button size="sm" variant="outline">
                            View
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<div className="space-y-2">
					<Label htmlFor="requests">Requests</Label>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Student</TableHead>
								<TableHead>Reason</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>John Doe</TableCell>
								<TableCell>Doctor&apos;s Appointment</TableCell>
								<TableCell>
									<Badge variant="pending">Pending</Badge>
								</TableCell>
								<TableCell>
									<div className="flex gap-2">
										<Button size="sm" variant="outline">
                              Approve
										</Button>
										<Button size="sm" variant="outline">
                              Deny
										</Button>
									</div>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Jane Smith</TableCell>
								<TableCell>Family Emergency</TableCell>
								<TableCell>
									<Badge variant="approved">Approved</Badge>
								</TableCell>
								<TableCell>
									<Button size="sm" variant="outline">
                            View
									</Button>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Michael Johnson</TableCell>
								<TableCell>School Trip</TableCell>
								<TableCell>
									<Badge variant="denied">Denied</Badge>
								</TableCell>
								<TableCell>
									<Button size="sm" variant="outline">
                            View
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
};
