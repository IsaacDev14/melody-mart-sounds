import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave, AiOutlineClose } from "react-icons/ai";
import type { Employee } from "../types/types";

type EmployeeProps = {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (id: number | string) => void;
};

const EmployeeCard: React.FC<EmployeeProps> = ({ employee, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState<Employee>(employee);

  const handleSave = () => {
    if (!editedEmployee.name.trim() || !editedEmployee.role.trim()) return;
    
    onEdit(editedEmployee);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedEmployee(employee);
    setIsEditing(false);
  };

  const isSaveDisabled = !editedEmployee.name.trim() || !editedEmployee.role.trim();

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-3">
              <div>
                <label htmlFor={`name-${employee.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id={`name-${employee.id}`}
                  type="text"
                  value={editedEmployee.name}
                  onChange={(e) =>
                    setEditedEmployee({ ...editedEmployee, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter employee name"
                />
              </div>
              
              <div>
                <label htmlFor={`role-${employee.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  id={`role-${employee.id}`}
                  type="text"
                  value={editedEmployee.role}
                  onChange={(e) =>
                    setEditedEmployee({ ...editedEmployee, role: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter job role"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={handleSave}
                disabled={isSaveDisabled}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex-1"
              >
                <AiOutlineSave className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex-1"
              >
                <AiOutlineClose className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-3">
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Name</span>
                <p className="text-lg font-semibold text-gray-800 mt-1">{employee.name}</p>
              </div>
              
              <div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Role</span>
                <p className="text-lg text-gray-600 mt-1">{employee.role}</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex-1"
              >
                <AiOutlineEdit className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => onDelete(employee.id)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 flex-1"
              >
                <AiOutlineDelete className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;