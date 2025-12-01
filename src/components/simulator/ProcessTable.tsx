import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ProcessResult {
  id: string;
  arrival: number;
  burst: number;
  priority?: number;
  completion: number;
  turnaround: number;
  waiting: number;
  response: number;
}

interface ProcessTableProps {
  processes: ProcessResult[];
}

export const ProcessTable = ({ processes }: ProcessTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Process</TableHead>
            <TableHead>Arrival</TableHead>
            <TableHead>Burst</TableHead>
            <TableHead>Completion</TableHead>
            <TableHead>Turnaround</TableHead>
            <TableHead>Waiting</TableHead>
            <TableHead>Response</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {processes.map((process) => (
            <TableRow key={process.id}>
              <TableCell className="font-bold text-primary">{process.id}</TableCell>
              <TableCell>{process.arrival}</TableCell>
              <TableCell>{process.burst}</TableCell>
              <TableCell>{process.completion}</TableCell>
              <TableCell>{process.turnaround}</TableCell>
              <TableCell>{process.waiting}</TableCell>
              <TableCell>{process.response}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
