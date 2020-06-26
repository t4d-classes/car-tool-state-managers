import { useState } from 'react';

export const useForm = (initialForm) => {

  const [ form, setForm ] = useState(initialForm);

  const change = (e) => {
    setForm({
      ...form,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });
  };

  return [
    form,
    change,
    () => setForm(initialForm),
  ];

};