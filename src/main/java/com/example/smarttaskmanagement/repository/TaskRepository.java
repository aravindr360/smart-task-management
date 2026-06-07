package com.example.smarttaskmanagement.repository;

import com.example.smarttaskmanagement.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}