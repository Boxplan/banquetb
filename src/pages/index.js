import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;
        const siteDescription = this.props.data.site.siteMetadata.description;

        return (
            <div>
                <Helmet>
                    {/*<title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />*/}
                    <title>Banquetbot is an automated Banquet Assistant</title>
                    <meta name="description" content='Banquetbot is an automated banquet enquiry assistant powered by Banquetbox, a multi property Banquet CRS that helps Banquet halls, Wedding Venues, Convention center automate Reservations, Inventory management, and Buyer Relations.' />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article>
                            <header className="major">
                                <h3>Banquet Inventory</h3>
                                <p>Automated Availablity advise to Buyers</p>
                            </header>
                            <Link to="/banquet-inventory-management" className="link primary"></Link>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Multi Channel Lead Management</h3>
                                <p>Single Dashboard to view leads from all sources</p>
                            </header>
                            <Link to="/lead-management-and-banquet-reservations-system" className="link primary"></Link>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Reports & Analytics</h3>
                                <p>Analyse leads, bookings and conversion by source</p>
                            </header>
                            <Link to="/analytics-and-banquet-channel-conversion-reports" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>
                            <header className="major">
                                <h3>Event Portfolio & Reviews</h3>
                                <p>Automated Review requests to all completed events</p>
                            </header>`
                            <Link to="/recent-events-and-buyer-reviews" className="link primary"></Link>
                        </article>
                        {/*<article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>*/}
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2 style={{textAlign:'center'}}>Dedicated Banquet Website for Hotel Chains</h2>
                            </header>
                            <p>If you are a hotel or a restaurant chain, banquet box will host a Brand dedicated website for your chains' Banquet assets. The SEO optimised website comes complete with BanquetBot and Inventory integration</p>
                            <ul className="actions">
                                <li><Link to="http://nandhanabanquet.com" className="button next">Live Demo</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`


//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Balan-Farm-Green-Convention-Hall-balan-farm3-1.jpg)`}}>
// <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Horizon-Horizon_Octave_JP_Nagar_3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>
//  <article style={{backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/vsimg1/propimages/Woodrose-Blue-Room-and-Lawns-img-conference-3.jpg)`}}>