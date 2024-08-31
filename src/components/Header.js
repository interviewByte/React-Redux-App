import React, { useState } from "react";
import { Navbar, Nav, Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from "react-redux";
export const Header = () => {
    const getdata = useSelector((state)=>state.cartreducer.carts)
    console.log("getData",getdata.length)
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px"}}>
        <Container>
          <Link to='/' className="text-decoration-none text-light mx-3">Add to Cart</Link>
          <Nav className="me-auto">
            <Link to='/' className="text-decoration-none text-light">Home</Link>
          </Nav>
          <Badge badgeContent={getdata.length} color="primary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {getdata.length ? (
          <div style={{padding:"10px"}}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restoraunt</th>
                </tr>
              </thead>
              <tbody>
                {
                  getdata.map((e)=>{
                    return (
                      <>
                      <tr>
                        <td>
                          <img src={e.imgdata} alt="image" style={{width:"5rem",height:"5rem"}} />
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price {e.price}</p>
                          <p>Quantity {e.qnty}</p>
                        </td>
                      </tr>
                      </>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
        ):
        (
          <div className="d-flex justify-content-center align-item-center"style={{width:"24rem"}}>
          <i class="fa-solid fa-xmark smallclose" style={{position:"absolute",top:2,right:20,fontSize:"23px",cursor:"pointer"}} onClick={handleClose}></i>
              <p style={{fontSize:"22px"}}>Your Cart is Empty</p>
              <img src="" alt="cart_img" />
          </div>
        )}
      
      </Menu>
      </Navbar>
    </>
  );
};
