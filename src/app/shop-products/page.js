/* eslint-disable @next/next/no-img-element */
import Header from "@/Components/Header/Header";
// import Products from "@/Components/Products/Products";

const ShopProductsPage = () => {
  return (
    <div>
      <Header title={"Shop Products"}></Header>
      <section className='container mx-auto mt-7 md:mt-[100px]'>
        <div className='text-center'>
          <h4 className='text-[#000] text-[20px] md:text-[50px] font-medium mb-[26px]'>
            Search Your Proudcts
          </h4>
          <form action=''>
            <div className='md:px-[100px] xl:px-[214px] flex gap-[30px] items-center'>
              <div className='form-control relative w-full '>
                <input
                  className='pl-[52px] py-[26px] w-full  rounded-[15px] bg-[#F6F6F6] border-[1px] border-[#D1D1D1] '
                  type='text'
                  placeholder='Search....'
                />
                <span className='absolute top-[26px] left-[27px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='21'
                    viewBox='0 0 20 21'
                    fill='none'
                  >
                    <circle
                      cx='9.76014'
                      cy='9.99308'
                      r='8.23951'
                      stroke='#878787'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M15.4908 16.1517L18.7212 19.3737'
                      stroke='#878787'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </span>
              </div>
              <button
                className='flex items-center gap-[10px] text-white text-[17px] font-medium pl-[25px] pr-[50px] md:pr-[35px] py-[25px] bg-[#6BCB77] rounded-[15px]'
                type='submit'
              >
                <img src='/Filter.png' alt='' />
                Filter
              </button>
            </div>
          </form>
        </div>
        <h4 className='text-[35px] text-[#000] font-semibold text-center mt-[81px] mb-[36px]'>
          Shop Proudcts
        </h4>
        {/* <Products></Products> */}
      </section>
    </div>
  );
};

export default ShopProductsPage;
