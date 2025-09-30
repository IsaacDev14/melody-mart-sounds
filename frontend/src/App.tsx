import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from "react";
import type { Employee } from "./types/types";
import EmployeesList from "./pages/EmployeesList";
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from "./services/apiServices";
import EmployeeForm from "./pages/EmployeeForm";




function App() {
const[employees, setEmployees] = useState<Employee[]>([]);

useEffect(() =>{
  const fetchEmployees = async() =>{
    try{
      const data = await getEmployees();
      setEmployees(data);
    } catch(error){
      console.error("Error fetching data", error)
    }
  }
  fetchEmployees();
},[])

const handleCreate = async(newEmployee: Omit<Employee, "id">) =>{
  try{
    const created = await createEmployee(newEmployee);
    setEmployees((prev) => [...prev, created]);
  } catch(error){
    console.error("Error creating Employee", error)
  }
};

const handleUpdate = async (employee: Employee) => {
  try {
    const updated = await updateEmployee(employee.id, employee);
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === employee.id ? updated : emp))
    );
  } catch (error) {
    console.error("Error Updating employee", error);
  }
};



const handleDelete = async(id: string|number)=>{
  try{
    await deleteEmployee(id);
    setEmployees((prev)=> prev.filter((emp) => emp.id !== id));
  } catch(error){
    console.error("Error Deleting Employee", error);
  }
}

  return (
    <Layout> <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employeeform" element={<EmployeeForm onAdd={handleCreate} />}/>
      <Route path="/employees" element={<EmployeesList employees= {employees} onEdit={handleUpdate} onDelete={handleDelete}/>}/>
    </Routes>
    </Layout>
  );
}

export default App;