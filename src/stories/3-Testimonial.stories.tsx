import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Testimonial from '../components/testimonial';

export default {
  title: 'Testimonial',
  decorators: [withKnobs],
};

export const regular: React.FC = () => (
  <div>
    <div style={{ width: '200px' }}>
      <Testimonial
        image={{
          src: text('image src', 'https://global-uploads.webflow.com/5873645dcda6383b06dc220a/5b9a825ea6ef6021d01d6774_DIXA-426-2.jpg'),
          alt: text('image alt', 'John Doe')
        }}
        title={text('title', 'John Doe')}
        subtitle={text('subtitle', 'Software Developer')}
        text={text('text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra, est non mollis fringilla, ligula tellus facilisis odio, vitae aliquam mi turpis sed tortor. Quisque sollicitudin id ex sit amet iaculis. Nam sit amet dolor at leo mollis consequat at vel leo.')}
        borderColor={text('border color', '#f1f2f4')}
      />
    </div>
  </div>
);