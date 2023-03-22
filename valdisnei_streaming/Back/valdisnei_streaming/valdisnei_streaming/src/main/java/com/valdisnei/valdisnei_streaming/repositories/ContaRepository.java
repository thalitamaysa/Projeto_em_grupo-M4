package com.valdisnei.valdisnei_streaming.repositories;

import com.valdisnei.valdisnei_streaming.model.ContaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContaRepository extends JpaRepository<ContaModel,Long> {
}
