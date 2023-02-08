package com.empulse.assignment.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "order_files")
public class OrderFile {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "path")
    private String path;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    @JsonIgnore
    private Order order;
}
