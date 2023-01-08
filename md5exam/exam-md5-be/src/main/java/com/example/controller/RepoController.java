package com.example.controller;

import com.example.dto.IRepoDto;
import com.example.dto.RepoDto;
import com.example.model.Product;
import com.example.model.Repo;
import com.example.service.IProductService;
import com.example.service.IRepoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/repo")
@CrossOrigin("*")
public class RepoController {
    @Autowired
    private IRepoService iRepoService;

    @Autowired
    private IProductService iProductService;

    @GetMapping("/list/{nameSearch}&{dateInSearch}&{dateEndSearch}")
    public ResponseEntity<Page<IRepoDto>> getAllRepoPaging(@PageableDefault(value = 5) Pageable pageable,
                                                           @PathVariable("nameSearch") String nameSearch,
                                                           @PathVariable("dateInSearch") String dateInSearch,
                                                           @PathVariable("dateEndSearch") String dateEndSearch){
        Page<IRepoDto> repoDtos = iRepoService.searchRepo(nameSearch, dateInSearch, dateEndSearch, pageable);
        return new ResponseEntity<>(repoDtos, HttpStatus.OK);
    }
    @GetMapping("/product-list")
    public ResponseEntity<List<Product>> getAllProduct() {
        List<Product> product = iProductService.findAll();
        if (product.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    @DeleteMapping("/delete-repo/{id}")
    public ResponseEntity<Repo> deleteRepo(@PathVariable Integer id) {
        Optional<Repo> repo = iRepoService.findById(id);
        if (!repo.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iRepoService.deleteLogical(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createRepo(@Valid @RequestBody RepoDto repoDto,
                                           BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(),
                    HttpStatus.BAD_REQUEST);
        }

        Repo repo = new Repo();
        BeanUtils.copyProperties(repoDto, repo);
        iRepoService.save(repo);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/edit/{id}")
    public ResponseEntity<?> editRepo(@Valid @RequestBody RepoDto repoDto,
                                         @PathVariable Integer id,
                                         BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(),
                    HttpStatus.BAD_REQUEST);
        }

        Optional<Repo> repo = iRepoService.findById(id);

        if (repo.isPresent()) {
            BeanUtils.copyProperties(repoDto, repo.get());
            iRepoService.update(repo.get());
            return new ResponseEntity<>(repo.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
