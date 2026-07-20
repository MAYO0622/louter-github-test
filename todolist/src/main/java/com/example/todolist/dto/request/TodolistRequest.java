package com.example.todolist.dto.request;

import com.example.todolist.entity.TodolistCategory;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class TodolistRequest {

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @NotNull
    private TodolistCategory category;


}
