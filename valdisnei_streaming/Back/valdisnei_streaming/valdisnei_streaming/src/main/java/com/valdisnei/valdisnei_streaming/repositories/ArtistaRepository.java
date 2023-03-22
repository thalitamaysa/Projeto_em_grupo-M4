package com.valdisnei.valdisnei_streaming.repositories;


import com.valdisnei.valdisnei_streaming.model.ArtistaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistaRepository extends JpaRepository<ArtistaModel,Long> {
}
