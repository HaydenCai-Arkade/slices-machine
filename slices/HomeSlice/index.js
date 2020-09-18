import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center',
};

const h2 = {
  color: '#8592e0',
};

const MySlice = ({ slice }) => (
  
  <section style={section}>
    { console.log(slice.items)}
  
    { slice.primary.title ? <RichText render={slice.primary.title} /> : <p></p>}
    {slice.items.map((item)=>{
      return( <img src={item.image.url} alt=""/>)
     
    })}
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
