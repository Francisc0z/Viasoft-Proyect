package com.backend.crud.service;

import com.backend.crud.entity.Estado;
import com.backend.crud.repository.EstadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EstadoService {
    @Autowired
    EstadoRepository estadoRepository;

    public List<Estado> list(){
        return estadoRepository.findAll();
    }
    public void save(Estado estado){
        estadoRepository.save(estado);
    }
}
