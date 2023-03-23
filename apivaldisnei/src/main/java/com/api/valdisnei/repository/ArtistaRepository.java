package com.api.valdisnei.repository;


import com.api.valdisnei.model.Artista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ArtistaRepository extends JpaRepository<Artista,Long> {
}
