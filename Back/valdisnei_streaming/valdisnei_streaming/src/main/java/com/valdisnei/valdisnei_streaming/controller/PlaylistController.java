package com.valdisnei.valdisnei_streaming.controller;


import com.valdisnei.valdisnei_streaming.domain.model.Playlist;
import com.valdisnei.valdisnei_streaming.repositories.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/playlist")
public class PlaylistController {


    @Autowired
    private PlaylistRepository pr;

    /*GET*/
    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Playlist>> listarPlaylists(){
        List<Playlist> playlists = pr.findAll();
        return ResponseEntity.ok(playlists);
    }

    /*GET puxando pelo ID */
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Playlist> buscarPlaylistId(@PathVariable Long id){
        Optional<Playlist> existingPlaylist = pr.findById(id);

        if (existingPlaylist.isPresent()){
            return ResponseEntity.ok(existingPlaylist.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    /*POST */
    @PostMapping
    public ResponseEntity<Playlist> criarPlaylist(@RequestBody Playlist playlist){
        Playlist novaPlaylist = pr.save(playlist);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaPlaylist);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Playlist> atualizarPlaylist(@PathVariable Long id, @RequestBody Playlist playlist){
        Optional<Playlist> existingPlaylist = pr.findById(id);

        if (existingPlaylist.isPresent()){
            Playlist playlistModel = existingPlaylist.get();
            playlist.setMusica(playlistModel.getMusica());
            playlist.setMusica(playlistModel.getMusica());
            playlist.setOrdem(playlistModel.getOrdem());
            playlist.setMidiaAtual(playlistModel.getMidiaAtual());
            Playlist playlistModelAtual = pr.save(playlist);
            return ResponseEntity.ok(playlistModelAtual);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Playlist> deletarPlaylist(@PathVariable Long id){
        Optional<Playlist> existingPlaylist = pr.findById(id);

        if(existingPlaylist.isPresent()){
            pr.deleteById(id);
            return ResponseEntity.ok().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }


}
