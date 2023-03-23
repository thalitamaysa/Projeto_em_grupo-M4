package com.api.valdisnei.repository;

import com.api.valdisnei.model.Ator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtorRepository extends JpaRepository<Ator,Long> {
}
