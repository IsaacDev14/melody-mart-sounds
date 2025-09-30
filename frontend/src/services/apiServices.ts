import axios from 'axios'
import type { Employee } from "../types/types";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {"Content-Type": "application/json"}
});

// get all the users
export const getEmployees = async() : Promise<Employee[]> => {
    const response =await api.get<Employee[]>("/employees");
    return response.data;
};

export const getEmployeeById = async(id: string | number) : Promise<Employee> => {
    const response = await api.get<Employee>(`employee/${id}`)
    return response.data;
};

export const createEmployee  = async(employee: Omit<Employee, "id">): Promise<Employee> => {
    const response = await api.post<Employee>("/employees",  employee);
    return response.data;
};

export const updateEmployee = async (
  id: number | string,
  updatedEmployee: Employee
): Promise<Employee> => {
  const res = await api.put(`/employees/${id}`, updatedEmployee);
  return res.data;
};


export const deleteEmployee = async(id: string | number): Promise<void> => {
    await api.delete(`/employees/${id}`);
};


