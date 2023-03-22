package com.valdisnei.valdisnei_streaming.repositories;

import com.valdisnei.valdisnei_streaming.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel,Long>{
}
