package com.valdisnei.valdisnei_streaming.controller;

import com.valdisnei.valdisnei_streaming.domain.model.BibliotecaModel;
import com.valdisnei.valdisnei_streaming.repositories.BibliotecaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/bibliotecas")
public class BibliotecaController {

    @Autowired
    private BibliotecaRepository br;

    @GetMapping
    public ResponseEntity<List<BibliotecaModel>> listBiblioteca(){
        List<BibliotecaModel> bibliotecas = br.findAll();
        return ResponseEntity.ok(bibliotecas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BibliotecaModel> buscarBibliotecaPorId(@PathVariable Long id){
        Optional<BibliotecaModel> existingBiblioteca = br.findById(id);

        if(existingBiblioteca.isPresent()){
            return ResponseEntity.ok(existingBiblioteca.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<BibliotecaModel> criarBiblioteca(@RequestBody BibliotecaModel bibliotecaModel){
        BibliotecaModel bm = br.save(bibliotecaModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(bm);
    }
    

}
