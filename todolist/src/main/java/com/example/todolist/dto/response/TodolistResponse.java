package com.example.todolist.dto.response;

import com.example.todolist.entity.Todolist;
import com.example.todolist.entity.TodolistCategory;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TodolistResponse {
    private Long boardId;
    private String title;
    private String content;
    private TodolistCategory category;

    public static TodolistResponse from(Todolist todolist) {
        return TodolistResponse.builder()
                .todolistId(todolist.getTodolistId())
                .title(todolist.getTitle())
                .content(todolist.getContent())
                .category(todolist.getCategory())
                .build();

    }
}