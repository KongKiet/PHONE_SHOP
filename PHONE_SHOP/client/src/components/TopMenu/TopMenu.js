import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
   
} from 'reactstrap';
import {connect} from 'react-redux';
import './TopMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const TopMenu = (props) => {
    var {carts} = props;
    var countCarts = 0;
    for (var cart of carts) {
        countCarts += cart.count
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <Collapse  navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/products">
                                Danh sách sản phẩm
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/carts">
                                  Giỏ hàng<FontAwesomeIcon icon={faShoppingCart} /> ({countCarts})
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/products_management">
                                Quản lý sản phẩm
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        carts : state.carts
    }
}

export default connect(mapStateToProps, null)(TopMenu);