package com.valdisnei.valdisnei_streaming.repositories;


import com.valdisnei.valdisnei_streaming.domain.model.Midia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MidiaRepository extends JpaRepository<Midia,Long> {
}
