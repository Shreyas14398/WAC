
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
           <div>
            <Navbar color="dark" light expand="md">  
            <NavbarBrand href="/">WAC</NavbarBrand>
                
                  <div className="search-bar">
                    <input 
                    value={this.state.term} 
                    onChange={event =>  this.onInputChange(event.target.value)}  />
                   </div>
            </Navbar>
            </div>
      
        );
    }

    onInputChange(term){

        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;