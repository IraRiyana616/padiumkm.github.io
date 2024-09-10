import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import DropdownField from './DropdownField';

const BusinessForm = ({ entityOptions, segmentOptions, typeOptions }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/register-role');
  };
  const [name, setName] = useState('');
  const [entity, setEntity] = useState('');
  const [entityError, setEntityError] = useState('');
  const [segment, setSegment] = useState('');
  const [segmentError, setSegmentError] = useState('');
  const [type, setType] = useState('');
  const [typeError, setTypeError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);

  const handleEntityChange = (e) => {
    const entityValue = e.target.value;
    setEntity(entityValue);
    setEntityError(entityValue.trim() === '' ? 'Pilih Badan Usaha' : '');
  };

  const handleSegmentChange = (e) => {
    const segmentValue = e.target.value;
    setSegment(segmentValue);
    setSegmentError(segmentValue.trim() === '' ? 'Pilih Segmen Usaha' : '');
  };

  const handleTypeChange = (e) => {
    const typeValue = e.target.value;
    setType(typeValue);
    setTypeError(typeValue.trim() === '' ? 'Pilih Tipe Usaha' : '');
  };

  useEffect(() => {
    if (name && entity && segment && type) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, entity, segment, type]);

  return (
    <div className="w-full p-12">
      <div className="flex justify-start items-center mt-5 ">
        <div className="relative w-24 h-24">
          <img
            src="https://padiumkm.id/_next/static/media/logo.08a5ef96.svg"
            alt="Logo PaDi UMKM"
          />
        </div>
      </div>
      <div className="text-2xl font-bold font-nunito">
        Daftar sebagai pembeli B2B
      </div>
      <div className="font-nunito text-custom-12 text-tertiary80 mt-2">
        Mulai perjalanan belanja produk UMKM terbaik dari seluruh Indonesia
      </div>

      <DropdownField
        label="Badan Usaha"
        id="entity"
        options={entityOptions}
        value={entity}
        onChange={handleEntityChange}
        error={entityError}
      />

      <InputField
        label="Nama Perusahaan"
        id="name"
        value={name}
        onChange={handleNameChange}
        placeholder="PT Bina Perusahaan"
      />

      <DropdownField
        label="Segmen Usaha"
        id="segment"
        options={segmentOptions}
        value={segment}
        onChange={handleSegmentChange}
        error={segmentError}
      />

      <DropdownField
        label="Tipe Usaha"
        id="type"
        options={typeOptions}
        value={type}
        onChange={handleTypeChange}
        error={typeError}
      />

      <div className="w-full mt-7">
        <button
          className={`text-custom-14 w-full py-2.5 border-custom-17 rounded-md flex items-center justify-center transition-colors duration-300 ${
            isFormValid ? 'bg-primary50' : 'bg-gray-300'
          }`}
          disabled={!isFormValid}>
          <span className="font-semibold font-nunito text-white">Daftar</span>
        </button>
        {/* Button Kembali  */}
        <div className="w-full mt-4">
          <button
            className="text-custom-14 w-full py-2.5  border-custom-17 rounded-md bg-blue-100 flex items-center justify-center transition-colors duration-300"
            onClick={handleBack}>
            <span className="font-semibold font-nunito text-primary50">
              Kembali
            </span>
          </button>
        </div>

        {/* Opsi telah mengingat password  */}
        <div className="w-full mt-8 mb-10">
          <p className="text-center text-custom-14">
            Ingat password?
            <a href="/login">
              <span className="text-custom-14 font-bold text-primary60 ml-2 cursor-pointer">
                Masuk Sekarang
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessForm;
