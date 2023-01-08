package com.example.service;

import com.example.dto.IRepoDto;
import com.example.model.Repo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IRepoService {
    void save(Repo repo);

    Optional<Repo> findById(Integer id);

    void update(Repo repo);

    void deleteLogical(Integer id);

    Page<IRepoDto> searchRepo(String nameSearch, String dateInSearch, String dateEndSearch, Pageable pageable);
}
