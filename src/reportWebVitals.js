/**
 * Reports web vitals performance metrics using the web-vitals library.
 * This function conditionally imports the web-vitals library and calls
 * various performance metric functions if a valid callback is provided.
 * @param {Function} onPerfEntry - Callback function to handle performance entries.
 *                                 This function will be called for each performance metric.
 * @returns {void} This function does not return a value.
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
