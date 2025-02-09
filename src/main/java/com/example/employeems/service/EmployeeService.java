package com.example.employeems.service;

import com.example.employeems.dto.EmployeeDTO;
import com.example.employeems.entity.Employee;
import com.example.employeems.repo.EmployeeRepo;
import com.example.employeems.util.Varlist;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private ModelMapper modelMapper;

    public String saveEmployee(EmployeeDTO employeeDTO) {
        if (employeeRepo.existsById(employeeDTO.getEmpID())){
                return Varlist.RSP_DUPLICATE;
        }else{
               employeeRepo.save(modelMapper.map(employeeDTO, Employee.class));
               return Varlist.RSP_SUCCESS;
        }

    }

    public String updateEmployee(EmployeeDTO employeeDTO) {
        if (employeeRepo.existsById(employeeDTO.getEmpID())){
            employeeRepo.save(modelMapper.map(employeeDTO, Employee.class));
            return Varlist.RSP_SUCCESS;
        }else{
            return Varlist.RSP_NO_DATA_FOUND;

        }

    }

    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employeesList = employeeRepo.findAll();
        return modelMapper.map(employeesList,new TypeToken<ArrayList<EmployeeDTO>>(){
        }.getType());

    }

    public EmployeeDTO searchEmployee(int empID) {
        if(employeeRepo.existsById(empID)){
            Employee employee =  employeeRepo.findById(empID).orElse(null);
            return modelMapper.map(employee,EmployeeDTO.class);

        }else{
            return null;
        }
    }

    public String deleteEmployee(int empID) {
        if (employeeRepo.existsById(empID)){
            employeeRepo.deleteById(empID);
            return Varlist.RSP_SUCCESS;

        }else{
            return Varlist.RSP_NO_DATA_FOUND;
        }

    }
}
