import { useRouter } from 'next/router'
import {useEffect, useState} from "react";

const OrderDetail = () => {
    const router = useRouter()
    const { id } = router.query

    const [order, setOrder]  = useState({})

    const getOrder = () => {
        fetch("http://localhost:8080/api/v1/orders/" + id)
            .then((response) => response.json())
            .then((data) => {
                setOrder(data)
                console.log(order)
            });
    }

    useEffect(() => {
        console.log('fetch data by id here')
        getOrder()
    }, [])

    return <p>Order: {id}</p>
}

export default OrderDetail