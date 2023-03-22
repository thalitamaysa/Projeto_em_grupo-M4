package com.valdisnei.valdisnei_streaming.repositories;

import com.valdisnei.valdisnei_streaming.model.FilmeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmeRepository extends JpaRepository<FilmeModel,Long> {
}
