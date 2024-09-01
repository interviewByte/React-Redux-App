import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.css'
const CardDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);

  console.log("getdat", getdata);

 
  useEffect(() => {
    const compare = () => {
      const comparedata = getdata.filter((e) => e.id === parseInt(id, 10)); 
      setData(comparedata);
    };

    compare();
  }, [id,getdata]);

  return (
    <div className="container">
      <h2>Items Details Page</h2>
      <section className="container mt-3">
        <div className="itemsdetails d-flex">
          {data.map((ele) => {
            return (
              <>
                <div className="details_item_img">
                  <img src={ele.imgdata} alt="details image" />
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Resoraint</strong> | : Masala Theoryy
                        </p>
                        <p>
                          <strong>Price</strong> | : Masala Theoryy
                        </p>
                        <p>
                          <strong>Dishes</strong> | : Masala Theoryy
                        </p>
                        <p>
                          <strong>Total</strong> | : Masala Theoryy
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Rating</strong>
                          <span>3.5★</span>
                        </p>
                        <p>
                          <strong>Order Review</strong>
                          <span>3.5★</span>
                        </p>
                        <p>
                          <strong>Remove</strong>
                          <span>
                            <i class="fa-solid fa-trash"></i>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default CardDetails;
