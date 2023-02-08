package com.empulse.assignment.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "subject")
    private String subject;

    @NotNull
    @Column(name = "order_date")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date orderDate;

    @Column(name = "order_date_time")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date orderDateTime;

    // 0:PROCESSING;1:SUCCESS;2:FAILED
    @NotNull
    @Column(name = "status")
    private Integer status = 0;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @OneToMany(mappedBy = "order")
    private Set<OrderFile> orderFiles;
}
