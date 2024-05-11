// import React from 'react';
// import styles from './Bestsellers.module.css';
// import Link from 'next/link';

// const Bestsellers = async ({ collectionId, STRAPI_APP_BASE_URL }) => {
//   try {
//     const response = await fetch('http://localhost:1337/api/products?populate=image');
//     const { data } = await response.json();
//     return (
//       <div className={styles.flex_padding}>
//         <div className={styles.container}>
//           <div className={styles.title}>Bestsellers from {collectionId}</div>
//           <div className={styles.card_container}>
//             {data.map(product => (
//               <Link className={styles.card} href={`/products/${product.attributes.slug}`} key={product.id}>
//                 <img src={STRAPI_APP_BASE_URL + product.attributes.image.data[0].attributes.url} alt={product.attributes.title}/>
//                 <div className={styles.chead}>{product.attributes.title}</div>
//                 <div className={styles.cdesc}>€{product.attributes.price}</div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return null;
//   }
// };

// export default Bestsellers;
