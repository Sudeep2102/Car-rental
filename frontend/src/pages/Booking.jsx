import React, { useState, useEffect, useContext } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/car.css";
import { Container, Row, Col, Button } from "reactstrap";
import Booking from './Booking';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from "../utils/config";
import {AuthContext} from "../context/AuthContext";

const Cars = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    
    const {user} = useContext(AuthContext)
    const {
        loading,
        error
    } = useFetch(`${BASE_URL}/cars?page=${page}`);
    const { data: carCount } = useFetch(`${BASE_URL}/cars/search/getCarCount`);

    useEffect(() => {
        const pages = Math.ceil(carCount / 8);
        setPageCount(pages);
        window.scrollTo(0, 0);
    }, [page, carCount]);

    const handleClick = async e =>{
        e.preventDefault();
        try {
          const res = await fetch(`${BASE_URL}/booking`, {
            method: "delete",
          });
    
          const result = await res.json();
          if (!res.ok) {
            return alert(result.message);
          }
        } catch (err) {
          alert(err.message);
        }
      };
    return (
        <>
            <CommonSection title={'Bookings'} />
            <section>
                <Container>
                    <Row>
                    <Button color="primary" outline onClick={handleClick}>Delete all Bookings</Button>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    {loading && <h4 className="text-center pt-5"> loading ....</h4>}
                    {error && <h4 className="text-center pt-5"> {error}</h4>}
                    {
                        !loading && !error && <Row>
                            <Col lg="12">
                                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                    {[...Array(pageCount).keys()].map(number => (
                                        <span key={number} onClick={() => setPage(number)}
                                            className={page === number ? "active__page" : ""}
                                        >
                                            {number + 1}
                                        </span>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    }
                </Container>
            </section>
        </>
    )
};

export default Cars;
