import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';

import './Create-modal.css';

interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        required
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </div>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const { mutate, isSuccess, isLoading } = useFoodDataMutate();

  function submit() {
    const foodData: FoodData = {
      title,
      price,
      image,
    };

    mutate(foodData);
  }

  useEffect(() => {
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <button onClick={closeModal} className="btn-close">
          X
        </button>
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container">
          <Input label="Nome" value={title} updateValue={setTitle}></Input>
          <Input label="Preço" value={price} updateValue={setPrice}></Input>
          <Input
            label="Link para imagem"
            value={image}
            updateValue={setImage}
          ></Input>
        </form>
        <button onClick={submit} className="btn-secondary">
          {isLoading ? 'Adicionando...' : 'Adicionar'}
        </button>
      </div>
    </div>
  );
}
