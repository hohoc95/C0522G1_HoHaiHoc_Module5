package com.example.repository;

import com.example.dto.IRepoDto;
import com.example.model.Repo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IRepoRepository extends JpaRepository<Repo, Integer> {
    @Query(value = "select repo.repo_id as id, repo.repo_code as code, repo.repo_amount as amount, repo.repo_date_in as in, repo.repo_date_start as start, repo.repo_date_end as end from repo join product on repo.product_id = product.product_id where product.product_name like %:nameSearch% and repo.repo_date_in like %:dateInSearch% and repo.repo_date_end like %:dateEndSearch% and repo.is_delete = false",
            countQuery = "select count (*)" +
                    "from repo join product on repo.product_id = product.product_id where product.product_name like %:nameSearch% and repo.repo_date_in like %:dateInSearch% and repo.repo_date_end like %:dateEndSearch% and repo.is_delete = false",
            nativeQuery = true)
    Page<IRepoDto> searchRepo(@Param("nameSearch") String nameSearch,
                                 @Param("dateInSearch") String dateInSearch,
                                 @Param("dateEndSearch") String dateEndSearch,
                                 Pageable pageable);
}
