package com.api.valdisnei.repository;

import com.api.valdisnei.model.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist,Long> {
}
