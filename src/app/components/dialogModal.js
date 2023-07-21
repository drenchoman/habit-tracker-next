'use client';
import { MouseEvent, useEffect, useRef } from 'react';

const isClickInsideRectangle = (e, element) => {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
};

export default function DialogModal({
  title,
  isOpened,
  onClose,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add('modal-open');
    } else {
      ref.current?.close();
      document.body.classList.remove('modal-open');
    }
  }, [isOpened]);

  return (
    <dialog
      id="test"
      ref={ref}
      onCancel={onClose}
      onClick={(e) =>
        ref.current &&
        !isClickInsideRectangle(e, ref.current) &&
        onClose()
      }
    >
      <h3>{title}</h3>
      {children}
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}
