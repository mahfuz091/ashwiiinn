/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const ProductImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    handleImageFiles(files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleImageFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleImageFiles = (files) => {
    const newImages = Array.from(files);
    setSelectedImages((prevImages) => [...prevImages, ...newImages]);

    newImages.forEach((image) => {
      previewImage(image);
    });
  };

  const previewImage = (imageFile) => {
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = () => {
        // Perform operations with the image preview, such as displaying it
        console.log("Selected image:", reader.result);
      };
    }
  };
  return (
    <div className="mb-[65px]">
      ProductImage
      <form action='' className='form-container'>
        <div>

          <div
            style={{
              border: "1px dashed #9B9B9B",
              padding: "98px",
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              style={{ display: "none" }}
              id='fileInput'
              multiple
            />
            <label
              htmlFor='fileInput'
              className='flex flex-col items-center cursor-pointer gap-[30px]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='76'
                height='95'
                viewBox='0 0 76 95'
                fill='none'
              >
                <path
                  d='M52.1557 28.5525H72.9188L47.4368 3.07059V23.8337C47.4368 26.665 49.3244 28.5525 52.1557 28.5525ZM52.1557 37.9903C44.1336 37.9903 37.9991 31.8558 37.9991 23.8337V0.239258H14.4047C6.38259 0.239258 0.248047 6.3738 0.248047 14.3959V80.4602C0.248047 88.4823 6.38259 94.6169 14.4047 94.6169H61.5935C69.6156 94.6169 75.7501 88.4823 75.7501 80.4602V37.9903H52.1557ZM23.8424 28.5525H28.5613C31.3927 28.5525 33.2802 30.4401 33.2802 33.2714C33.2802 36.1027 31.3927 37.9903 28.5613 37.9903H23.8424C21.0111 37.9903 19.1236 36.1027 19.1236 33.2714C19.1236 30.4401 21.0111 28.5525 23.8424 28.5525ZM52.1557 75.7413H23.8424C21.0111 75.7413 19.1236 73.8538 19.1236 71.0225C19.1236 68.1911 21.0111 66.3036 23.8424 66.3036H52.1557C54.9871 66.3036 56.8746 68.1911 56.8746 71.0225C56.8746 73.8538 54.9871 75.7413 52.1557 75.7413ZM52.1557 56.8658H23.8424C21.0111 56.8658 19.1236 54.9783 19.1236 52.1469C19.1236 49.3156 21.0111 47.4281 23.8424 47.4281H52.1557C54.9871 47.4281 56.8746 49.3156 56.8746 52.1469C56.8746 54.9783 54.9871 56.8658 52.1557 56.8658Z'
                  fill='#535353'
                />
              </svg>
              <span>Drag and drop your file here</span>
              <span>or</span>
              <span className='thm-btn w-[162px] cursor-pointer mx-auto'>
                Upload
              </span>
            </label>
          </div>

          <div className='md:grid grid-cols-4 gap-[38px] mt-[40px]'>
            <div className='border-[#9B9B9B] border-[1px] border-dashed rounded-[10px] w-[280px] h-[175px] bg-[#F5F5F5] p-2'>
              {/* {selectedImages.length > 0 && (
              <div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {selectedImages.map((image, index) => (
                    <div
                      key={index}
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Selected ${index}`}
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )} */}
              {selectedImages.length > 0 && (
                <img
                  className="w-[260px] h-[155px]"
                  src={URL.createObjectURL(selectedImages[0])}
                  alt='l'

                />
              )}
            </div>
            <div className='border-[#9B9B9B] border-[1px] border-dashed rounded-[10px] w-[280px] h-[175px] bg-[#F5F5F5] p-2'>

              {selectedImages.length > 1 && (
                <img
                  className="w-[260px] h-[155px]"
                  src={URL.createObjectURL(selectedImages[1])}
                  alt='l'

                />
              )}
            </div>
            <div className='border-[#9B9B9B] border-[1px] border-dashed rounded-[10px] w-[280px] h-[175px] bg-[#F5F5F5] p-2'>

              {selectedImages.length > 2 && (
                <img
                  className="w-[260px] h-[155px]"
                  src={URL.createObjectURL(selectedImages[2])}
                  alt='l'

                />
              )}
            </div>
            <div className='border-[#9B9B9B] border-[1px] border-dashed rounded-[10px] w-[280px] h-[175px] bg-[#F5F5F5] p-2'>

              {selectedImages.length > 3 && (
                <img
                  className="w-[260px] h-[155px]"
                  src={URL.createObjectURL(selectedImages[3])}
                  alt='l'

                />
              )}
            </div>


          </div>
          <ul className="marker:text-[#6BCB77] mt-[40px] list-disc pl-[25px] ">
            <li className="text-[#000] text-[20px] font-medium">700 x 384 minimum dimensions</li>
            <li className="text-[#000] text-[20px] font-medium">10mb Maximum file size</li>
            <li className="text-[#000] text-[20px] font-medium">Avoid using logos for product images</li>
            <li className="text-[#000] text-[20px] font-medium">Rearrange images by dragging photo</li>
          </ul>
        </div>

        <div className="btn-group flex gap-6 mt-[40px]">
          <input type="submit" value="Save" className="thm-btn" />
          <button className="btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProductImage;
