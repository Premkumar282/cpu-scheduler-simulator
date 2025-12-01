import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scheduleFCFS, scheduleSJF, scheduleRoundRobin, schedulePriority } from "@/utils/schedulingAlgorithms";
import { GanttChart } from "@/components/simulator/GanttChart";
import { MetricsDisplay } from "@/components/simulator/MetricsDisplay";
import { ProcessTable } from "@/components/simulator/ProcessTable";

interface Process {
  id: string;
  arrival: number;
  burst: number;
  priority?: number;
}

const Simulator = () => {
  const navigate = useNavigate();
  const [algorithm, setAlgorithm] = useState("fcfs");
  const [quantum, setQuantum] = useState(2);
  const [processes, setProcesses] = useState<Process[]>([
    { id: "P1", arrival: 0, burst: 8, priority: 2 },
    { id: "P2", arrival: 1, burst: 4, priority: 1 },
    { id: "P3", arrival: 2, burst: 9, priority: 3 },
    { id: "P4", arrival: 3, burst: 5, priority: 2 },
  ]);
  const [results, setResults] = useState<any>(null);

  const addProcess = () => {
    const newId = `P${processes.length + 1}`;
    setProcesses([...processes, { id: newId, arrival: 0, burst: 1, priority: 1 }]);
  };

  const removeProcess = (id: string) => {
    setProcesses(processes.filter(p => p.id !== id));
  };

  const updateProcess = (id: string, field: string, value: number) => {
    setProcesses(processes.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const runSimulation = () => {
    let result;
    switch (algorithm) {
      case "fcfs":
        result = scheduleFCFS(processes);
        break;
      case "sjf":
        result = scheduleSJF(processes);
        break;
      case "rr":
        result = scheduleRoundRobin(processes, quantum);
        break;
      case "priority":
        result = schedulePriority(processes);
        break;
      default:
        result = scheduleFCFS(processes);
    }
    setResults(result);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
            CPU Scheduler Simulator
          </h1>
          <div className="w-32" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <Card className="lg:col-span-1 p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20">
            <h2 className="text-xl font-bold mb-4 text-primary">Configuration</h2>
            
            <div className="space-y-4">
              <div>
                <Label>Algorithm</Label>
                <Select value={algorithm} onValueChange={setAlgorithm}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fcfs">First Come First Serve</SelectItem>
                    <SelectItem value="sjf">Shortest Job First</SelectItem>
                    <SelectItem value="rr">Round Robin</SelectItem>
                    <SelectItem value="priority">Priority Scheduling</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {algorithm === "rr" && (
                <div>
                  <Label>Time Quantum</Label>
                  <Input
                    type="number"
                    min="1"
                    value={quantum}
                    onChange={(e) => setQuantum(parseInt(e.target.value) || 1)}
                  />
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label>Processes</Label>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={addProcess}
                    className="h-8"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {processes.map((process) => (
                    <Card key={process.id} className="p-3 bg-background/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-primary">{process.id}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeProcess(process.id)}
                          className="h-6 w-6 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <Label className="text-xs">Arrival</Label>
                          <Input
                            type="number"
                            min="0"
                            value={process.arrival}
                            onChange={(e) => updateProcess(process.id, "arrival", parseInt(e.target.value) || 0)}
                            className="h-8"
                          />
                        </div>
                        <div>
                          <Label className="text-xs">Burst</Label>
                          <Input
                            type="number"
                            min="1"
                            value={process.burst}
                            onChange={(e) => updateProcess(process.id, "burst", parseInt(e.target.value) || 1)}
                            className="h-8"
                          />
                        </div>
                        {(algorithm === "priority") && (
                          <div className="col-span-2">
                            <Label className="text-xs">Priority</Label>
                            <Input
                              type="number"
                              min="1"
                              value={process.priority}
                              onChange={(e) => updateProcess(process.id, "priority", parseInt(e.target.value) || 1)}
                              className="h-8"
                            />
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Button
                onClick={runSimulation}
                className="w-full bg-gradient-to-r from-accent via-primary to-secondary hover:opacity-90"
                size="lg"
              >
                <Play className="mr-2 h-4 w-4" />
                Run Simulation
              </Button>
            </div>
          </Card>

          {/* Results Section */}
          <Card className="lg:col-span-2 p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20">
            <h2 className="text-xl font-bold mb-4 text-primary">Results</h2>
            
            {results ? (
              <Tabs defaultValue="gantt" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="gantt">Gantt Chart</TabsTrigger>
                  <TabsTrigger value="table">Process Table</TabsTrigger>
                  <TabsTrigger value="metrics">Metrics</TabsTrigger>
                </TabsList>
                
                <TabsContent value="gantt" className="mt-4">
                  <GanttChart ganttChart={results.ganttChart} />
                </TabsContent>
                
                <TabsContent value="table" className="mt-4">
                  <ProcessTable processes={results.processes} />
                </TabsContent>
                
                <TabsContent value="metrics" className="mt-4">
                  <MetricsDisplay metrics={results.metrics} />
                </TabsContent>
              </Tabs>
            ) : (
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <p>Configure processes and click "Run Simulation" to see results</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
