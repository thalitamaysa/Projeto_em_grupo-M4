package com.valdisnei.valdisnei_streaming.repositories;

import com.valdisnei.valdisnei_streaming.model.PlaylistModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistRepository extends JpaRepository<PlaylistModel,Long> {
}
