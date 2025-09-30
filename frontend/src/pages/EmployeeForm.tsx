import { useState } from "react";
import type { Employee } from "../types/types";

type EmployeeFormProps = {
  onAdd: (employee: Omit<Employee, "id">) => void;
};

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !role.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onAdd({ name: name.trim(), role: role.trim() });
    setName("");
    setRole("");
    setIsSubmitting(false);
  };

  const isFormValid = name.trim() && role.trim();

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add New Employee</h2>
          <p className="text-gray-600 mt-2">Enter employee details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role *
            </label>
            <input
              id="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter job role"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                Saving...
              </div>
            ) : (
              "Add Employee"
            )}
          </button>
        </form>

        <div className="mt-4 text-xs text-gray-500 text-center">
          * Required fields
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;