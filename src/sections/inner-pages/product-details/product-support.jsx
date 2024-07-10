const ProductSupport = (popps) => {
  return(
    <div className="w-100 flex justify-center">
      <span>Includes 1 year service warranty<br/>
      <a href={popps.link.link}>Click here </a> to download manual
      <br/>
      <a href={popps.link.brochurelink}>Click here </a> to download brochure</span>
    </div>
  );
};
export default ProductSupport;