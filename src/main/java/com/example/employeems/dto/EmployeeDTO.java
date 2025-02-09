package com.example.employeems.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class EmployeeDTO {
    private int empID;
    private String empName;
    private String address;
    private String mobile;
}
