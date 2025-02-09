package com.example.employeems.dto;


import lombok.*;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ResponseDTO {
    private String code;
    private String message;
    private Object content;

}
