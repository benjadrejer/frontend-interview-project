import React, { FC, memo } from 'react';
import classnames from 'classnames';
import Image from '../image';

import styles from './testimonial.module.scss';

interface TestimonialProps {
  className?: Optional<string>;
  title?: string;
  subtitle?: string;
  text?: string;
  borderColor?: string;
  image?: { src: string; alt: string };
}

const Testimonial: FC<TestimonialProps> = memo((props) => {
  const { className, title, subtitle, text, borderColor, image, ...otherProps } = props;

  const rootClass = classnames(
    {
      [styles.testimonial]: true,
    },
  );

  return (
    <div
      {...otherProps}
      className={rootClass}
      style={{ borderColor: borderColor || 'transparent' }}
    >
      {image && (
        <Image
          circle
          src={image.src}
          alt={image.alt}
        />
      )}
      {title && <h4 className={styles.title}>{title}</h4>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});

export default Testimonial;
