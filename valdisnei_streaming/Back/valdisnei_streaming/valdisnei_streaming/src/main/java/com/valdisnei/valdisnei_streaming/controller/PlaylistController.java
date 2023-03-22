package com.valdisnei.valdisnei_streaming.controller;


import com.valdisnei.valdisnei_streaming.model.PlaylistModel;
import com.valdisnei.valdisnei_streaming.repositories.PlaylistRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/playlist")
public class PlaylistController {

    public PlaylistRepository playlistRepository;

    @GetMapping
    public List<PlaylistModel> ListarPlaylist(){
        return playlistRepository.findAll();
    }

    @ResponseBody
    @RequestMapping(path = "/playlist",method = RequestMethod.POST)
    public void salvarPlaylist(@RequestBody PlaylistModel playlistModel ){

    }

}
