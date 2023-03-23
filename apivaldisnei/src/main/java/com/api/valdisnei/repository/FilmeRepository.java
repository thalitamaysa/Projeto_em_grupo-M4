package com.api.valdisnei.repository;

import com.api.valdisnei.model.Filme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmeRepository extends JpaRepository<Filme,Long> {
}
