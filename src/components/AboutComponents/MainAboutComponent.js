import React, { Component, useState, setState } from "react";
import { TabContent, Nav, NavItem, NavLink, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import AboutTab from "./AboutComponent";
import Officers from "./OfficerComponent";
import FaqTab from "./FaqComponent";
import Join from './JoinComponent'
import classnames from "classnames";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.tabId,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        this.setState({
            activeTab: tab.tabId,
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.tabId !== prevProps.tabId) {
            this.setState({ activeTab: this.props.tabId });
        }
    }

    render() {
        const NavTabs = ({ navtab }) => {
            return (
                <>
                    {navtab.map((navtab) => {
                        return (
                            <Link to={`/about/${navtab.tabId}`} key={navtab.tabId}>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === navtab.tabId })}
                                        onClick={() => {
                                            this.toggle(navtab);
                                        }}
                                    >
                                        {" "}
                                        {navtab.text}
                                    </NavLink>
                                </NavItem>
                            </Link>
                        );
                    })}
                </>
            );
        };
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/home">Home</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>About Us</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Nav tabs justified>
                                <NavTabs navtab={this.props.navtab} />
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <AboutTab factscard={this.props.factscard} />
                                <Officers officers={this.props.officers} />
                                <FaqTab faq={this.props.faq} />
                                <Join states={this.props.states} />
                            </TabContent>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;