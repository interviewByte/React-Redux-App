import React from 'react'
import { Table } from 'react-bootstrap';

const CardDetails = () => {
  return (
    <div className='container'>
      <h2>Items Details Page</h2>
      <section className='container mt-3'>
        <div className='itemsdetails'>
          <div className='item_img'>
            <img src='' alt='details image'/>
          </div>
          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><strong>Resoraint</strong> | : Masala Theoryy</p>
                  <p><strong>Price</strong> | : Masala Theoryy</p>
                  <p><strong>Dishes</strong> | : Masala Theoryy</p>
                  <p><strong>Total</strong> | : Masala Theoryy</p>
                </td>
                <td>
                <p><strong>Rating</strong><span>3.5★</span></p>
                <p><strong>Order Review</strong><span>3.5★</span></p>

                <p><strong>Remove</strong><span><i class="fa-solid fa-trash"></i></span></p>

                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CardDetails;
