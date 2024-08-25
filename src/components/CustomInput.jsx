export default function CustomInput({ placeholder, onChange, value }) {
  // const [value, setValue] = useState('');

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
