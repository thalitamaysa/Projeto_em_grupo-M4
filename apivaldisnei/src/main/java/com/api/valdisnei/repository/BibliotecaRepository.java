package com.api.valdisnei.repository;

import com.api.valdisnei.model.Biblioteca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BibliotecaRepository extends JpaRepository<Biblioteca,Long> {
}
