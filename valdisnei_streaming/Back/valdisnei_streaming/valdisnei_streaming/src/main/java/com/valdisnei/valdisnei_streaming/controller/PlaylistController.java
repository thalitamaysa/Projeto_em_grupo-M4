package com.valdisnei.valdisnei_streaming.controller;


import com.valdisnei.valdisnei_streaming.domain.model.PlaylistModel;
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
    public ResponseEntity<List<PlaylistModel>> listarPlaylists(){
        List<PlaylistModel> playlists = pr.findAll();
        return ResponseEntity.ok(playlists);
    }

    /*GET puxando pelo ID */
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<PlaylistModel> buscarPlaylistId(@PathVariable Long id){
        Optional<PlaylistModel> existingPlaylist = pr.findById(id);

        if (existingPlaylist.isPresent()){
            return ResponseEntity.ok(existingPlaylist.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    /*POST */
    @PostMapping
    public ResponseEntity<PlaylistModel> criarPlaylist(@RequestBody PlaylistModel playlist){
        PlaylistModel novaPlaylist = pr.save(playlist);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaPlaylist);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlaylistModel> atualizarPlaylist(@PathVariable Long id, @RequestBody PlaylistModel playlist){
        Optional<PlaylistModel> existingPlaylist = pr.findById(id);

        if (existingPlaylist.isPresent()){
            PlaylistModel playlistModel = existingPlaylist.get();
            playlist.setMusicaModel(playlistModel.getMusicaModel());
            playlist.setMusicaModel(playlistModel.getMusicaModel());
            playlist.setOrdem(playlistModel.getOrdem());
            playlist.setMidiaAtual(playlistModel.getMidiaAtual());
            PlaylistModel playlistModelAtual = pr.save(playlist);
            return ResponseEntity.ok(playlistModelAtual);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<PlaylistModel> deletarPlaylist(@PathVariable Long id){
        Optional<PlaylistModel> existingPlaylist = pr.findById(id);

        if(existingPlaylist.isPresent()){
            pr.deleteById(id);
            return ResponseEntity.ok().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }


}
