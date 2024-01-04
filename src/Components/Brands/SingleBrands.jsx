import React from "react";

const SingleBrands = ({ product }) => {
  return (
    <div className='py-[37px] border-b-[1px] border-b-[#DBDBDB] last:border-none flex flex-col lg:flex-row justify-between lg:items-center gap-4'>
      <div className='flex flex-col md:flex-row md:items-center gap-[26px]'>
        <img
          className='rounded-[10px] w-[189px] h-[189px]'
          src={product.image}
          alt='productImage'
        />
        <div className='max-w-[373px]'>
          <h4 className='text-[24px] text-[#442862] font-medium mb-[17px]'>
            Kimistry Infusions
          </h4>
          <p className='text-[15px] text-[#535353] font-normal'>
            Sponsored Concentrates, Edibles & Ingestibles, Pre-Rolls, Topiclas
          </p>
        </div>
      </div>
      <p className='w-full lg:max-w-[350px] xl:max-w-[581px] text-[17px] text-[#000] font-normal'>
        Click here to begin your magical journey exploring the Kimistry
        experience. From smokables to topicals & edibles, this family-owned
        business will bring smiles to your patients
      </p>
    </div>
  );
};

export default SingleBrands;
