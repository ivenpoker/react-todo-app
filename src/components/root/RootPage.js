import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import AssertionModal from "./comps/AssertionModal";

const __CARDS_IMG_CSS = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    objectFit: "cover",
    height: "250px",
    width: "100%"
};

const __CARD_TYPES = {
    MONGO_DB: "MONGO_DB",
    MYSQL_DB: "MYSQL_DB",
    BROWSER_DB: "BROWSER_DB"
};

const MONGO_TEST_IMG_SRC = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbTRpqA4SwWMV8OF4kroQEUiTamxMcoSlWLg&usqp=CAU";
const MYSQL_TEST_IMG_SRC = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0Xv8-kWnUEm-eN5QdCmMUMfZCOhn4D_r63Q&usqp=CAU";
const BROWSER_TEST_IMG_SRC = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq0UeW-aW-cI0OLZk6n9xQqx_D1kcn6nLp6A&usqp=CAU";

class RootPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAssertionModal: false,
            databaseType: ''
        }
    }

    toggleModalView = () => {
        this.setState((prevState) => ({
            ...prevState,
            showAssertionModal: !prevState.showAssertionModal
        }));
    }

    hideModalView = () => {
        this.toggleModalView();
    }

    handleCardClick = (cardType) => {
        console.log("Selected browser type:", cardType);
        this.setState((prevState) => ({
            ...prevState,
            databaseType: cardType
        }), () => {
            this.toggleModalView();
        });
    }

    render() {
        const {showAssertionModal, databaseType} = this.state;
        return (
            <Fragment>
                <AssertionModal showModal={showAssertionModal}
                                closeModal={this.hideModalView}
                                databaseType={databaseType === __CARD_TYPES.MYSQL_DB ? "mysql" :
                                               databaseType === __CARD_TYPES.MONGO_DB ? "mongodb" : "browser"}
                />
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-sm-3 col-md-2"/>
                        <div className="col-12 col-sm-6 col-md-8">
                            <div className="alert alert-dark bg-dark text-center text-white-50 shadow p-5 br-8 border-dark">
                                <h5>Hey, Dev!</h5>
                                <hr/>
                                Nice to have your use the <span className="font-weight-bold">Task Grind</span> application.
                                Before we proceed to having you setup, our application make use of multiple databases with
                                various <b>pros</b> and <b>cons</b>. So, we'll like to know which backend (database) service
                                you'll like to use during your application. If you're not quite sure on which, just select
                                the first one.
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-2"/>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-sm-4">
                            <div className="card ml-2 mr-2 full-width elem-zoom-in clickable shadow"
                                 onClick={() => this.handleCardClick(__CARD_TYPES.MONGO_DB)}>

                                <img className="card-img-top img-fluid" alt="MongoDB Image" src={MONGO_TEST_IMG_SRC} style={{...__CARDS_IMG_CSS}}/>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold text-center">
                                        <span className="badge badge-dark pt-2 pb-2 pr-4 pl-4">MongoDB</span>
                                    </h5>
                                    {/*<p className="card-text font-weight-light text-center">*/}
                                    {/*    MongoDB is a cross-platform document-oriented database program. Classified as a*/}
                                    {/*    NoSQL database program, MongoDB uses JSON-like documents with optional schemas.*/}
                                    {/*    MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public*/}
                                    {/*    License.*/}
                                    {/*</p>*/}
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-outline-dark btn-block font-weight-bold text-uppercase">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card ml-2 mr-2 full-width elem-zoom-in clickable shadow"
                                 onClick={() => this.handleCardClick(__CARD_TYPES.MYSQL_DB)}>

                                <img className="card-img-top img-fluid" alt="MySQL Image" src={MYSQL_TEST_IMG_SRC} style={{...__CARDS_IMG_CSS}}/>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold text-center">
                                        <span className="badge badge-dark  pt-2 pb-2 pr-4 pl-4">MySQL</span>
                                    </h5>
                                    {/*<p className="card-text font-weight-light text-center">*/}
                                    {/*    MySQL is an open-source relational database management system. Its name is a*/}
                                    {/*    combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL",*/}
                                    {/*    the abbreviation for Structured Query Language. One of the most used and recongnized*/}
                                    {/*    relational database.*/}
                                    {/*</p>*/}
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-outline-dark btn-block font-weight-bold text-uppercase">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="card ml-2 mr-2 full-width elem-zoom-in clickable shadow">
                                <img className="card-img-top img-fluid" src={BROWSER_TEST_IMG_SRC} style={{...__CARDS_IMG_CSS}}
                                    onClick={() => this.handleCardClick(__CARD_TYPES.BROWSER_DB)}/>

                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold text-center">
                                        <span className="badge badge-dark  pt-2 pb-2 pr-4 pl-4">Browser Based</span>
                                    </h5>
                                    {/*<p className="card-text font-weight-light text-center">*/}
                                    {/*    The read-only localStorage property allows you to access a Storage object for*/}
                                    {/*    the Document's origin; the stored data is saved across browser sessions.*/}
                                    {/*    <kbd>localStorage</kbd> is similar to sessionStorage, except that while data*/}
                                    {/*    stored in localStorage has no expiration time, data stored in sessionStorage*/}
                                    {/*    gets cleared when the page session ends*/}
                                    {/*</p>*/}
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-outline-dark btn-block font-weight-bold text-uppercase">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default RootPage;