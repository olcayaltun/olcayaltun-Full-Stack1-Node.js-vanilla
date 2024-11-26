const FormData = ({ label, name, type = "text" }) => {
  return (
    <div className="bg-amber-400 w-[400px] p-4 grid">
      <div className="grid gap-1">
        {/* 'htmlFor' ile 'name' eşleştiriliyor */}
        <label htmlFor={name}>{label}</label>
        <input
          id={name} // 'htmlFor' ile eşleşmesi için 'id' ekleniyor
          name={name}
          className="p-1 rounded-md outline-none"
          type={type}
        />
      </div>
    </div>
  );
};

export default FormData;
