package com.backend.crud.controller;

import antlr.StringUtils;
import com.backend.crud.dto.*;
import com.backend.crud.entity.Estado;
import com.backend.crud.service.EstadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/estado")
@CrossOrigin()
public class EstadoController {
    @Autowired
    EstadoService estadoService;
    @GetMapping("/lista")
    public ResponseEntity<List<Estado>>list(){
        List<Estado> list = estadoService.list();
        return new ResponseEntity<List<Estado>>(list, HttpStatus.OK);
    }

}
