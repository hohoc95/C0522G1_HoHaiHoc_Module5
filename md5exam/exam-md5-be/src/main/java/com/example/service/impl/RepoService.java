package com.example.service.impl;

import com.example.dto.IRepoDto;
import com.example.model.Repo;
import com.example.repository.IRepoRepository;
import com.example.service.IRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RepoService implements IRepoService {
    @Autowired
    private IRepoRepository iRepoRepository;

    @Override
    public void save(Repo repo) {
        iRepoRepository.save(repo);
    }

    @Override
    public Optional<Repo> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void update(Repo repo) {

    }

    @Override
    public void deleteLogical(Integer id) {

    }

    @Override
    public Page<IRepoDto> searchRepo(String nameSearch, String dateInSearch, String dateEndSearch, Pageable pageable) {
        return null;
    }
}
