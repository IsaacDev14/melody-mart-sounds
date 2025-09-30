import { Link } from "react-router-dom";
import type { Employee } from "../types/types";
import EmployeeCard from "./EmployeeCard";

type EmployeesListProps = {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: number | string) => void;
};

const EmployeesList: React.FC<EmployeesListProps> = ({ employees, onDelete, onEdit }) => {

  return (
    <div className="grid gap-4">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      <div><Link to={"/employeeform"} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add  New Employee</Link></div>
    </div>
  );
};

export default EmployeesList;
