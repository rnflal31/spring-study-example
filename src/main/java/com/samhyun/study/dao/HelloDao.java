package com.samhyun.study.dao;

import com.samhyun.study.domain.Hello;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by samhyun on 15. 9. 3.
 */
public interface HelloDao extends JpaRepository<Hello, Integer> {
}
