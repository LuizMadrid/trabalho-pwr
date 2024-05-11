import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export const AuthorizationInfo = () => {
	return (
		<Card>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="visitors">Visitors</Label>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Time In</TableHead>
								<TableHead>Time Out</TableHead>
								<TableHead>Purpose</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>John Doe</TableCell>
								<TableCell>9:15 AM</TableCell>
								<TableCell>10:30 AM</TableCell>
								<TableCell>Parent Meeting</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Jane Smith</TableCell>
								<TableCell>1:00 PM</TableCell>
								<TableCell>2:45 PM</TableCell>
								<TableCell>School Tour</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Michael Johnson</TableCell>
								<TableCell>3:30 PM</TableCell>
								<TableCell>4:45 PM</TableCell>
								<TableCell>Volunteer Work</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<div className="space-y-2">
					<Label htmlFor="attendance">Attendance</Label>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Student</TableHead>
								<TableHead>Date</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Reason</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>John Doe</TableCell>
								<TableCell>2023-05-01</TableCell>
								<TableCell>
									<Badge variant="absent">Absent</Badge>
								</TableCell>
								<TableCell>Illness</TableCell>
							</TableRow>
							<TableRow />
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
};
