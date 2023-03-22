package com.valdisnei.valdisnei_streaming.repositories;


import com.valdisnei.valdisnei_streaming.model.MidiaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MidiaRepository extends JpaRepository<MidiaModel,Long> {
}
