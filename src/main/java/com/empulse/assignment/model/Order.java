package com.empulse.assignment.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Calendar;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Order {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "subject")
    private String subject;

    @Column(name = "images", columnDefinition = "json")
    private String images;

    @Column(name = "order_date")
    @Temporal(TemporalType.DATE)
    private Calendar orderDate;

    @Column(name = "order_date_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar orderDateTime;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar createAt;

    @Column(name = "updated_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Calendar updatedAt;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;
}
