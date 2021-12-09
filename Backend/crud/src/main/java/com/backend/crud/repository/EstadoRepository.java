package com.backend.crud.repository;

import com.backend.crud.entity.Estado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstadoRepository  extends JpaRepository<Estado, String> {

}
