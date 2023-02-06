package com.empulse.assignment.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.Hibernate;

import java.util.Objects;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "customers")
public class Customer {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Name cannot be empty")
    @Column(name = "name")
    private String name;

    @NotNull(message = "Email cannot be empty")
    @Column(name = "email", unique = true)
    @Email
    private String email;

    @OneToMany(mappedBy = "customer")
    @JsonIgnore
    private Set<Order> orders;
}
