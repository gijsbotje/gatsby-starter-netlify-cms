import React from 'react';
import PropTypes from 'prop-types';
import { ServicesPageTemplate } from '../../templates/services-page';

const ServicesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ServicesPageTemplate
        title={data.title}
        bannerImage={data.bannerImage}
        services={data.services}
        contact={data.contact}
      />
    );
  }
  return <div>Loading...</div>;
};

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

ServicesPagePreview.defaultProps = {
  entry: {
    getIn: undefined,
  },
};

export default ServicesPagePreview;
