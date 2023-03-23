package com.api.valdisnei.repository;

import com.api.valdisnei.model.Musica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicaRepository extends JpaRepository<Musica,Long> {
}
