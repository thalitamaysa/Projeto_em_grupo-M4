package com.api.valdisnei.repository;


import com.api.valdisnei.model.Midia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MidiaRepository extends JpaRepository<Midia,Long> {
}
