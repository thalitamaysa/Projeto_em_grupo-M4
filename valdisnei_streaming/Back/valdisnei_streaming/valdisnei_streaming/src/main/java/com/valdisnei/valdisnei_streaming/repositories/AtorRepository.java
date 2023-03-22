package com.valdisnei.valdisnei_streaming.repositories;

import com.valdisnei.valdisnei_streaming.model.AtorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtorRepository extends JpaRepository<AtorModel,Long> {
}
