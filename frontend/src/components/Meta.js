import React from 'react'
import {Helmet} from 'react-helmet'


const Meta = ({title, descriptoin, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={descriptoin} />
            <meta name='keywords' content={keywords}/>
        </Helmet>
    )
}

Meta.defaultProps = {
    title : 'Welcome To ProShop',
    keywords : 'electronics, bikes, airplanes',
    description : 'We sell the best products'
}

export default Meta
